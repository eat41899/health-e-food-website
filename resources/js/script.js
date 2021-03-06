/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
	
	/*Sticky Navigation*/
    $('.js-section-features').waypoint(function(direction){
		if (direction == "down"){
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  		offset: '60px;'
	});
	
	/*Scrolling on buttons*/
	$('.js-scroll-to-plan').click(function(){
		$('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
	});
	
	$('.js-scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
	});
	
	/* Navigation-bar scrolling
	*  https://css-tricks.com/snippets/jquery/smooth-scrolling/
	*/
	$('a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
       	|| location.hostname == this.hostname) {

        	var target = $(this.hash);
        	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           		if (target.length) {
             		$('html,body').animate({
                 		scrollTop: target.offset().top
            			}, 1000);
            		
					return false;
        		}
    	}
	});
	
	/* Animations on scroll
	* https://daneden.github.io/animate.css/
	*/
	$('.js-waypoint-1').waypoint(function(direction){
		$('.js-waypoint-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.js-waypoint-2').waypoint(function(direction){
		$('.js-waypoint-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.js-waypoint-3').waypoint(function(direction){
		$('.js-waypoint-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.js-waypoint-4').waypoint(function(direction){
		$('.js-waypoint-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});
	
	
	
	
	
	
});