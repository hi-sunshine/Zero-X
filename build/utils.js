/**
 * @file utils.js
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const path = require('path');
const config = require('./config');

module.exports = {
    // 按文件后缀分组到同类型文件目录下
    genFilePathWithName: function(fileName) {
        return path.posix.join(config.common.assetsSubDirectory, path.extname(fileName).substring(1), fileName);
    }
}