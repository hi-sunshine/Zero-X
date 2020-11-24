/**
 * @file mock api for user model
 *
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
module.exports = {
    queryUser: {
        url: /\/user\/\d$/,
        method: 'get',
        status: 200,
        response: {
            success: true,
            message: 'get user info success',
            data: {
                id: 1,
                name: 'John'
            }
        }
    },
    listUsers: {
        url: /\/user$/,
        method: 'get',
        status: 200,
        response: {
            success: true,
            message: 'list user info success',
            data: {
                users: [
                    { id: 1, name: 'John' },
                    { id: 2, name: 'Sharon' }
                ]
            }
        }
    }
};