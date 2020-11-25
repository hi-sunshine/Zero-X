/**
 * @file Karma test config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
let webpackConfig = require('../build/webpack.config.test.js');

module.exports = config => {
    config.set({
        basePath: '',
        // see: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],
        files: ['./index.js'],
        exclude: [],
        // see: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        // see: https://github.com/ryanclark/karma-webpack
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['spec', 'coverage'],
        // see: https://npmjs.org/browse/keyword/karma-reporter
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        // watching file and executing tests whenever any file changes
        autoWatch: true,
        // see: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome']
    });
};
