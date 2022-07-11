import { createRouter, createWebHashHistory } from "vue-router"

const home = import("../view/home");
const login = import("../view/login.vue");
const layout = import("../layouts/layout.vue");

const routes = [
    {
        path:"/",redirect:"/login"
    },
    {
        path:"/home",
        name:"home",
        component:layout,
        redirect:'/home/index',
        children:[
            {
                path:'index',
                component:home
            }
        ]
    },
    // {name:'child1',path:'/child1', component:layout,redirect:'/child1/index',children:[{path:'index'}]},
    {name:'child1',path:'/child1', component:layout,redirect:'/child1/index',children:[{path:'index',component:import('../view/child1/child1.vue')}]},
    {name:'child2',path:'/child2', component:layout,redirect:'/child2/index',children:[{path:'index',component:import('../view/child2/child2.vue')}]},
    {name:'child3',path:'/child3', component:layout,redirect:'/child3/index',children:[{path:'index',component:import('../view/child3/child3.vue')}]},
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