<template>
    <h1>Login</h1>
  <button @click="toIndex">toIndex</button>
</template>
<script>
import { useRouter } from 'vue-router'
export default{
  name:"loginIndex",
  setup() {
    const router = useRouter();
    const toIndex = () => {
      router.push({
        name:'child1'
      })
      
    }

    return{
      toIndex
    }
  },
}
</script>