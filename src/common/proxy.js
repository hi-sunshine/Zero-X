/**
 * @file proxy.js
 *
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 * @see https://webpack.js.org/configuration/dev-server/#devserverproxy
 * @see https://github.com/chimurai/http-proxy-middleware 
 */
module.exports = {
    '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '/path' }
    }
};