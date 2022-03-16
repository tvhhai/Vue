<template>
  <div class="count">
    <!-- <div class="btn" @click="decrement">-</div>
    <h1>{{ count }}</h1>
    <div class="btn" @click="increment">+</div> -->

    <InFo />
  </div>
</template>

<script>
import InFo from "./VueX.vue";

export default {
  name: "CountS",
  components: { InFo },
  props: {},
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      console.log("+");
      this.count++;
    },
    decrement() {
      console.log("-");

      this.count--;
    },
  },
};
</script>

 
<style scoped>
</style>
