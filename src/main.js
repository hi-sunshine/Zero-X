/**
 * Zero-X
 * Copyright (c) 2020. All Rights Reserved.
 *
 * @file main entry for project
 * @author nimingdexiaohai(nimingdexiaohai@163.com)
 */
import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import routes from './common/router';
import ApiClient from './common/client';
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.prototype.$client = new ApiClient();

const router = new VueRouter({routes});

const app = new Vue({
  router
}).$mount('#app');
