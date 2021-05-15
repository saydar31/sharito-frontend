import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "@/views/NotFound";
import SignUp from "@/views/SignUp";
import Profile from "@/views/Profile";
import Login from "@/views/Login";


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
        {
            path: '/signUp',
            component: SignUp,
            name: 'SignUp'
        },
        {
            path: '/profile',
            component: Profile,
            name: 'Profile'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        // Должно стоять последним
        {
            path: '/*',
            redirect: '/404'
        }
    ]
})


