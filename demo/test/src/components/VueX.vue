<template>
  <div>
    <div>Info</div>
    <div>User Name: {{ username }}</div>
    <div>Age: {{ age }}</div>

    <div>
      <input type="text" v-model="userNameInput" />
      <button class="btn btn-primary" @click="changeUserName">
        Change username
      </button>
    </div>

    <div>
      <input type="text" v-model="ageInput" />
      <button class="btn btn-primary" @click="changeAge">Change age</button>
    </div>
    <div>
      <!-- {{ getUserName }}
      {{ getAge }} -->
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "InFo",
  props: {},
  computed: {
    username() {
      return this.$store.state.username;
    },
    age() {
      return this.$store.state.age.age;
    },
    // ...mapGetters(["getUserName", "getAge"]),
  },
  data() {
    return { userNameInput: null, ageInput: null };
  },
  methods: {
    changeUserName() {
      this.$store.dispatch("handleChangeUserName", this.userNameInput);
    },
    changeAge() {
      this.$store.dispatch("handleChangeAge", this.ageInput);
    },
  },
};
</script>

<style scoped>
</style>
