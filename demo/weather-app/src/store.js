import Vue from 'vue'
import Vuex from 'vuex'
import axiosBackend from "@/axios-backend.js";
import _ from 'lodash';
import i18n from './i18n'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        isLoading: false,
        currentWeatherData: {},

        appid: '2b3526b1bd25d0bdb1751e85c89badb0',
        cityName: localStorage.getItem('city') || 'vietnam',
        error: {},


        units: localStorage.getItem('units') || JSON.stringify({ id: "metric", temp: "°C", speed: "m/s" }),
        lang: localStorage.getItem('lang') || 'en'

    },
    getters: {
        isLoading(state) {
            return state.isLoading
        },
        getCurrentWeathers(state) {
            return state.currentWeatherData
        },
        getUnitsTemp(state) {
            return JSON.parse(state.units)
        },
        getError(state) {
            return state.error
        }
    },
    mutations: {
        SET_IS_LOADING(state, isLoading) {
            return state.isLoading = isLoading
        },

        SET_CURRENT_WEATHER_DATA(state, currentWeather) {
            return state.currentWeatherData = currentWeather
        },

        SET_CURRENT_LANGUAGE(state, language) {
            localStorage.setItem("lang", language);
            return state.lang = language
        },

        SET_CURRENT_UNITS_TEMP(state, units) {
            let unitsObjMetric = { id: "metric", temp: "°C", speed: "m/s" },
                unitsObjImperial = { id: "imperial", temp: "°F", speed: "mph" };
            units = units === "metric" ? JSON.stringify(unitsObjMetric) : JSON.stringify(unitsObjImperial)
            localStorage.setItem("units", units);
            return state.units = units
        },

        SET_CURRENT_CITY(state, cityName) {
            return state.cityName = cityName
        },

        SAVE_CURRENT_CITY(state, cityName) {
            console.log(cityName);
            localStorage.setItem("city", cityName)
            return state.cityName = cityName
        },

        SET_SHOW_ERROR(state, error) {
            if (error.status === 404) {
                return state.error = i18n.t("error_404")
            }
            return state.error = ''
        }
    },
    actions: {
        fetchCurrentWeather({ commit, state }) {
            axiosBackend.get(
                'weather?q=' + state.cityName + '&units=' + JSON.parse(state.units).id + '&appid=' + state.appid + '&lang=' + state.lang
            ).then(response => {
                var data = _.get(response, 'data');
                commit('SET_CURRENT_WEATHER_DATA', data)
                if (state.error) {
                    commit('SET_SHOW_ERROR', "")
                }
                commit('SAVE_CURRENT_CITY', state.cityName)
            }).catch(err => {
                console.log(err.response);
                commit('SET_SHOW_ERROR', err.response)

            })
        },

        handleChangeLanguage({ commit, dispatch }, data) {
            commit('SET_CURRENT_LANGUAGE', data)
            dispatch("fetchCurrentWeather");
        },

        handleUnitsTemp({ commit, dispatch }, data) {
            commit('SET_CURRENT_UNITS_TEMP', data)
            dispatch("fetchCurrentWeather");
        },

        handleSearchCity({ commit, dispatch }, data) {
            commit('SET_CURRENT_CITY', data)
            dispatch("fetchCurrentWeather");
        },

    },
    modules: {
    }
})