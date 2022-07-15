<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>Login</h1>
  <button @click="toHome">toHome</button>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { getCurrentInstance } from 'vue';
export default{
  setup() {
    const router = useRouter();
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const toHome = async () => {
      await store.dispatch('set_menu_action',[
          {
            name:'home',
            path:'/home'
          },
          {
            name:'vue-child1',
            path:'/child1/index'
          },
          {
            name:'vue-child2',
            path:'/child2/index'
          },
          {
            name:'vue-child3',
            path:'/child3/index'
          }
        ])
      store.dispatch('set_token_action',true);
      proxy.$util.setCookie('token',true,60*60);
      router.push({
        name:'home'
      })
      
    }

    return{
      toHome
    }
  },
}
</script>