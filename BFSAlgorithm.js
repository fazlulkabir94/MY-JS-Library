var print=function(val){
	document.write(val);
}
var queue=function(qSize){
	 this.data=Array();
	 this.queueSize=qSize;
	 this.insertedValue;
	 this.deletedValue;
}
queue.prototype.sizeOf=function(){
	return this.data.length;
}
queue.prototype.isEmpty=function(){
	if (this.sizeOf()==0) {
		return true;
	}
	else{
		return false;
	}
}
queue.prototype.enQueue=function(val){
	if (this.sizeOf()<this.queueSize) {
		this.data.push(val);
		this.insertedValue=val;
	}
	
}
queue.prototype.deQueue=function(){
	if (!this.isEmpty()) {
		this.deletedValue=this.data.shift();
		return this.deletedValue;
	}
}
queue.prototype.getLastInsertedValue=function(){
	return this.insertedValue;
}
queue.prototype.getLastDeletedValue=function(){
	return this.deletedValue;
}
queue.prototype.reSet=function(){
	if (this.sizeOf()<this.queueSize) {
		this.data.unshift(this.deletedValue);
	}
}

var Graph={
	vertices:[{
		edges:[1,2,3]
	},
	    {
	    	edges:[0,2,4]
	    },
	    {
	    	edges:[0,1,3,4]
	    },
	    {
	    	edges:[0,2,4]
	    },
	    {
	    	edges:[1,2,3]
	    }
	]
};

var Cost=[[],[],[],[],[]];
    Cost[0][1]=1,Cost[1][0]=1;
    Cost[0][2]=3,Cost[2][0]=3;
    Cost[0][3]=6,Cost[3][0]=6;
    Cost[1][2]=1,Cost[2][1]=1;
    Cost[1][4]=5,Cost[4][1]=5;
    Cost[2][3]=2,Cost[3][2]=2;
    Cost[2][4]=2,Cost[4][2]=2;
    Cost[3][4]=1,Cost[4][3]=1;

function BFS(G,Gcost,s){
	Q=new queue(100);
	var u,v,distance=[],vcost;
	for (var i = 0; i <G.vertices.length; i++) {
		distance[i]=Number.POSITIVE_INFINITY;
	}
	distance[s]=0;
	Q.enQueue(s);
	while(!Q.isEmpty())
	{
		u=Q.deQueue();
		for (var i = 0; i <G.vertices[u].edges.length; i++) {
			v=G.vertices[u].edges[i],vcost=Gcost[u][G.vertices[u].edges[i]]+distance[u];
			if (distance[v]>vcost) {
				distance[v]=vcost;
				Q.enQueue(v);
			}
		}
	}
	return distance;
}
var source=0;
var distance=BFS(Graph,Cost,source);
for (var i = 0; i < distance.length; i++) {
	print(distance[i]);
}






