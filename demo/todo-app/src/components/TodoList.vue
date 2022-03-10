<template>
  <div class="container">
    <TodoInput @saveTodo="saveTodo" :todoList="todoLists" />
    <AllDoneTodo @allDone="allDone" :checked="Boolean(remaining)" />
    <TodoItem
      v-for="(item, index) in filteredTodos"
      :key="index"
      :todoList="item"
      @editTodo="editTodo"
      @deleteTodo="deleteTodo"
      @doneTodoTask="doneTodoTask"
    />
    <FilterTodo
      v-if="todoLists.length"
      :length="remaining"
      @filterTodo="filterTodo"
      @clearCompleted="clearCompleted"
      :hasCompleted="filteredTodos.length > remaining"
    />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
import TodoInput from "../components/TodoInput.vue";
import FilterTodo from "../components/FilterTodo.vue";
import AllDoneTodo from "../components/AllDoneTodo.vue";

export default {
  name: "TodoList",
  props: {},
  components: {
    TodoItem,
    TodoInput,
    FilterTodo,
    AllDoneTodo,
  },
  data() {
    return {
      todoLists: [],
      hasCompleted: false,
      filters: {
        all: function (todoLists) {
          return todoLists;
        },
        active: function (todoLists) {
          return todoLists.filter(function (todo) {
            return !todo.completed;
          });
        },
        completed: function (todoLists) {
          return todoLists.filter(function (todo) {
            return todo.completed;
          });
        },
      },
      visibility: "all",
    };
  },
  computed: {
    filteredTodos: function () {
      return this.filters[this.visibility](this.todoLists);
    },
    remaining: function () {
      if (this.visibility === "all" || this.visibility === "active") {
        return this.filters.active(this.todoLists).length;
      }
      return this.filteredTodos.length;
      // return this.filters.active(this.todoLists).length;
    },
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
    allDone(value) {
      this.todoLists.forEach(function (todo) {
        todo.completed = value;
      });
      if (value !== undefined) {
        this.saveTodo(this.todoLists);
      }
    },
    filterTodo(type) {
      this.visibility = type;
    },
    clearCompleted() {
      this.todoLists = this.todoLists.filter(function (todo) {
        return todo.completed !== true;
      });
      this.saveTodo(this.todoLists);
    },
  },
  mounted() {
    this.getTodoList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

