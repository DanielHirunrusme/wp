var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");

	



module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window ),
		timer;
 
		settings.scrollContainer = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
		function setScrollTarg() {
			if($window.width() < settings.breakpoints.m) {
				settings.scrollContainer = $('body');
			} else {
				settings.scrollContainer = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
			}
		}
		
		setScrollTarg();
		
		
		$window.on('resize', throttle(function (event) { 
			clearTimeout(timer);
			setScrollTarg();
			//$('*').addClass('notransition');
			
			if($window.width() < settings.breakpoints.m) {
				$('body').addClass('mobile')
			} else {
				$('body').removeClass('mobile');
			}
			
			if(!$('body').hasClass('animating'))
			timer = setTimeout(function(){ $('*').removeClass('notransition'); }, 200);
		}, 200));
};
  