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
        menu:[],
        token:false
    },
    mutations:{
        set_menu(state,menu){
            state.menu = menu;
        },
        set_token(state,token){
            state.token = token;
        }
    },
    actions:{
        async set_menu_action(context,menu){
            let result = await api.getMenus(menu);
            context.commit('set_menu',result);
            
        },
        set_token_action(context,token){
            context.commit('set_token',token);
        }
    },
    modules:{

    }

})
