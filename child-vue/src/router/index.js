import { createRouter, createWebHashHistory } from "vue-router"
import _import from './_import';
const login = _import("login");
import layout from "../layouts/layout.vue"
const child1 = _import('child1');
// import login from "@/view/login.vue"
// import child1 from "@/view/child1.vue"
const routes = [
    {
        path:"/",redirect:"/child1/index"
    },
    {name:'child1',path:'/child1', component:layout,children:[{path:'index',component:child1}]},
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