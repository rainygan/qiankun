
import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

let instance = null;

function render (props = {}) {
    const { container } = props
    const app = createApp(App);
    app.use(router);
    instance = app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  
export async function bootstrap() {
    console.log('vue app bootstraped');
}
export async function mount (props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount () {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
