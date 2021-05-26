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
                        phone: user.login,
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
    },
    mutations: {
        LOGIN_SUCCESS(state, user) {
            state.token = user.accessToken;
            localStorage.setItem(constants.SESSION_STORAGE_TOKEN, user.accessToken);
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
        isAuthenticated: state => state.user.id !== 0
    }
}