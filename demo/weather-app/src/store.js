import Vue from "vue";
import Vuex from "vuex";

import weather from "@/store/modules/weather";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        SET_IS_LOADING(state, isLoading) {
            return (state.isLoading = isLoading);
        },
    },
    actions: {},
    modules: {
        weather,
    },
});
