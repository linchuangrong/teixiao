//设置字体rem为1rem=20px（在375px宽的设备条件下，其他屏幕会有所变化）
$(function() {
	var doc = document,
		win = window;

	function initFontSize() {
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function() {
				var clientWidth = docEl.clientWidth; //window.innerWidth;
				if(!clientWidth) return;
				fontSizeRate = (clientWidth / 375);
				var baseFontSize = 20 * fontSizeRate;
				docEl.style.fontSize = baseFontSize + 'px';
			};

		recalc();
		if(!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	};

	$(window).resize(initFontSize);
	$(window).resize();
});