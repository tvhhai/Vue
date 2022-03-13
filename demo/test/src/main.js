import Vue from 'vue/dist/vue.js'

import App from './App.vue'

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todoApp'],
  template: '<div v-if="todoApp" >Đây là một đề mục todo {{todoApp}}</div>'
})
new Vue({
  render: h => h(App),
}).$mount('#app')
 
