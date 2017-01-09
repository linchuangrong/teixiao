var box1Div, box2Div, img1, img2, img3;
window.onload = function() {
	box1Div = document.getElementById("box1");
	box2Div = document.getElementById("box2");
	img1 = document.getElementById("img1");
	img2 = document.getElementById("img2");
	img3 = document.getElementById("img3");

	//阻止拖放默认事件
	box1Div.ondragover = function(event) {
		event.preventDefault();
	}
	box2Div.ondragover = function(event) {
		event.preventDefault();
	}

	box1Div.ondrop = dropImgHandler;
	box2Div.ondrop = dropImgHandler;

	img1.ondragstart = dragstart;
	img2.ondragstart = dragstart;
	/*img3.ondragstart = dragstart;*/
};

//播放结束事件
function dropImgHandler(event) {
	event.preventDefault();
	var dom = document.getElementById(event.dataTransfer.getData("imgId"));
	console.log(dom);
	event.target.appendChild(dom);
}

function dragstart(event) {
	console.log(event.target.id);
	event.dataTransfer.setData("imgId", event.target.id);
}