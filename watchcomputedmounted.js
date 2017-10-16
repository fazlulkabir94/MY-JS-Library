	function total(a,b){
			this.x=a;
			this.y=b;
		}
		total.prototype.sum=function(){
			return this.x+this.y;
		}
		var app=new Vue({
			el:"#app",
			data:{
				name:"",
				userName:""
			},
			computed:{
				userNa:function(){
					s=new total(3,4);
					return s.sum();
				}
			},
			watch:{
				name:function(val){
					this.userName=val;
				}
			},
			mounted:function(){
				console.log("this is mounted method example");
			}
		});
