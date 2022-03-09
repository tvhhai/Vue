<template>
  <div class="container">
    <TodoInput @saveTodo="saveTodo" :todoList="todoLists" />
    <TodoItem
      v-for="(item, index) in todoLists"
      :key="index"
      :todoList="item"
      @editTodo="editTodo"
      @deleteTodo="deleteTodo"
      @doneTodoTask="doneTodoTask"
    />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
import TodoInput from "../components/TodoInput.vue";

export default {
  name: "TodoList",
  props: {},
  components: {
    TodoItem,
    TodoInput,
  },
  data() {
    return {
      todoLists: [],
    };
  },
  methods: {
    getTodoList() {
      return (this.todoLists = JSON.parse(localStorage.storedData || "[]"));
    },
    saveTodo(todo) {
      localStorage.storedData = JSON.stringify(todo);
      this.getTodoList();
    },
    editTodo(todo) {
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.deleteTodo(todo);
      }
      this.saveTodo(this.todoLists);
    },
    deleteTodo(todo) {
      const index = this.todoLists.findIndex((t) => t.id == todo.id);
      this.todoLists.splice(index, 1);
      this.saveTodo(this.todoLists);
    },
    doneTodoTask() {
      this.saveTodo(this.todoLists);
    },
  },

  mounted() {
    this.getTodoList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
