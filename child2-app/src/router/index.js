import { createRouter, createWebHashHistory } from "vue-router"
const login = require("../view/login.vue").default;
const child1 = require("../view/index.vue").default;
const routes = [
    {
        path:"/",redirect:"/child1/index"
    },
    {name:'child1',path:'/child1/index', component:child1},
    {
        path:"/login",
        name:"login",
        component:login
    }
]
     
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export { routes }
export default router