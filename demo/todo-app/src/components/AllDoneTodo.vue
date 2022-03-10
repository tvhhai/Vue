<template>
  <div class="allDone">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="checked"
      @click="change(checked)"
    />
    <label for="toggle-all" :class="{ toggleAll: !checked }"
      ><font-awesome-icon icon="fa-solid fa-check" />
    </label>
  </div>
</template>

<script>
export default {
  name: "AllDoneTodo",
  props: {
    checked: Boolean,
  },
  data() {
    return {};
  },

  methods: {
    change(allDone) {
      this.$emit("allDone", allDone);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.allDone {
  input {
    display: none;
  }
  label {
    cursor: pointer;
    font-size: 28px;
    margin: 0;
    position: absolute;
    top: 15px;
    left: 30px;
    &.toggleAll {
      color: #e6e6e6;
    }
  }
}
</style>
