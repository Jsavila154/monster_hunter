$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 0 ) {
			$('header').addClass('logo2');

		} else {
			$('header').removeClass('logo2');
		}
	});  


});	
$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 1125 ) {
			$('aside').addClass('nav2');

		} else {
			$('aside').removeClass('nav2');
		}
	});  


});	