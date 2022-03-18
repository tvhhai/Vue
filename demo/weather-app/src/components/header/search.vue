<template>
  <div class="search">
    <div class="form-group">
      <input
        type="text"
        :placeholder="$t('searchCity')"
        v-model.trim="$v.city.$model"
      />
      <div class="error" v-if="city.length && !$v.city.required">
        {{ $t("required") }}
      </div>
      <div class="error" v-if="!$v.city.minLength">
        {{ $t("minLength", { min: $v.city.$params.minLength.min }) }}
      </div>
      <div class="error" v-if="!$v.city.maxLength">
        {{ $t("maxLength", { max: $v.city.$params.maxLength.max }) }}
      </div>
      <div class="error" v-if="getError">
        {{ getError }}
      </div>
    </div>
    <button class="" v-if="city.length > 1" @click="handleSearch(city)">
      {{ $t("search") }}
    </button>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  name: "SearchCity",
  props: {},
  data() {
    return {
      searchCity: null,
      city: "",
    };
  },
  mixins: [validationMixin],
  validations: {
    city: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20),
    },
  },
  computed: {
    ...mapGetters(["getError"]),
  },
  methods: {
    handleSearch(city) {
      this.$store.dispatch("handleSearchCity", city);
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  .form-group {
    // flex-shrink: 0;
    flex-grow: 1;
  }
  input {
    border: none;
    border-bottom: 1px solid #cccc;
    height: 24pt;
    padding: 4pt 8pt;
    width: 100%;
    background: none;
    color: white;
  }
  ::placeholder {
    color: white;
    opacity: 0.6;
  }
  button {
    height: 24pt;
    border: none;
    border-bottom: 1px solid #cccc;
    color: #f2f2f2;
    background: none;
    white-space: nowrap;
  }
}
</style>
