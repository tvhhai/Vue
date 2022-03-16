import Vue from 'vue'
import Vuex from 'vuex'
import age from '@/store/module/age'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0,
        username: 'Hai Tran',
        // age: 22
    },
    getters: {
        getUserName(state) {
            return "User Name" + state.username
        },
        // getAge(state) {
        //     return "Age", state.age + " year old."
        // },

    },
    mutations: {
        changeUserName(state, newUserName) {
            state.username = newUserName
        }
    },
    actions: {
        handleChangeUserName(context, newUserName) {
            context.commit("changeUserName", newUserName)
        }
    },
    modules: {
        age
    }
})