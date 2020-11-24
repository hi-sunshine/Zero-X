/**
 * @file export mock
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const _ = require('lodash');

const Mock = {
    on: true,
    rules: [],
};

Mock.Use = () => {
    Mock.on = true;
};

Mock.Reset = () => {
    Mock.on = false;
    Mock.rules = [];
};

Mock.Restore = () => {
    Mock.on = false;
};

Mock.Register = (c) => {
    c['on'] = c.hasOwnProperty('on') ? c['on'] : true;
    Mock.rules.push(c);
};

Mock.findRule = (path, method) => {
    const result = {willMock: false, rule: null};
    if (Mock.on) {
        for (let r of Mock.rules) {
            if (r.on
                && r.method.toUpperCase() === method
                && ((_.isString(r.url) && r.url === path) || (_.isRegExp(r.url) && r.url.test(path)))
            ) {
                result.willMock = true;
                result.rule = r;
                break;
            }
        }
    }
    return result;
};

Mock.LoadMock = (req, res, next, app, server, compiler) => {
    if (req && req.path && req.method) {
        const {willMock, rule} = Mock.findRule(req.path, req.method);
        if (willMock) {
            console.log(`[${req.method.toUpperCase()}]${req.path} mocked by mocker...`);
            if (_.isFunction(rule.response)) {
                res.status(rule.status).send(rule.response(req, res));
            }
            else {
                res.status(rule.status).send(rule.response);
            }
            return;
        }
    }
    next();
};

module.exports = Mock;