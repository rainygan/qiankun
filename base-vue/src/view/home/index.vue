<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <h1>Home</h1>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  name:'home',
  setup() {
    const router = useRouter();
    const logout = (()=>{
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



