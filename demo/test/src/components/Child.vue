<template>
  <div class="some-child-class" id="child">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "ChildS",
  inheritAttrs: false,
  props: {
    msg: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
};
</script>

 
<style scoped>
</style>
