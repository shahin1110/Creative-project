$(document).ready(function(){

	$('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        speed: 200
     });
	$('.pie_progress').asPieProgress('start');


	// Close Mobile Menu
	$(".btn-area").click(function(){
		$(this).toggleClass("close-btn")
	});

	// Mobile Menu
	$(".btn-area").click(function(){
		$('.menu ul').slideToggle(500);
	});

	// Search Menu
	$(".search-icon").click(function(){
		$('.search-area').slideToggle(500);
	});

	
	// Testimonials - Carousel
	$('.testi-items').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true
	});
	// clients - Carousel
	$('.clients').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		margin:30,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			}

		}

	});
	//CounterUp
	$('.company-number span').counterUp({
   			time:2000
   		});

});

// Fixed Menu
$(window).scroll(function(){
	if($(this).scrollTop()>550){
		$('.header-area').addClass('fixed-top');
	}else{
		$('.header-area').removeClass('fixed-top');
	}
});
$(window).scroll(function(){
	if($(this).scrollTop()>550){
		$('.div').addClass('div-block');
	}else{
		$('.div').removeClass('div-block');
	}
});

