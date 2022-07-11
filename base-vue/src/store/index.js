import { createStore } from "vuex"

const api={
    getMenus:(menu)=>{
        return new Promise((resovle)=>{
            setTimeout(()=>{
                resovle(menu)
            },500)
        })
    }
}
export default createStore({
    state:{
        menu:[]
    },
    mutations:{
        set_menu(state,menu){
            state.menu = menu;
        }
    },
    actions:{
        async set_menu_action(context,menu){
            let result = await api.getMenus(menu);
            console.log('result',result);
            context.commit('set_menu',result)
            
        }
    },
    modules:{

    }

})
