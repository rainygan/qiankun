<template>
    <h1>Login</h1>
  <button @click="toIndex">toIndex</button>
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
    const toIndex = () => {
      store.dispatch('set_token_action',true);
       proxy.$util.setCookie('token',true);
      router.push({
        path:'child1/index'
      })
      
    }

    return{
      toIndex
    }
  },
}
</script>