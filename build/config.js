/**
 * @file config.js
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const path = require('path');

module.exports = {
    dev: {

    },
    prod: {

    },
    common: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    }
};