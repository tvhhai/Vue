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
export default {
  name: "DropUnits",
  props: {
    msg: String,
  },
  data() {
    return {
      // searchCity: null,
    };
  },
  computed: {
    ...mapGetters(["getUnitsTemp"]),
  },
  methods: {
    changeUnitsTemp(units) {
      this.$store.dispatch("handleUnitsTemp", this.switchUnits(units.id));
    },

    switchUnits(units) {
      return (units = units === "metric" ? "imperial" : "metric");
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
