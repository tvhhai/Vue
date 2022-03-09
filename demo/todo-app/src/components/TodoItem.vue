<template>
  <div class="container">
    <div class="todo">
      <span style="color: red"> {{ todoList.id }} </span>
      <span style="color: red"> {{ todoList.title }} </span>
      <span style="color: red"> {{ todoList.completed }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: Object,
    // content:String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
