import rest from "@/restUtils";
import router from '@/router';
import constants from '@/constants';

const emptyUser = {
    id: 0,
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
    email: '',
    additionalPhone: '',
    role: '',
};
export default {
    namespace: true,
    state: {
        user: Object.assign({}, emptyUser),
        token: ''
    },
    actions: {
        async login({commit, dispatch, getters}, user) {
            console.log(user);
            try {
                let tokenData = await rest.doPost(
                    `/auth/login`,
                    {
                        login: user.email,
                        password: user.password
                    });
                commit('LOGIN_SUCCESS', tokenData);
            } catch (error) {
                console.log(error);
                commit('AUTH_ERROR');
                return error;
            }
            try {
                await dispatch('loadCurrentUserData');
                dispatch('redirectAfterLogin');
            } catch (error) {
                dispatch('logout');
                router.push({name: 'Index'});
            }
        },
        async signUp({commit, dispatch, getters}, user) {
            console.log(user);
            try {
                let data = await rest.doPost(
                    `/auth/register`,
                    {
                        login: user.email,
                        password: user.password
                    });
                return {
                    success: true,
                    data: data
                }
            } catch (error) {
                console.log(error);
                commit('AUTH_ERROR');
                return {
                    success: false,
                    data: error
                };
            }
        },

        redirectAfterLogin({context, getters}) {
            let redirectTo = sessionStorage.getItem(constants.SESSION_STORAGE_REDIRECT);
            if (redirectTo && redirectTo.length > 0) {
                sessionStorage.removeItem(constants.SESSION_STORAGE_REDIRECT);
                router.push(redirectTo);
            } else {
                router.push({name: 'Profile'})
            }
        },
        async loadCurrentUserData({commit, dispatch}) {
            let success;
            try {
                let userData = await rest.doGet(`/user`);
                commit('LOAD_USER_DATA', userData);
                success = true;
            } catch (error) {
                success = false;
                dispatch('logout');
            }

            return success;
        },
        async logout({commit, dispatch}) {
            commit('LOGOUT');
        },

        async addProduct(context, body){
            try {
                let response = await rest.doPost(
                    `/product`,
                    body);
                return {
                    data: response,
                    success: true
                }
            } catch (error) {
                console.log(error);
                return {
                    data: error,
                    success: false
                }
            }
        },
        async getProduct(context, data){
            try {
                let response = await rest.doGet(
                    `/product/${data.id}`);
                return {
                    data: response,
                    success: true
                }
            } catch (error) {
                console.log(error);
                return {
                    data: error,
                    success: false
                }
            }
        },

        async getProducts(context, data){
            try {
                let response = await rest.doGet(
                    `/product?page=${data.page}`);
                return {
                    data: response,
                    success: true
                }
            } catch (error) {
                console.log(error);
                return {
                    data: error,
                    success: false
                }
            }
        },
        async createOrder(context, data){
            try {
                let response = await rest.doPost(
                    `/product/${data.id}/order?from=${data.from}&to=${data.to}`);
                return {
                    data: response,
                    success: true
                }
            } catch (error) {
                console.log(error);
                return {
                    data: error,
                    success: false
                }
            }
        }
    },
    mutations: {
        LOGIN_SUCCESS(state, user) {
            state.token = user.token;
            localStorage.setItem(constants.SESSION_STORAGE_TOKEN, user.token);
        },

        AUTH_ERROR(state, payload) {
            state.token = '';
            state.user = Object.assign({}, emptyUser);
        },

        LOAD_USER_DATA(state, payload) {
            Object.assign(state.user, payload);
        },

        LOGOUT(state) {
            state.token = '';
            state.user = Object.assign({}, emptyUser);
            localStorage.removeItem(constants.SESSION_STORAGE_TOKEN);
        }
    },
    getters: {
        authUser: state => state.user,
        token: state => state.token,
        role: state => state.role,
        isAuthenticated: state => state.token.length !== 0
    }
}