<template>
  <div class="home">
    <!-- <Hello msg='ssssssssssssssss' />
    <Hello :msg="msg" />
    {{msg}}
    <Hello  {{msg}} /> 
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Hello :msg="convertToUpper" :titleBtn="titleBtn" :click="clicked" />
    <HelloWorld  v-for="(item, index)  in abc" :key="index" :msg="abc.title"  :content="abc.content"/>
    

     <table>
        <tr is="HelloWorld"></tr>
    </table>

  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/HelloWorld1.vue";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home2",
  components: {
    Hello,
    HelloWorld
  },
  data() {
    return {
      msg: "Hello Home 2",
      titleBtn: "Click",
      abc :{
        title: "hello",
        content: "vãi lol"
      }
    };
  },
  methods: {
    clicked() {
      alert("id");
    },
  },
  computed: {
    convertToUpper: function () {
      return this.msg.toUpperCase();
    },
  },
};
</script>
