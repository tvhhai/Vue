

export default {
    state: {
        age: 22
    },
    getters: {
        getAge(state) {
            return "Age", state.age + " year old."
        },

    },
    mutations: {
        changeAge(state, newAge) {
            state.age = newAge
        }
    },
    actions: {
        handleChangeAge(context, newAge) {
            context.commit("changeAge", newAge)
        }
    }
}