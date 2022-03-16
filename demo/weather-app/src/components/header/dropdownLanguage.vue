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
import VueI18n from "@/i18n.js";
export default {
  name: "DropLanguage",
  props: {
    msg: String,
  },
  data() {
    return {
      language: localStorage.getItem("lang") || "en",
      options: [
        { text: "EN", value: "en" },
        { text: "VI", value: "vi" },
      ],
    };
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
