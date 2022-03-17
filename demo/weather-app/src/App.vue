<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/weather">Weather</router-link>
    </nav>
    <router-view />
    <AppLoader v-if="isLoading" />
  </div>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>



<style lang='scss'>
input {
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  background-image: url("~@/assets/bg-weather.webp");
  background-repeat: no-repeat;
  color: white;
  background-size: cover;
  height: 100vh;
  overflow: auto;
  select {
    background: none;
    border: none;
    color: white;
    outline: none;
    option {
      color: black;
    }
  }
  h4 {
    font-weight: 700;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: white;
    opacity: 0.5;
  }

  nav a.router-link-exact-active {
    color: #42b983;
    opacity: 1;
  }
}
</style>
