function init_carousel(){
	var mouseover = true;
	$('#projects-slides, #projects-descriptions').carousel({
		interval: 10000,
		pause: null
	});
	if($('.projects').css('background-color') == 'transparent'){
		$('#projects-slides, #projects-descriptions').carousel('pause');
	}
	$('.projects').hover(
		function(){
			$('#projects-slides, #projects-descriptions').carousel('pause');
		},
		function(){
			$('#projects-slides, #projects-descriptions').carousel('cycle');
		}
	);

	$('.projects [data-slide="next"]').click(function(e){
		e.preventDefault();
		$('#projects-slides, #projects-descriptions').carousel('next');
	});
	$('.projects [data-slide="prev"]').click(function(e){
		e.preventDefault();
		$('#projects-slides, #projects-descriptions').carousel('prev');
	});

	var carousel_nums = $('.projects .carousel-nums li');
	$(carousel_nums).click(function(e){
		e.preventDefault();
		$('#projects-slides, #projects-descriptions').carousel(carousel_nums.index(this));
	});

	$('#projects-slides').on('slide', function(e){
		var slideFrom = $(this).find('.active').index();
		var slideTo = $(e.relatedTarget).index();
		$(carousel_nums.get(slideFrom)).removeClass('active');
		$(carousel_nums.get(slideTo)).addClass('active');
	});
}

$(document).ready(function(){
	var sliding = false;
	$(window).on('scroll', function(e){
		if(!sliding){
			init_carousel();
			sliding = true;
		}
		else{
			$(window).off('scroll');
		}
	});
	$('.projects .carousel-controls').hover(function(e){
		if(!sliding){
			init_carousel();
			sliding = true;
		}
	});
});