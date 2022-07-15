<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
    <!-- <div v-if="token && !isMcriapp">
      <nav-bar/>
      <sider-bar/>
    </div>
    <container/> -->
    <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { computed } from "vue"
// import navBar from './layouts/navBar.vue'
// import siderBar from './layouts/siderBar.vue'
// import container from './layouts/container.vue'
import { useRouter } from "vue-router"
import { useStore } from 'vuex';
import { getCurrentInstance } from 'vue';
export default {
  name: 'App',
  components: {
    // navBar,siderBar,container
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const c_token = proxy.$util.getCookie("token");
    if(c_token){
        store.dispatch('set_token_action',c_token);
    }else{
      router.push({
        path:'/login'
      })
    }
    return{
      token:computed(()=>store.state.token),
      isMcriapp:computed(()=>window.__POWERED_BY_QIANKUN__)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
