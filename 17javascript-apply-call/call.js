//call只会使子类继承父类的this里的属性
//call不会继承prototype的属性

function class1() {
	this.name = function() {
		alert("class1的方法name()");
	}
}
class1.prototype.haha=function(){
	alert("class1的prototype的方法haha");
}

function class2() {
	class1.call(this); //要想实现class2继承class1 this就是当前对象class2。
}
class2.prototype=new class1();//继承class1的prototype属性

var b=new class2();
b.name();
b.haha();
