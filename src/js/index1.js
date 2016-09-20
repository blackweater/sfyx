$(function(){
var $productlist = $('.productlist');
			var pageNum = 1;

// 全局配置
$.ajaxSetup({
	url:'../ajax',
	data:{pageNo:pageNum},
	dataType:'json',
	success:function(res){
		console.log(res);
		
		var $ul = $('.productlist ul');
		$.each(res.data,function(idx,item){
			$('<li/>').html('<strong>'+item.name+'：</strong>' + item.content).appendTo($ul);
		});

		$productlist.append($ul);
	}
});

	// 页面一加载就请求服务器的数据
	$.ajax();

	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();

		// 懒加载：滚动《快到底部》的时候再加载
		if(scrollTop >= $(document).height() - $(window).height() - 100){
			pageNum++;
			if(pageNum>=4){
				pageNum = 1;
			}

			$.ajax({
				data:{pageNo:pageNum}
			});
		}
	});

	// 手动触发滚动事件
	$(window).trigger('scroll');
});
