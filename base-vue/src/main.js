import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

registerMicroApps([{
    name: 'child-vue',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '#/child1/',
  },
]);

start();
