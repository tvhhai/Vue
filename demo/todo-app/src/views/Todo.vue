<template>
  <div class="">
    <div class="container wrapper d-flex flex-column align-items-center w-100">
      <div class="row">
        <h1 class="title">Todos App</h1>
      </div>
      <div class="row justify-content-center w-100 m-0">
        <div class="todo-wrapper p-0 d-flex flex-column col-md-8 col-sm-12">
          <TodoList />
        </div>
      </div>

      <small class="instruction text-center">
        <em
          >Press Enter to add new todo.<br />
          Press Arrow icon to toggle todos.</em
        >
        <br /><br />
      </small>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoList,
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    get(val) {
      console.log(val);
      this.value = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: rgba(175, 47, 47, 0.5);
  font-size: 120px;
  padding: 30px 0;
  font-weight: 100;
}
.instruction {
  color: #bfbfbf;
  padding: 30px 0;
  margin-top: auto;
}

.todo-wrapper {
  box-shadow: 0 2px 4px 0 rgba(109, 33, 33, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: white;
}

.app-header {
  height: 60px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.1);
}
.app-todo-list {
  max-height: 500px;
  overflow: auto;
}
</style>
