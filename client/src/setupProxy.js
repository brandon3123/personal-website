const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/contactMe',
        createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true,
        })
    );
};