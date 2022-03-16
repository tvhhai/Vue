import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/components/home'
import WeatherView from '@/components/informationWeather/inforWeather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
