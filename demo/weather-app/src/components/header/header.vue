<template>
  <div class="header container">
    <div class="row header">
      <div class="col-sm-8">
        <SearchCity />
      </div>
      <div class="col-sm-4">
        <div class="right-option">
          <DropLanguage />
          <ToggleUnits />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCity from "@/components/header/search.vue";
import DropLanguage from "@/components/header/dropdownLanguage.vue";
import ToggleUnits from "@/components/header/toggleUnits.vue";

export default {
  name: "AppHeader",
  components: {
    SearchCity,
    DropLanguage,
    ToggleUnits,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  align-items: center;
  // justify-content: space-between;
  .right-option {
    display: flex;
  }
}
@media only screen and (max-width: 576px) {
  .header {
    .right-option {
      justify-content: end;
    }
    .language,
    .units {
      margin-top: 10px;
      align-items: right;
      float: right;
    }
  }
}
</style>
