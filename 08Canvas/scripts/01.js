function $$(id) {
	return document.getElementById(id);
}

function pageLoad(){
	var can=$$('can');
	var cans=can.getContext('2d');
	
	cans.moveTo(20,30);//第一个起点
	cans.lineTo(100,100);
	cans.lineTo(200,250);
	cans.lineTo(300,20);
	cans.lineWidth=3;
	cans.strokeStyle='aqua';
	cans.stroke();
}
