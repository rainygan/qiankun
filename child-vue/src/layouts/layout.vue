<template>
    <div v-if="!isMcriapp">
        <navBar></navBar>
        <siderBar></siderBar>
    </div>
    <h1>child Home</h1>
    <container></container>
</template>

<script>
import { computed } from "vue"
import navBar from './navBar.vue'
import siderBar from './siderBar.vue'
import container from './container.vue'
export default {
    components:{
        navBar,siderBar,container
    },
    setup() {
        return{
        isMcriapp:computed(()=>window.__POWERED_BY_QIANKUN__)
        }
    }
    
}
</script>

<style>

</style>