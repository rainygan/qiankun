<template>
    <div class="navbar">
      <h2>Demo</h2>
        <button @click="logout">Logout</button>
    </div>
</template>
<script>
import { useRouter } from "vue-router"
import { useStore } from 'vuex';
export default {
  name:'navBar',
  setup() {
    const router = useRouter();
    const store = useStore();
    const logout = (()=>{
       store.dispatch('set_token_action',false);
      store.commit('set_menu',[]);
      localStorage.removeItem('store');
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

