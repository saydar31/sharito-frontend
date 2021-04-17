import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {},

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

    plugins: []
})
