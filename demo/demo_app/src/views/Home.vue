<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
    <Sidebar></Sidebar>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/SideBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Sidebar,
  }
}
</script>
