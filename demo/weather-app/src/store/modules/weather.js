import axiosBackend from "@/axios-backend.js";
import _ from "lodash";
import i18n from "@/i18n";
import constants from "@/constants";

const getDefaultState = () => {
    return {
        currentWeatherData: {
            main: {},
            weather: [0],
            coord: {},
            wind: {},
            clouds: {},
        },

        appid: "2b3526b1bd25d0bdb1751e85c89badb0",
        cityName: localStorage.getItem(constants.localKey.city) || "hanoi",
        error: null,

        units:
            localStorage.getItem(constants.localKey.units) || JSON.stringify(constants.unitsObjMetric),
        lang: localStorage.getItem(constants.localKey.lang) || "en",
    };
};

// initial state
const state = getDefaultState();

const getters = {
    getCurrentWeathers(state) {
        return state.currentWeatherData;
    },
    getUnitsTemp(state) {
        return JSON.parse(state.units);
    },
    getError(state) {
        return state.error;
    },
    getLanguage(state) {
        return state.lang;
    },
};

const actions = {
    resetCartState({ commit }) {
        commit("resetState");
    },
    fetchCurrentWeather({ commit, state }) {
        commit("SET_IS_LOADING", true);
        axiosBackend
            .get(
                "weather?q=" +
                state.cityName +
                "&units=" +
                JSON.parse(state.units).length +
                "&appid=" +
                state.appid +
                "&lang=" +
                state.lang
            )
            .then((response) => {
                var data = _.get(response, "data");
                commit("SET_CURRENT_WEATHER_DATA", data);
                commit("SAVE_CURRENT_CITY", state.cityName);
            })
            .catch((err) => {
                commit("SET_SHOW_ERROR", err.response);
            })
            .finally(() => {
                commit("SET_IS_LOADING", false);
            });
    },

    handleChangeLanguage({ commit, dispatch }, data) {
        commit("SET_CURRENT_LANGUAGE", data);
        dispatch("fetchCurrentWeather");
    },

    handleUnitsTemp({ commit, dispatch }, data) {
        commit("SET_CURRENT_UNITS_TEMP", data);
        dispatch("fetchCurrentWeather");
    },

    handleSearchCity({ commit, dispatch }, data) {
        commit("SET_CURRENT_CITY", data);
        dispatch("fetchCurrentWeather");
    },
};

const mutations = {
    resetState(state) {
        // Merge rather than replace so we don't lose observers
        // https://github.com/vuejs/vuex/issues/1118
        Object.assign(state, getDefaultState());
    },

    SET_CURRENT_WEATHER_DATA(state, currentWeather) {
        return (state.currentWeatherData = currentWeather);
    },

    SET_CURRENT_LANGUAGE(state, language) {
        localStorage.setItem(constants.localKey.lang, language);
        return (state.lang = language);
    },

    SET_CURRENT_UNITS_TEMP(state, units) {
        units =
            units === constants.unitsObjMetric.length
                ? JSON.stringify(constants.unitsObjMetric)
                : JSON.stringify(constants.unitsObjImperial);
        localStorage.setItem(constants.localKey.units, units);
        return (state.units = units);
    },

    SET_CURRENT_CITY(state, cityName) {
        return (state.cityName = cityName);
    },

    SAVE_CURRENT_CITY(state, cityName) {
        localStorage.setItem(constants.localKey.city, cityName);
        return (state.cityName = cityName);
    },

    SET_SHOW_ERROR(state, error) {
        if (error.status === 404) {
            return (state.error = i18n.t("error_404"));
        }
        return (state.error = "");
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
