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
$(document).ready(function() {
	let s=new Stack();
	$('#input').keyup(function(event) {
		if (event.keyCode==32) {
			let subject = $(this).val();
			if (subject!= 'undefine' || subject!= null) {
				if (subject[subject.length-2] == '.') {
					
				}
			}
		}
	});
});
