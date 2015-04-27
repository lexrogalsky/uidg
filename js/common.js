$(document).ready(function(){
	$('a').click(function(e){
		if($(this).attr('rel') != 'internal'){
			e.preventDefault();
			window.open($(this).attr('href'));
		}
	});
});