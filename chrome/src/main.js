import { createApp } from 'vue';
import { ElSwitch, ElButton } from 'element-plus'

import './assets/reset.css';
import 'element-plus/dist/index.css';

import App from './App.vue';

// 注册弹窗
function registerExtensionPopup () {
  createApp(App)
    .use(ElSwitch)
    .use(ElButton)
    .mount('#app');
};

registerExtensionPopup();