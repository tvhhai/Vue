<template>
  <div class="language">
    <select name="" id="" v-model="language" @change="changeLocale(language)">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueI18n from "@/i18n.js";
import constant from "@/constants";
export default {
  name: "DropLanguage",
  props: {},
  data() {
    return {
      language: this.$store.state.lang,
      options: constant.language,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["getLanguage"]),
  },
  methods: {
    changeLocale(locale) {
      VueI18n.locale = locale;
      this.$store.dispatch("handleChangeLanguage", locale);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
