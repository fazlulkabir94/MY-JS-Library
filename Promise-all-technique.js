let first=function(){
	return new Promise(function(resolve,reject){
		resolve('this is first job');
	});
}
let second=function(message){
	return new Promise(function(resolve,reject){
		resolve(message+'this is second job ');
	});
}
let third=function(message){
	return new Promise(function(resolve,reject){
		resolve(message+'thired is excution');
	});
}
/*first().then(function(message){ //method number one
	return second(message);
}).then(function(message){
	return third(message);
}).then(function(message){
	console.log(message);
})*/
/*Promise.all([first(),second(),third()]).then(function(){ //method number two
	console.log('all proccess is done');
})*/
Promise.race([first(),second(),third()]).then(function(){ //method number three
	console.log('all race is complete');
})
let promiseState=new Promise(function(resolve,reject){
	let watch=true;
	if (watch) {
		resolve('this task is completed');
	}
	else{
		reject('this task is not completed');
	}
})
promiseState.then(function(result){
	console.log(result)
})
promiseState.catch(function(result){
	console.log(result)
})
