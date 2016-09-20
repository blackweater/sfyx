$(function(){
	$("<div/>").load("header.html",function(){
		$(this).insertBefore(".row-fluid");
	});
	$("<div/>").load("footer.html",function(){
		$(this).insertAfter(".row-fluid");
	});
})	