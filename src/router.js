import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import constants from '@/constants';



Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: []
})


