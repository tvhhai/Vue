<template>
  <div class="units">
    <button class="" @click="changeUnitsTemp(getUnitsTemp)">
      {{ getUnitsTemp.temp }},
      {{ getUnitsTemp.speed }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import constant from "@/constants";

export default {
  name: "ToggleUnits",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUnitsTemp"]),
  },
  methods: {
    changeUnitsTemp(units) {
      this.$store.dispatch("handleUnitsTemp", this.switchUnits(units.length));
    },

    switchUnits(units) {
      return (units =
        units === constant.unitsObjMetric.length
          ? constant.unitsObjImperial.length
          : constant.unitsObjMetric.length);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  border: none;
  color: #f2f2f2;
  background: none;
  white-space: nowrap;
}
</style>
