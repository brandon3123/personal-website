const plan = require('flightplan');
const appName = 'personal-website';
const serverCredentials = require('./serverCredentials.json');

const tmpDir = appName + '-' + new Date().getTime();

plan.target('deploy', [
    {
        host: serverCredentials.host,
        username: serverCredentials.username,
        // password: process.env.SSH_AUTH_SOCK
        password: serverCredentials.password
    }
]);

// Remove existing code on droplet
plan.remote(function(remote) {
    remote.log('Removing existing deployment from remote server...');
    remote.rm('-rf /home/deploy/' + appName + '*');
});

// run commands on localhost
plan.local(function(local) {
    local.log('Copy files to remote hosts...');
    let filesToCopy = local.exec('git ls-files', {silent: true});
    // rsync files to all the destination's hosts
    local.transfer(filesToCopy, '/tmp/' + tmpDir);
    local.transfer('server/routes/emailClientInfo.json', '/tmp/' + tmpDir)
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
    remote.rm('-rf /home/deploy/' + appName + '*');
    remote.log('Move folder to root...');
    remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: serverCredentials.username});
    remote.rm('-rf /tmp/' + tmpDir);

    remote.log('Installing dependencies...');
    remote.sudo('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: serverCredentials.username});
    remote.sudo('npm --prefix ~/' + tmpDir + '/client' + ' install ~/' + tmpDir + '/client', {user: serverCredentials.username});

    remote.log('Reload application...');
    remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: serverCredentials.username});
    remote.exec('pm2 delete all');
    remote.exec('cd ' + appName + "/");
    remote.exec('pm2 start npm --name "website" -- --prefix ~/' + tmpDir + ' run dev');
});