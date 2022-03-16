<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/weather">Weather</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang='scss'>
input {
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  background-image: url("./assets/bg-weather.webp");
  background-repeat: no-repeat;
  // background-color: #cccccc;
  color: white;
  background-size: cover;
  height: 100vh;
  overflow: auto;
  ul {
    list-style-type: none;
    padding-left: 16pt;
    padding-right: 16pt;
    border-left: 1px solid #eb6e4b;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    line-height: 20px;

    li {
      text-decoration: none;
      margin-right: 16pt;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }
  }
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
