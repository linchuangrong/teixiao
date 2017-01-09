//得到数组中最大值
myArray1 = [1, 3, 4, 5, 23, 0];
var max = Math.max.apply(null, myArray1);
console.login(max);

//得到数组中最小值
myArray2 = [1, 3, 4, 5, 23, 0];
var min = Math.min.apply(null, myArray2);
console.login(min);

//数组合并
var arr1=[1,2,3];
var arr2=[14,21,83];
Array.prototype.push.apply(arr1,arr2);
