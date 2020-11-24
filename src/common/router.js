/**
 * @file router config
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
const User = () => import(/* webpackChunkName: "user" */'../pages/user');

export default [
    /* eslint-disable no-undef */
    {
        path: '/',
        name: 'user',
        component: User,
    }
];
