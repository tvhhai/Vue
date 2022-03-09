<template>
  <div
    class="
      container
      todo-item
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <div class="todo">
      <input
        type="checkbox"
        class="toggle text-center"
        :class="{ checked: todoList.completed }"
        :id="todoList.id"
        v-model="todoList.completed"
        @change="doneTodoTask()"
      />
      <label :for="todoList.id">{{ todoList.title }}</label>
    </div>

    <div class="d-flex align-items-center">
      <span class="icon-wrapper text-center edit" @click="isEdit = true">
        <font-awesome-icon icon="fa-solid fa-pen" />
      </span>

      <span
        class="icon-wrapper text-center delete"
        @click="deleteTodo(todoList)"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </span>
    </div>

    <input
      v-if="isEdit"
      class="edit-form"
      type="text"
      v-todo-focus="isEdit"
      v-model="todoList.title"
      @keyup.enter="editTodo(todoList)"
      @blur="editTodo(todoList)"
    />
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: [],
    // content:String
  },
  data() {
    return {
      isEdit: false,
      active: false,
    };
  },
  methods: {
    onClickOutside() {
      this.active = false;
    },
    cancelEdit() {
      return (this.isEdit = false);
    },
    doneTodoTask() {
      this.$emit("doneTodoTask");
    },
    editTodo(todo) {
      if (!this.isEdit) {
        return;
      }
      this.$emit("editTodo", todo);
      this.isEdit = false;
    },
    deleteTodo(todo) {
      this.$emit("deleteTodo", todo);
    },
  },
  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-item {
  min-height: 50px;
  padding: 0 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;

  .icon-wrapper {
    font-size: 18px;
    color: white;
    padding: 10px;
    transition: 250ms all ease-in-out;
  }

  &:hover {
    .icon-wrapper {
      &:hover {
        transform: scale(1.3, 1.3);
      }
      cursor: pointer;
      &.edit {
        color: rgb(0, 162, 255);
      }
      &.delete {
        color: rgb(247, 78, 48);
      }
    }
  }

  .todo {
    position: relative;
    cursor: pointer;
    font-size: 18px;
    user-select: none;

    .toggle {
      width: 40px;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border: none;
      outline: none;
      appearance: none;
    }

    .toggle + label {
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center left;
    }

    .toggle.checked + label {
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
    }

    label {
      word-break: break-all;
      padding: 15px 15px 15px 60px;
      display: block;
    }
  }

  .edit-form {
    position: absolute;
    right: 0;
    width: 90%;
    height: 100%;
    background: white;
    border-radius: 10px;
    outline: none;
    border: 2px solid black;
  }
  input {
    font-size: 20px;
    padding-left: 10px;
    font-weight: bold;
  }
}
</style>
