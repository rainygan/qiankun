<template>
  <div v-if="isMcriapp">
      <container></container>
  </div>
  <div v-else>
    <navBar></navBar>
    <siderBar></siderBar>
    <container></container>
  </div>
  
</template>

<script>
import navBar from '../layouts/navBar.vue'
import siderBar from '../layouts/siderBar.vue'
import container from '../layouts/container.vue'
export default {
  name:"layOut",
    components:{
        navBar,siderBar,container
    },
    computed:{
      isMcriapp() {
        return window.__POWERED_BY_QIANKUN__;
      },
    }
    
}
</script>

<style>

</style>