$(document).ready(function(){
	var current_services = $('.services .span4').get().sort(function(){ 
	  return Math.round(Math.random())-0.3
	}).slice(0,3);
	$(current_services).removeClass('hide');
});