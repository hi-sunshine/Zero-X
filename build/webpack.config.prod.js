/**
 * @file webpack.config.prod.js
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const config = require('./config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    stats: 'minimal',
});