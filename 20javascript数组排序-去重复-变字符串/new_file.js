var folder = ["A", "C", "K", ["D", "F", "C", ["X", "Z", "U", "T"], "F", "E", "B"], "T", "J", ["I", "K"]];
var arrayA = [];
//1.传入一个参数，可能为字符串，或者数组，二维数组，三维数组......
function getString(params) {
	if (params instanceof Array) {
		for (var i = 0; i < params.length; i++) {
			getString(params[i]);
		}
	} else {
		arrayA.push(params);
	}
}
getString(folder);
console.log("数组A：" + arrayA.toString());
//2.去重复
var obj = {}; //存储数组
var arrayB = [];
arrayA.forEach(function(value, index, myArray) {
	//如果不存在，则创建并插入B数组
	if (!obj[myArray[index]]) {
		obj[myArray[index]] = value;
		arrayB.push(value);
	} else {
		//啥也不干
	}
})
obj = null;
console.log("去掉重复元素的数组B：" + arrayB);
//3.排序
arrayB.sort(function(a, b) {
	return a > b ? 1 : -1;//从小到大排序
	//return a > b ? -1 : 1; //从大到小排序
});
console.log("排序后的数组B：" + arrayB);
//4.变为字符串
console.log("变成字符串：" + arrayB.join(""));