import { createStore } from "vuex"

export default createStore({
    state:{
        token:false
    },
    mutations:{
        set_token(state,token){
            state.token = token;
        }
    },
    actions:{
        set_token_action(context,token){
            context.commit('set_token',token);
        }
    },
    modules:{

    }

})
