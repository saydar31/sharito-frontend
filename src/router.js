import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "@/views/NotFound";
import SignUp from "@/views/SignUp";
import Profile from "@/views/Profile";
import Login from "@/views/Login";
import NewItem from "@/views/NewItem";
import Index from  '@/views/Index';
import Product from "@/views/Product";
import ProductsList from "@/views/ProductsList";


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
            path: '/',
            component: Index,
            name: 'Index'
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
        {
            path: '/new-item',
            component: NewItem,
            name: 'NewItem'
        },

        {
            path: '/product/:id',
            component: Product,
            name: 'Product',
            props: true
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


