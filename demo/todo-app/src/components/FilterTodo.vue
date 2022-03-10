<template>
  <div class="footer">
    <div class="row h-100 d-flex align-items-center m-0">
      <div class="col-sm-12 col-md-4 my-2 text-left">
        {{ length }} item{{ length > 1 ? "s" : "" }} left
      </div>
      <div
        class="
          col-sm-12 col-md-4
          d-flex
          justify-content-md-center justify-content-sm-start
          my-2
        "
      >
        <button
          v-for="(item, index) in filterButtons"
          :key="index"
          class="filter-btn"
          :class="{ active: item.isActive }"
          @click="filter(item.type)"
        >
          {{ item.label }}
        </button>
      </div>
      <div
        class="
          col-sm-12 col-md-4
          d-flex
          justify-content-md-end justify-content-sm-start
          my-2
        "
      >
        <button
          class="filter-btn clear-completed-btn"
          :class="{ visible: hasCompleted }"
          @click="clearCompleted()"
        >
          Clear Completed
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterTodo",
  props: {
    length: Number,
    hasCompleted: Boolean,
  },
  data() {
    return {
      btn: null,
      filterButtons: [
        { type: "all", label: "All", isActive: true },
        { type: "active", label: "Active", isActive: false },
        { type: "completed", label: "Completed", isActive: false },
      ],
    };
  },

  methods: {
    clearCompleted() {
      this.$emit("clearCompleted");
    },
    filter(type) {
      this.setActiveFilterBtn(type);
      this.$emit("filterTodo", type);
    },
    setActiveFilterBtn(type) {
      this.filterButtons.forEach((btn) => {
        btn.isActive = btn.type === type;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgb(0 0 0 / 20%);
  }

  & .filter-btn {
    padding: 5px;
    border-radius: 0.25rem;
    transition: 250ms all ease-in-out;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    background: white;
    border: 1px solid white;

    &:hover,
    &.active {
      border-color: burlywood;
    }
  }

  & .clear-completed-btn {
    // TODO: Change to hidden when implement completed todos
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }

  & .items-count {
    padding-left: 10px;
  }
}
</style>
