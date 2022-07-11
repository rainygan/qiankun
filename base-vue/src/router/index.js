import { createRouter, createWebHashHistory } from "vue-router"

const home = import("../view/home");
const login = import("../view/login.vue");
// const layout = import("../layouts/layout.vue");
// const child1 = import('../view/child1/child1.vue');
const child2 = import('../view/child2/child2.vue');
const child3 = import('../view/child3/child3.vue');

const routes = [
    {
        path:"/",redirect:"/login"
    },
    {
        path:"/home",
        name:"home",
        component:home
    },
    // {name:'child1',path:'/child1', component:layout,redirect:'/child1/index',children:[{path:'index'}]},
    // {name:'child1',path:'/child1/index', component:child1},
    {name:'child2',path:'/child2/index', component:child2},
    {name:'child3',path:'/child3/index', component:child3},
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