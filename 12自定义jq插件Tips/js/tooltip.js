(function($) {
	$.fn.tip = function(options) {
		//获取或者生成一个tip
		var $tooltip = $('<div id="tooltip-dom"></div>');
		//清空tip里的文本
		$tooltip.html('');

		//鼠标经过显示、隐藏
		$(this).hover(function() {
			var params = {
				"background": "#333333",
				"color": "#FFFFFF",
				"font-size": "12px",
				"border-radius": "5px",
				"padding": "10px",
				"position": "absolute",
				"top": "0px",
				"left": "0px",
				"opacity": "0.9",
				"line-height": "16px",
				"display": "none"
			}

			//div:设置样式用的参数
			var ops = $.extend(params, options);

			//div:样式
			var style = "";
			for(var i in ops) {
				style += i + ":" + ops[i] + ";";
			}
			//div:设置tip的样式
			$tooltip.attr("style", style);

			//小三角形:样式
			var triangleParams = {
				"position": "absolute",
				"left": "20px",
				"bottom": "-16px",
				"width": "0",
				"height": "0",
				"border-left": "solid 8px transparent",
				"border-right": "solid 8px transparent",
				"border-bottom": "solid 8px transparent",
				"border-top": "solid 8px " + ops.background
			}
			var triangleStyle = "";
			for(var i in triangleParams) {
				triangleStyle += i + ":" + triangleParams[i] + ";";
			}

			//小三角形：DOM元素
			var $i = $("<i style='" + triangleStyle + "'></i>");

			//div:设置显示的文本
			$tooltip.html($(this).attr("data-tip"));
			//div:拼接三角形
			$tooltip.append($i);
			//body：拼接tip
			$("body").append($tooltip);

			//父元素距离窗口的距离
			var fatherLeft = $(this).offset().left;
			var fatherTop = $(this).offset().top;
			//父元素的width
			var fatherWidth = $(this).width();

			//tip消息框的width
			var tooltipWidth = $tooltip.width();
			var toolTipHeight = $tooltip.outerHeight();
			console.log(toolTipHeight);

			//tip消息框的位置
			var tipLeft = (fatherLeft + (fatherWidth - tooltipWidth) / 2);
			var tipTop = fatherTop - toolTipHeight - 10;
			//小三角的位置
			var triangleLeft = 10;
			triangleLeft = tooltipWidth / 2;
			//特殊处理,如果tip文字 太长，位置需要调整
			if(tipLeft <= 0) {
				tipLeft = 1;
				triangleLeft = (fatherLeft + (fatherWidth - tooltipWidth) / 2) + tooltipWidth / 2;
			}
			//设置小三角的位置
			$tooltip.find("i").css("left", triangleLeft + "px");
			//设置位置，并显示
			$tooltip.css({
				"left": tipLeft + "px",
				"top": tipTop + "px"
			}).fadeIn(300);
		}, function() {
			//隐藏
			$tooltip.remove();
		});
	}
})(jQuery);