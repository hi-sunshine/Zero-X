/**
 * @file Test case load entry
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
// see: https://webpack.js.org/guides/dependency-management/#require-context
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
