<template>
  <div v-if="token">
    <navBar/>
    <siderBar/>
  </div>
  <container/>
</template>
<script>
import {
  computed,defineComponent
}from 'vue'
import { useRouter } from "vue-router"
import { useStore } from 'vuex';
import navBar from './layouts/navBar.vue'
import siderBar from './layouts/siderBar.vue'
import container from './layouts/container.vue'
import { getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    navBar,siderBar,container
  },
  setup(){
    const store = useStore();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const c_token = proxy.$util.getCookie("token");
    window.addEventListener('beforeunload',()=>{
      if(store.state.token && store.state.menu.length){
        localStorage.setItem('store',JSON.stringify(store.state));
      }
    });
    const state = localStorage.getItem('store') && JSON.parse(localStorage.getItem('store'));
    store.dispatch('set_token_action',c_token);
    if(c_token){
      if(state){
        store.commit('set_menu',state.menu);
        localStorage.removeItem('store');
      }
    }else{
      store.commit('set_menu',[]);
      router.push({
        path:'/login'
      })
    }
    return{
      token:computed(()=>store.state.token)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
