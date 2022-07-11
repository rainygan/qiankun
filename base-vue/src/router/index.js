import { createRouter, createWebHashHistory } from "vue-router"
import _import from './_import';

const home = _import("home/index");
const login = _import("login");
const child2 = _import('child2/child2');
const child3 = _import('child3/child3');

const routes = [
    {
        path:"/",redirect:"/login"
    },
    {
        path:"/home",
        name:"home",
        component:home
    },
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