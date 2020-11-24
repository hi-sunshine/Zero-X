/**
 * @file webpack.config.dev.js
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const config = require('./config');
const webpack = require('webpack');
const MockUp = require('../mock/index');
const proxy = require('../src/common/proxy');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    stats: 'minimal',
    plugins: [
        new BundleAnalyzerPlugin({
            // 'disabled' will close analyser
            analyzerMode: 'server',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        open: true,
        before: function(app, server, compiler) {
            MockUp.registerAll();
            server.use(function(req, res, next) {
                MockUp.loadMock(req, res, next);
            });
        },
        // proxy: proxy
    }
});