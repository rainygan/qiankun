<template>
  <navBar></navBar>
  <siderBar></siderBar>
  <container></container>
</template>

<script>
import navBar from '../layouts/navBar.vue'
import siderBar from '../layouts/siderBar.vue'
import container from '../layouts/container.vue'
export default {
    components:{
        navBar,siderBar,container
    }
}
</script>

<style>

</style>