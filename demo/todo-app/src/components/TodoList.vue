<template>
  <div class="container">
    <TodoItem
      v-for="(item, index) in getTodoList()"
      :key="index"
      :todoList="item"
    />
    <!-- {{ fullName }} -->
    <!-- {{ token }} -->
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    // msg: String,
  },
  components: {
    TodoItem,
  },
  data() {
    return {
      titleBtn: "Click",
      todoList: null,
      firstName: "Evan",
      lastName: "You",
      // token: null,
    };
  },
  methods: {
    getTodoList: function () {
      this.todoList = JSON.parse(localStorage.storedData || "[]");
      return this.todoList;
    },
  },
  watch: {},

  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
