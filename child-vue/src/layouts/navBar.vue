<template>
    <div class="navbar">
      <h2>Demo</h2>
        <button @click="logout">Logout</button>
    </div>
</template>
<script>
import { useRouter } from "vue-router"
import { useStore } from 'vuex';
import { getCurrentInstance } from 'vue';
export default {
  name:'navBar',
  setup() {
    const router = useRouter();
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const logout = (()=>{
      store.dispatch('set_token_action',false);
      proxy.$util.clearCookie('token');
      router.push({
        path:'/login'
      })
    })
    return{
      logout
    }
  },
}
</script>
<style scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
  }
</style>

