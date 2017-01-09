function outerFun() {
	var a = 0;

	function innerFun() {
		a++;
		console.log(a);
	}
	return innerFun; //注意这里
}
var obj = outerFun();
obj(); //结果为1
obj(); //结果为2
var obj2 = outerFun();
obj2(); //结果为1
obj2(); //结果为2
console.log(obj == obj2); //false


//-----------------------------分割线--------------------------
function ClassA() {}
ClassA.prototype = {
	fun1: function() {
		console.log("prototype fun1 <br /><br />");
	}
}

var a = new ClassA();
var b = new ClassA();
a.fun1(); //答案是？
b.fun1(); //答案是？
ClassA.prototype.fun1 = function() {
	console.log("modify function<br /><br />");
}
a.fun1(); //答案是？
b.fun1(); //答案是？
a.fun1 = function() {
	console.log("modify a's method<br /><br />");
}
a.fun1(); //答案是？
b.fun1(); //答案是？

//-----------------------------分割线--------------------------
function ClassA() {
	this.fun1 = function() {
		console.log("this定义的函数");
	};
}
ClassA.prototype.fun1 = function() {
	console.log("外部prototype定义的函数");
}
var a = new ClassA();
var b = new ClassA();
a.fun1(); //答案是？
b.fun1(); //答案是？
a.fun1 = function() {
	console.log("modify a's function <br />");
}
a.fun1(); //答案是？
b.fun1(); //答案是？