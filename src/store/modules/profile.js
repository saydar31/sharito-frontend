import restUtils from "@/restUtils";
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
    mutations: {
        LOGIN_SUCCESS(state, user) {
            state.token = user.accessToken;
            localStorage.setItem(constants.SESSION_STORAGE_TOKEN, user.accessToken);
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