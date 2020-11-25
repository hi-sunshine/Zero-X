/**
 * @file webpack.config.test.js
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const config = require('./config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'test',
    devtool: 'eval-cheap-source-map',
    stats: 'minimal',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        open: true
    }
});