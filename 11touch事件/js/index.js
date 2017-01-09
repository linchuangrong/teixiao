document.ready = function() {
	var obj = document.getElementById("moveDiv");
	console.log("ready");
	obj.addEventListener('touchmove', function(event) {
		console.log("true");
		if (event.targetTouches.length == 1) {
			var touch = event.targetTouches[0];
			obj.style.top = touch.pageY + "px";
			obj.style.left = touch.pageX + "px";
		} else {
			console.log("false");
		}
	})

	var can = document.getElementById("can");
	var cans=can.getContext('2d');
	can.addEventListener('touchmove', function(event) {
		console.log(event.touches.length);
		for (var i = 0; i < event.touches.length; i++) {
			var touch = event.touches[i];
			cans.beginPath();
			cans.arc(touch.pageX, touch.pageY, 5, 0, 2 * Math.PI, true);
			cans.fill();
			cans.stroke();
		}
	},false);
}