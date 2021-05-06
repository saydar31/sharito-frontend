import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "@/views/NotFound";



Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/404',
            component: NotFound,
            name: 'NotFound'
        },
        // Должно стоять последним
        {
            path: '/*',
            redirect: '/404'
        }
    ]
})


