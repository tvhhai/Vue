import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Vuelidate from 'vuelidate'
//eslint-disable-next-line
import _ from 'lodash';
import * as VueGoogleMaps from "vue2-google-maps";

// window._ = require('lodash');

import AppHeader from "@/components/header/header.vue";

Vue.config.productionTip = false
Vue.component('AppHeader', AppHeader)

// Vue.use(_)
Vue.use(Vuelidate)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCXR395d1CwMYEmnT67nCddYSKX9mNR93E",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
