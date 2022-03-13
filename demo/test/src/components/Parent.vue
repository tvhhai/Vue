<template>
  <div class="parent" id="parent">
    Parent has child
    <ChildS :msg="data" data-test="test" class="extra-class" id="external-id" />
  </div>
</template>

<script>
import ChildS from "./Child.vue";

export default {
  name: "ParentS",
  components: { ChildS },
  props: {},
  data() {
    return {
      data: "Child",
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
