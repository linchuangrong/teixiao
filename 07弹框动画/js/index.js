$(function() {
	var $alertBox = $("#alertBox");
	var $shadeDiv = $(".shadeDiv");
	var maxWidth = $(window).width();
	var alertBoxWidth = $alertBox.outerWidth();

	window.onresize = function() {
		maxWidth = $(window).width();
		var left = (maxWidth - alertBoxWidth) / 2;
		$alertBox.css("left", left + "px");
	}

	//立刻即行，只执行一次
	ready = function() {
		var left = (maxWidth - alertBoxWidth) / 2;
		$alertBox.css("left", left + "px");
	}();

	var showAlertBox = function() {
		$shadeDiv.show();
		$alertBox.removeClass("hideAlertBox").addClass("showAlertBox");

	}
	var hideAlertBox = function() {
		$alertBox.removeClass("showAlertBox").addClass("hideAlertBox");
		$shadeDiv.fadeOut(200);
	}
	toggleAlertBox = function() {
		if($alertBox.hasClass("hideAlertBox")) {
			showAlertBox();
		} else if($alertBox.hasClass("showAlertBox")) {
			hideAlertBox();
		} else {
			showAlertBox();
		}
	}
})