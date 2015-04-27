$(document).ready(function(){
	var i = Math.round(Math.random()*($('.day figure').length-1));
	var day = $('.day figure').get(i);
	$(day).removeClass('hide');
});