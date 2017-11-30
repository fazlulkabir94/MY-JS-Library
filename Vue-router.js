import Vue from 'vue'
import Router from 'vue-router'
import Header from  '../components/Header'
import First from '../components/Footer'
import Another from '../components/Another'
import  New from '../components/New'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {default:Header,'first':First},
      meta:{userFor:true},
      children:[
      {
      	path:'/another',
      	name:'children',
      	meta:{userFor:true},
      	component:Another,
      	beforeRouteEnter:(to,from,next)=>{
      		const ans=window.confirm('are you sure leave this page?')
      		if (ans) {
      			next();
      		}
      		else{
      			next(false)
      		}
      	}

      }

      ]
      ,
      beforeRouteLeave:(to,from,next)=>{
      		const ans=window.confirm('are you sure leave this page?')
      		if (ans) {
      			next();
      		}
      		else{
      			next(false)
      		}
      	}
    }
  ]
})
router.beforeEach(
	(to,from,next)=>{
		if (to.matched.some(record=>record.meta.userFor)) {
			next();
		}
		else{
			next(false)
		}
	}
	)
export default router
