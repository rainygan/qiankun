import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import util from './util';
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$util = util;
app.mount('#app');
import { apps } from "./qiankun.config"

registerMicroApps(apps);

start({
  sendbox:{
    strictStyleIsolation:true
  }
});
