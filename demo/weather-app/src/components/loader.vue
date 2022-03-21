<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loader {
  height: 100%;
  position: absolute;
  background: rgba(228, 222, 222, 0.7);
  width: 100%;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .spinner {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
