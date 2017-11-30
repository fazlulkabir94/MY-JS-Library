<template>
	<div>
		<div id="first">
		<ul v-for="user in regusers">
			<li>{{ user.name }}</li>
			<li>{{ user.age }}</li>
		</ul>
	</div>
	<button @click="ref(5)">action</button>
	</div>
</template>
<script>
	export default{
		data () {
		  return {
		    message:'home menu'
		  };
		},
		computed: {
		  users () {
		    return this.$store.state.users;
		  },
		  regusers () {
		  	return this.$store.getters.regusers
		  }
		  
		},
		methods: {
			/*refresh(){
				this.$store.state.users.forEach(user=>{
					user.age+=1
				})
				this.$store.commit('refresh');
			},*/
			ref(amount) {
				this.$store.dispatch('refresh',amount);
			}
		}
	}
</script>
<style scoped>
	#first{
		background-color: #91916DFF;
	}
</style>
