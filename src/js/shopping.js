$(function(){
var oUl = $("#plist");

	// [TODO] 获取cookie，并转换会数组，并遍历创建 LI 显示

		//定义str和arr
	// var a = "[{}]"
	// string
	//alert(typeof str);
	var str=getCookie("arr");//你要查的是字符串
	var arr=JSON.parse(str);
console.log(arr);
	for (var i = 0; i < arr.length; i++)
	{
		// 创建一个商品
		var oLi = $("<li><li/>");

		// 取出数组中元素，arr[i] 是一个对象,
		//    再取出这个对象中的产品名 和 价格
		console.log(arr[i].src);
	oLi.html("<img src="+arr[i].src+"/><p>"+arr[i].product+"</p><p>"
		+arr[i].price +"</p><p>"+arr[i].num+"</p>");

		oLi.appendTo(oUl);
	}		
})