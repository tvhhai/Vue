    <template>
  <div>
    <p>Thông điệp ban đầu: "{{ message }}"</p>
    <p>
      Thông điệp bị đảo ngược (template): "{{
        message.split("").reverse().join("")
      }}"
    </p>
    <p>Thông điệp bị đảo ngược (computed): "{{ reversedMessage }}"</p>
    <p>Thông điệp bị đảo ngược (method): "{{ reversedByMethod }}"</p>
    <input type="text" v-model="message" />
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      message: "Welcome to my app",
    };
  },
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reversedByMethod: function () {
      return this.message.split("").reverse().join("");
    },
  },
  watch: {
    message: {
      handler: function (newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
      },
      deep: true,
    },
  },
};
</script>