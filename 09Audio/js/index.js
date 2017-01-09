$(function() {
	function MusicObject(id) {
		var obj = document.getElementById(id);
		obj.id = id;
		console.log(obj.id);
		obj.number = 0;
		//如果不是第一个播放源，则播放结束后，删除自己
		if (id.indexOf("_0") == -1) {
			obj.addEventListener("ended", function() {
				obj.remove();
			})
		}
		return obj;
	}

	var $music131 = MusicObject("music131_0");
	var $music132 = MusicObject("music132_0");
	var $music133 = MusicObject("music133_0");
	var $music134 = MusicObject("music134_0");
	var $music135 = MusicObject("music135_0");
	var $music136 = MusicObject("music136_0");
	var $music137 = MusicObject("music137_0");
	var $music138 = MusicObject("music138_0");
	var $music139 = MusicObject("music139_0");

	var keyDownFlag = true; //判断是否处于按下状态
	var oldKeyCode = '';
	document.onkeydown = function(event) {
		//获取键盘按键编码
		var e = event || window.event || arguments.callee.caller.arguments[0];
		//判断：如果当前键松开后，重新按下，则播放音乐；或者，按下别的键，则马上播放音乐；
		if ((e && keyDownFlag == true) || e.keyCode != oldKeyCode) {
			oldKeyCode = e.keyCode; //存储上一次按键的编码
			if (e.keyCode == "49") {
				playMusic($music131);
			} else if (e.keyCode == "50") {
				playMusic($music132);
			} else if (e.keyCode == "51") {
				playMusic($music133);
			} else if (e.keyCode == "52") {
				playMusic($music134);
			} else if (e.keyCode == "53") {
				playMusic($music135);
			} else if (e.keyCode == "54") {
				playMusic($music136);
			} else if (e.keyCode == "55") {
				playMusic($music137);
			} else if (e.keyCode == "56") {
				playMusic($music138);
			} else if (e.keyCode == "57") {
				playMusic($music139);
			}
			keyDownFlag = false;
			console.log(e.keyCode);
		} else {
			console.log("长按keyDown" + e.keyCode);
		}
	};

	var playMusic = function(obj) {
		try {
			obj.number++; //点击次数
			//如果是播放中.....则新建一个播放
			if (obj.currentTime != 0 && obj.ended == false) {
				var html = $("#" + obj.id).clone();
				html.attr("id", obj.id.substring(0, obj.id.indexOf('_')) + "_" + obj.number); //修改ID
				$("body").append(html);
				var music = MusicObject(obj.id.substring(0, obj.id.indexOf('_')) + "_" + obj.number);
				music.play();
			} else {
				obj.play();
			}
		} catch (e) {
			console.log(e.message);
		}

	}

	document.onkeyup = function(event) {
		keyDownFlag = true;
	};
})