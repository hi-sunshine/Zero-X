/**
 * @file mock api entry
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const Mock = require('./lib');
const User = require('./api/user');

const apiModels = [User];
module.exports = {
    registerAll: () => {
        apiModels.forEach(model => {
            Object.keys(model).forEach(key => {
                Mock.Register(model[key]);
            });
        });
    },
    loadMock: (req, res, next, app, server, compiler) => {
        Mock.LoadMock(req, res, next, app, server, compiler);
    }
};