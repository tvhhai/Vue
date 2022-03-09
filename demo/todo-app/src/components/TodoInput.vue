<template>
  <input
    type="text"
    v-model="newTodo"
    placeholder="What needs to be done?"
    v-on:keyup.enter="submit()"
    required
  />
</template>

<script>
export default {
  name: "TodoInput",
  // props: {
  //   value: String,
  // },
  data() {
    return {
      newTodo: null,
      todoList: JSON.parse(localStorage.storedData || "[]"),
    };
  },
  methods: {
    submit: function () {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todoList.push({
        id: this.todoList.length + 1,
        title: value,
        completed: false,
      });
      this.newTodo = "";
      localStorage.storedData = JSON.stringify(this.todoList);
      // this.$emit("onchange", val);
      // console.log(val);
    },
  },
  watch: {
     submit: function () {
       console.log("vc");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  outline: none;
  border: none;
  font-size: 35px;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
}

::placeholder {
  color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
}
</style>
