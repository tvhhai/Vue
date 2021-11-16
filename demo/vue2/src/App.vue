<template>
  <div id="app">
   <Menu/>
  </div>
</template>


<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "Home2",
  components: {
    Menu,
  },
  
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
