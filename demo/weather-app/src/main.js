import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Vuelidate from 'vuelidate'
import _ from "lodash"
import dayjs from 'dayjs'

import AppHeader from "@/components/header.vue";
import AppLoader from "@/components/loader.vue";

Vue.config.productionTip = false
Vue.component('AppHeader', AppHeader)
Vue.component('AppLoader', AppLoader)
Vue.filter('formatTemp', function (value) {
  return value ? Math.ceil(value) : ""
})

Vue.use(_)
Vue.use(Vuelidate)
Vue.use(dayjs)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
