import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './router/CreateItem.vue';
import DisplayItem from './router/DisplayItem.vue';
import EditItem from './router/EditItem.vue';

const routes = [
  {
    name: 'CreateItem',
    path: '/create',
    component: CreateItem
  },
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  },
   
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
