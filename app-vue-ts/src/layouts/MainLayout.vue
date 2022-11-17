<template>
 <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>

  <div>
    <router-view />
  </div>


</template>

<script lang="ts" >
  const goBack = () => {
  console.log('go back')
}
export default {
  name: "MainLayout",
};


</script>

<style>
</style>