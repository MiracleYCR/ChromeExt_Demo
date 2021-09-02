import { createApp } from 'vue';
import App from './App.vue';

// 注册弹窗
function registerExtensionPopup () {
  createApp(App).mount('#app');
};

// 监听 content-scripts 发送过来的消息
function messageListener () {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender, sendResponse);
  })
}

window.addEventListener('load', () => {
  registerExtensionPopup();
  messageListener();
});