function $$(id) {
	return document.getElementById(id);
}

function pageLoad() {
	var can = $$('can');
	var cans = can.getContext('2d');

	//第一条线
	cans.beginPath();
	cans.moveTo(20, 30); //第一个起点
	cans.lineTo(380, 380); //第二个点
	cans.lineWidth = 3;

	var gnt1 = cans.createLinearGradient(0, 0, 400, 300); //线性渐变的起始位置
	gnt1.addColorStop(0, 'red');
	gnt1.addColorStop(0.5, 'green');
	gnt1.addColorStop(1, 'yellow');

	cans.strokeStyle = gnt1;
	cans.stroke();

	//第二条线
	cans.beginPath();
	cans.moveTo(100, 0);
	cans.lineTo(200, 100);
	cans.lineTo(300, 17);
	cans.lineTo(400, 400);
	cans.lineWidth = 10;

	var gnt2 = cans.createLinearGradient(0, 0, 400, 300); //线性渐变的起始位置
	gnt2.addColorStop(0, 'yellow');
	gnt2.addColorStop(0.9, 'green');
	gnt2.addColorStop(1, 'red');
	cans.strokeStyle = gnt2;
	cans.stroke();
}