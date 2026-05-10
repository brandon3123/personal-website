const mailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const from = req.body.emailAddress;
    const message = req.body.emailMessage;
    const name = req.body.name;

    if (!from || !message || !name) {
        return res.status(400).json({
            error: "Missing one of the following required attributes. emailMessage, name or emailAddress"
        });
    }

    const email = process.env.EMAIL;

    const gmail = mailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            type: "OAuth2",
            user: email,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            accessToken: process.env.OAUTH_ACCESS_TOKEN,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    });

    try {
        await gmail.sendMail({
            from: from,
            to: email,
            subject: 'Personal Site Email From (' + from + ')',
            text: message + '\n\nSincerely,\n\n' + name
        });
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
