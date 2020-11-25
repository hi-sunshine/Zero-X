import Vue from 'vue';
import {destroyVM} from '../utils';
import User from '../../src/pages/user';

// see: https://mochajs.org/#hooks
describe('user', () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });

    // https://www.chaijs.com/api/
    it('userInfo should init with empty string', () => {
        expect(User.data.userInfo).to.equal('');
    });

    it('mount', () => {
        let vm = new Vue(User).$mount();
        expect(vm.name).to.equal('user'); 
    });
});