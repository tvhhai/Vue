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
  font-size: 18px;
  color: white;
  display: grid;
  place-items: center;
  .row {
    margin-right: 0px;
    margin-left: 0px;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #fff url("~@/assets/bg-weather.webp") center center fixed
      no-repeat;
    background-size: cover;
    filter: blur(4px);
    // this does the trick
  }
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
  nav {
    padding: 30px;
    position: absolute;
    top: 0;
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
