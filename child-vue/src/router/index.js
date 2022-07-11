import { createRouter, createWebHashHistory } from "vue-router"
const layout = import("../layouts/layout.vue");
const login = import("../view/login.vue");
const routes = [
    {
        path:"/",redirect:"/child1"
    },
    {name:'child1',path:'/child1', component:layout,redirect:'/child1/index',children:[{path:'index',component:import('../view/index.vue')}]},
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