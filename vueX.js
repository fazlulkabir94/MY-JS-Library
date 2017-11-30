import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store=new Vuex.Store({
	strict:true,
	state:{
		users:[
		{name:'shohag',age:34},
		{name:'kabir',age:2}
		]
	},
	getters:{
		regusers:state=>{
				let use=state.users.map(us=>{
		  		return{
		  			name:'**'+ us.name+ '**',
		  			age:us.age/2
		  		}
		  	});
		  	return use
		}
	},
	mutations:{
		refresh:(state,payload)=>{
			state.users.forEach(user=>{
				user.age+=payload
			})
		}
	},
	actions:{
		refresh:(context,payload)=>{
			setTimeout(function(){
				context.commit('refresh',payload)
			},2000)
		}
	}
})
