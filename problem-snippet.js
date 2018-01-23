let Stack = function () {
	this.data = Array();
	this.myStr='shohag';
}
Stack.prototype.push = function (val) {
	this.data.push(val);
	this.changeStr(val);
}
Stack.prototype.length = function () {
	return this.data.length;
}
Stack.prototype.getString = function () {
	let str="";
	for(let i=0; i < this.length(); i++) {
		str+= ' '+this.data[i];
	}
	return str;
}
Stack.prototype.changeStr = function (str) {
	if (str == this.myStr) {
		this.data[this.length()-1] = 'hurrry!';
	}
}

let reverse = function(str) {
	let newStr = '';
	for(let i = str.length-1 ;i>=0; i--){
		newStr+= str[i];
	}
	return newStr;
}

$(document).ready(function() {
	let s=new Stack();
	$('#input').keyup(function(event) {
		if (event.keyCode==32) {
			let subject = $(this).val();
			let simpleString='';
			if (subject!= 'undefine' || subject!= null) {
				for(let i=subject.length-2; i>= 0 ;i--) {
					if (subject[i] == ' ' || i == 0) {
						if (i == 0) {
							simpleString+= subject[i];
						}
						s.push(reverse(simpleString));
						break;
					}else{
						simpleString+= subject[i];
					}
				}
			}
		}
	console.log(s.getString());
	});
});
