function $$(id) {
	return document.getElementById(id);
}

function pageLoad() {
	var can = $$("can");
	var cans = can.getContext('2d');
	
	//渐变框
	cans.beginPath();
	var gnt1 = cans.createLinearGradient(0, 0,400, 400);
	gnt1.addColorStop(0,'black');
	gnt1.addColorStop(0.5,'red');
	gnt1.addColorStop(1,'yellow');
	cans.fillStyle=gnt1;
	cans.fillRect(0,0,400,400);

	//填充框
	cans.beginPath();
	cans.fillStyle = "aqua";
	cans.fillRect(50, 50, 200, 200);
	cans.stroke();

	//边框
	cans.beginPath();
	cans.strokeStyle = "#ff0078";
	cans.lineWidth = 20;
	//起点是，50 + (lineWidth*0.5)
	cans.strokeRect(150, 150, 200, 200);

	//文字
	cans.beginPath();
	cans.strokeStyle = "black";
	cans.lineWidth = 1;
	cans.strokeText("50,50", 50, 50);

}