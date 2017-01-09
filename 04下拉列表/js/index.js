$(function() {
	//点击展开、隐藏事件
	$(".cardNumber .first .showText").click(function() {

		//获取需要显示，隐藏的ul
		var ul = $(this).parent().find("ul"); //当前下拉列表ul
		var otherUl = $(this).parent().siblings().find("ul"); //其他兄弟元素的下拉列表ul

		//如果已经是动画状态，则第二次点击无效
		if (ul.is(":animated")) {
			return;
		} else {
			//有可能其他元素正展开，然后又点击其他元素，需要设置先全部隐藏
			for (var i = 0; i < otherUl.size(); i++) {
				otherUl.eq(i).hide();
			}
			//执行动画
			ul.slideToggle(250);
		}
	});

	//设置选中的文字
	$(".cardNumber .first ul li").click(function() {
		var parent = $(this).parents(".first").find(".showText"); //获取那个用来显示的div
		var selectText = $(this).text(); //当前点击的文字
		parent.text(selectText); //赋值

		//选完后，隐藏所有显示的下拉列表ul
		$(".cardNumber .first ul").hide();
	});
	
	//input焦点事件
	$(".cardNumber li input").bind("keyup",function(){
		if($(this).val()!=''){
			$(this).parent().next().find("input").focus();
		}
	});
})