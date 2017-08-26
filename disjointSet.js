var print=function(val){
	document.write(val);
}
var disjoint=function(){
	this.data=[];
}
disjoint.prototype.makeSet=function(val){
	this.data[val]=val;
}
disjoint.prototype.findFriend=function(val){
	if (this.data[val]==val) {
		return val;
	}
	return this.data[val]=this.findFriend(this.data[val]);
}
disjoint.prototype.makeFriend=function(a,b){
	var u=this.findFriend(a);
	var v=this.findFriend(b);
	if (u==v) {
		print('there are already friend');
	}
	else{
		this.data[u]=v;
	}
	
}
s=new disjoint();
for (var i = 0; i < 4; i++) {
	s.makeSet(i);
}
s.makeFriend(1,2);
s.makeFriend(1,3);
s.makeFriend(2,3);//here dora khabe means they alredy friend haha...{bangla dora funy}....
s.makeFriend(0,2);



