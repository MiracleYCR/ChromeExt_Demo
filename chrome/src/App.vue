<template>
  <div class="app-container">
    <h1>Hello Chrome Extension</h1>
    <Layout></Layout>
  </div>
</template>

<script setup>
  import Layout from './layout/index.vue';
</script>

<style lang="less" scoped>
.app-container {
  width: 300px;
  height: 500px;
}
</style>