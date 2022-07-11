<template>
    <div class="siderBar">
        <ul>
            <router-link v-for="(menu,index) in menus" :key="index" :to="menu.path" class="link">{{menu.name}}</router-link>
        </ul>
    </div>
</template>
<script>
// import { useRouter } from 'vue-router'
// import { reactive } from 'vue'
import { useStore } from 'vuex';
export default {
    setup(){
        // const router = useRouter();
        const store =useStore();
        let menus = store.state.menu;
        // const menus = store;
         console.log('store.state',store.state.menu);
        return{
            menus
        }
    }
}
</script>
<style scoped>
    .siderBar{
        width: 150px;
        height: 300px;
        position: fixed;
        background: #f5f5f5;
    }
    ul>.link{
        border-bottom: 1px solid #cccccc;
        height: 60px;
        line-height: 60px;
        display: block;
    }
</style>