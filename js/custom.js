$(document).ready(function() {

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage', '6thPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var sceenHeight = $(window).height();
		var $header = $(".js-header");
		if(scrollDistance >= sceenHeight){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// font color of navbar change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var sceenHeight = $(window).height();
		var $header = $(".js-header");
		if(scrollDistance < sceenHeight){
			$header.addClass("active__firstPage");
		}
		else{
			$header.removeClass("active__firstPage")
		}
		if((scrollDistance >= (sceenHeight * 1)) && (scrollDistance < (sceenHeight * 2))){
			$header.addClass("active__secondPage");
		}
		else{
			$header.removeClass("active__secondPage")
		}
		if((scrollDistance >= (sceenHeight * 2)) && (scrollDistance < (sceenHeight * 3))){
			$header.addClass("active__thirdPage");
		}
		else{
			$header.removeClass("active__thirdPage")
		}
		if((scrollDistance >= (sceenHeight * 3)) && (scrollDistance < (sceenHeight * 4))){
			$header.addClass("active__4thPage");
		}
		else{
			$header.removeClass("active__4thPage")
		}
		if((scrollDistance >= (sceenHeight * 4)) && (scrollDistance < (sceenHeight * 5))){
			$header.addClass("active__5thPage");
		}
		else{
			$header.removeClass("active__5thPage")
		}
		if((scrollDistance >= (sceenHeight * 5)) && (scrollDistance < (sceenHeight * 6))){
			$header.addClass("active__6thPage");
		}
		else{
			$header.removeClass("active__6thPage")
		}
	})

	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
		

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1600:{
	            items:4
	        }
	    }
	})
});