import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

import App from './App.vue'
import router from './router'
import store from './store.js'
import Vuex from 'vuex'

Vue.config.productionTip = false

// Vue.component('todo-item', {
//   props: ['todoApp'],
//   template: '<div v-if="todoApp" >Đây là một đề mục todo {{todoApp}}</div>'
// })
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Chúng ta khởi tạo một object "data"
var data = { a: 1 }

// Object này được truyền vào một đối tượng Vue
var vm = new Vue({
  data: data
})

// Truy xuất đến thuộc tính của đối tượng 
// trả về giá trị của object "data" đã khởi tạo 
vm.a == data.a // => true
console.log(vm.a);

// Thay đổi thuộc tính của vm cũng
// ảnh hưởng đến dữ liệu ban đầu
vm.a = 2
data.a // => 2
console.log(data.a);

// ... và ngược lại
data.a = 3
vm.a // => 3

console.log(vm.a);