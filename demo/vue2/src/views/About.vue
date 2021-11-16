<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="btn btn-primary" @click="showAlert">Click</button>
    <input type="text" v-model="name" />

    <span>{{a}} </span>
  </div>
</template>


<script>
export default {
  name: "About",
  data() {
    return {
      name: null,
      a: null
    };
  },
  methods: {
    showAlert: function () {
      // alert("bạn vừa click vào button");
      return this.a = this.name;
    },
    // convertToUpper: function () {
    //   return this.msg.toUpperCase();
    // },
  },
  // watch: {
  //   convertToUpper: function () {
  //     alert(this.name);
  //   },
  // },
  computed: {
    convertToUpper: {
      get: function () {
        return this.name.toUpperCase();
      },
      set: function (name) {
        this.name = name;
      },
    },
  },
};
</script>