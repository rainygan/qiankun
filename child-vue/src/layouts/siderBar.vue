<template>
    <div class="siderBar">
        <ul>
            <router-link to="/child1/index" class="link">vue-child1</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    setup(){
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