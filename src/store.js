import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie';
import profile from "@/store/modules/profile";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        profile
    },

    state: {
        restQueryCount: 0
    },

    actions: {
        restStart({commit}) {
            commit('plusQueryCount');
        },

        restFinish({commit}) {
            commit('minusQueryCount');
        }
    },

    mutations: {
        minusQueryCount: (state, payload) => {
            if (state.restQueryCount > 0)
                state.restQueryCount--;
        },

        plusQueryCount: (state, payload) => {
            state.restQueryCount++;
        },
    },

    getters: {
        restQueryIsPerforming: (state) => state.restQueryCount > 0
    },

    plugins: [createPersistedState({
        key: 'profile',
        paths: ['profile'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) =>
                Cookies.set(key, value, {expires: 3}),
            removeItem: key => Cookies.remove(key)
        }
    })]
})
