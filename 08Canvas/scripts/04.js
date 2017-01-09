function $$(id) {
	return document.getElementById(id);
}

function pageLoad() {
	var can = $$("can");
	var cans = can.getContext('2d');

	//最外边框
	cans.beginPath();
	cans.strokeStyle = "#CCCCCC"; //边线样式
	cans.lineWidth = 1;
	cans.arc(200, 200, 112, 0, Math.PI * 2, true);
	cans.stroke();
	//圆形白底
	cans.fillStyle = "#FFFFFF"; //填充样式
	cans.fill();

	//内部边框
	cans.beginPath();
	cans.strokeStyle = "#CCCCCC"; //边线样式
	cans.lineWidth = 1;
	cans.arc(200, 200, 100, 0, Math.PI * 2, true);
	cans.stroke();
	//圆形白底
	cans.fillStyle = "#FFFFFF"; //填充样式
	cans.fill();

	//进度
	cans.beginPath();
	var start = Math.PI * 3 / 2;//开始角度
	var end = (Math.PI * 3 / 2) + (0.7 * Math.PI * 2);//结束角度=70%圆
	cans.arc(200, 200, 106, start, end, false);
	cans.lineWidth = 12;
	cans.strokeStyle = "aqua";
	cans.stroke();
	
	/*setTimeout(function(){
		
	})*/

}