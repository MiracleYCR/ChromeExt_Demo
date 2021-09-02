<template>
  <div class="app-container">
    <div class="app-header">
      <span class="movieTitle">电影</span>
      <span class="movieName">{{ storeState.movieName }}</span>
    </div>
    <div class="app-body">
      <Views />
    </div>
    <div class="app-footer">
      <span class="website">网站: http://beta.jwks123.cn</span>
      <span class="email">邮箱: jwks123biz@gmail.com</span>
      <span class="copyright">© 2021~ 广州伽马科技有限责任公司 版权所有</span>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';

  import store from './store/index';

  import Views from './views/index.vue';

  const storeState = store.state

  onMounted(() => {
    const contentScriptObj = store.getBackground().getContentScriptMessage();

    console.log(contentScriptObj)

    store.state.movieName = contentScriptObj.sender.tab.title
  })
</script>

<style lang="less" scoped>
.app-container {
  width: 324px;
  height: 484px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  position: relative;
  .app-header {
    width: 100%;
    height: 70px;
    color: #4eeaf9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
    background: linear-gradient(90deg,#182536,#0b1c30);
    .movieTitle {
      position: absolute;
      top: 10px;
      left: 20px;
    }
    .movieName {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  .app-footer {
    width: 100%;
    height: 70px;
    padding: 0 20px;
    box-sizing: border-box;
    color: #4eeaf9;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    background: linear-gradient(90deg,#182536,#0b1c30);
    span {
      font-size: 10px;
      &.website {
        cursor: pointer;
        &:hover {
          color: pink;
        }
      }
    }
  }
  .app-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg,#2b3a4d,#222d43);
  }
}
</style>