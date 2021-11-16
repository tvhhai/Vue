<template>
  <div>
    <div id="nav">
      <span v-for="(item, index)  in menuItems" :key="index">
        <router-link :to="item.url">{{item.title}}</router-link> |
      </span>

    
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Home 2",
          url: "/home2",
        },
      ],
    };
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
