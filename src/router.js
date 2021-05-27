import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import NotFound from "@/views/NotFound";
import SignUp from "@/views/SignUp";
import Profile from "@/views/Profile";
import Login from "@/views/Login";
import NewItem from "@/views/NewItem";
import Index from '@/views/Index';
import Product from "@/views/Product";
import ProductsList from "@/views/ProductsList";


Vue.use(Router);

const checkAuthenticated = (next) => {
    let authenticated = store.getters.isAuthenticated;
    if (!authenticated) {
        next({name: 'Login'})
    } else {
        next();
    }
};
const isAnonymous = (next) => {
    let authenticated = store.getters.isAuthenticated;
    if (!!authenticated) {
        next({name: 'Index'})
    } else {
        next();
    }
};
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
            path: '/',
            component: Index,
            name: 'Index'
        },
        {
            path: '/signUp',
            component: SignUp,
            name: 'SignUp',
            beforeEnter: (to, from, next) => {
                isAnonymous(next)
            }
        },
        {
            path: '/profile',
            component: Profile,
            name: 'Profile',
            beforeEnter: (to, from, next) => {
                checkAuthenticated(next)
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'Login',
            beforeEnter: (to, from, next) => {
                isAnonymous(next)
            }
        },
        {
            path: '/new-item',
            component: NewItem,
            name: 'NewItem',
            beforeEnter: (to, from, next) => {
                checkAuthenticated(next)
            }
        },

        {
            path: '/product/:id',
            component: Product,
            name: 'Product',
            props: true,
            beforeEnter: (to, from, next) => {
                checkAuthenticated(next)
            }
        },

        {
            path: '/products',
            component: ProductsList,
            name: 'ProductList'
        },

        {
            path: '/*',
            redirect: '/404'
        }
    ]
})


