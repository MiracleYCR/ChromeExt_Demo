<template>
  <div class="views-container">
    <span class="question">是否开启扩展插件?</span>
    <el-switch
      class="switchBtn"
      width="72"
      v-model="openExtension"
      active-color="#0d8794"
      inactive-color="#1d2636"
    ></el-switch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const openExtension = ref(false);
</script>

<style lang="less">
.views-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 15px;
    color: #a3a3a3;
    &.question {
      margin-bottom: 20px;
    }
  }
  .switchBtn {
    height: 40px;
    margin-bottom: 20px;
  }
  .confirmBtn {
    background: #0d8794;
    border: none;
    span {
      color: #fff;
    }
    &:hover {
      background: #2fa6b0;
    }
  }

  .el-switch__core {
    height: 39px;
    border-radius: 20px;
  }

  .el-switch__action {
    width: 35px;
    height: 35px;
  }

  .el-switch.is-checked .el-switch__core .el-switch__action {
    margin-top: calc(16px - var(--el-switch-button-size));
    margin-left: calc(-20px - var(--el-switch-button-size));
  }
}
</style>