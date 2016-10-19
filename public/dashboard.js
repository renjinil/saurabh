$( document ).ready(function(){

	$.get("/blogp",function(data){
		data.forEach(function(value,key){

		$("#main").append('\<div >\
		<div class="col-xs-12 post">\
			<h2>'+value.head+'</h2>\
			<p class="content">'+value.content+'</p>\
			<a href="#" class="pull-right edit glyphicon glyphicon-edit">Edit</a>\
			<div class="bottom_data">\
			<p class="pull-left">author : '+value.author+'</p>\
			<p class="pull-right">Date : '+value.date+'</p>\
			</div>\
		</div>\
		<div class="clear"></div>\
	</div>');

		})
	})
 
// $.get("/blogp",function(data){
// 		data.forEach(function(value,key){
// 			$("#main").append('\<div class="block">\
// 				<div class="col-xs-10 ">\
// 		<div class="col-xs-4 ">\
// 			<h4>'+value.head+'</h4>\
// 			<p class="content">'+value.content+'</p>\
// 			<div class="bottom_data">\
// 			<p class="pull-left">Author : '+value.authorr+'</p>\
// 			<p class="pull-right">Date : '+value.date+'</p>\
// 			</div>\
// 		</div>\
// 		<div class="col-xs-1"></div>\
// 		<div class="clear"></div>\
// 	</div>');  

// 		})
// 	})  
	$("#home").click(function(){
        window.location.href = "home.html";

	})
// 	$('#create').click(function(){
// 		$('#main').append('\<div >\
// 		<div class="col-xs-12 post ">\
// 		<a href="#" class="pull-right edit glyphicon glyphicon-edit">Edit</a>\
// 			<h2>'+$('#addtit').val()+'</h2>\
// 			<p class="content">'+$('#addauth').val()+'</p>\
// 			<div class="bottom_data">\
// 			<p class="pull-left">author :'+$('#content').val()+ '</p>\
// 			<p class="pull-right">Date :'+$('#day').val()+'</p>\
// 			</div>\
// 		</div>\
// 		<div class="clear"></div>\
// 	</div>')
// 	})
// 	$('#add').click(function() {
	
// $("#adddiv").css("display", "block");
// 	});
})