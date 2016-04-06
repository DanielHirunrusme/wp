var $ = require('jquery');
var Velocity = $.velocity = require('velocity-animate');
var settings = require( "modules/settings" );





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		var $targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' ),
			from_opacity = $el.data('from-opacity'),
			to_opacity = $el.data('to-opacity'),
			curr_opacity = from_opacity,
			going_down = from_opacity > to_opacity ? true : false;
		
		
		
		
			
		function setScrollTarg() {
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
				from_opacity = $el.attr('data-mobile-from-opacity') ? $el.data('mobile-from-opacity') : from_opacity;
			} else {
				$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
				from_opacity = $el.data('from-opacity') != '' ? $el.data('from-opacity') : from_opacity;
			}
		}
		
		$window.on('resize', function(){
			setScrollTarg();
		})
		setScrollTarg();
		//$el.velocity('opacity', from_opacity).removeClass('disable-link');
		
		$el.velocity({
		    opacity: from_opacity
		}, {
		    duration: 400,
		    easing: "ease-in-out"
		}).removeClass('disable-link');
		
		function setOpacity(e) {
			if($el.hasClass('desktop-disable-scroll-overlay') && $window.width() >= settings.breakpoints.m) return true;
			
			var dim;
		    //console.log(e);
			var gain = $window.width() < settings.breakpoints.m ? 1 : 2;
			
			if(going_down) {
				dim = from_opacity - ( $targ.scrollTop() * gain )  /  ( $window.height()  );
				dim = dim < to_opacity ? to_opacity : dim;
			} else {
				dim = from_opacity + ( $targ.scrollTop() * gain )  /  ( $window.height()  );
				dim = dim > to_opacity ? to_opacity : dim;
				if(dim > 0) {
					$el.addClass('enable-links');
				} else {
					$el.removeClass('enable-links');
				}
			}
			
			
			
			//console.log($el);
			
			if(curr_opacity != dim)$el.css('opacity', dim)
				curr_opacity = dim;
		} 
		
		
		
		
		
		if($el.hasClass('intro')) {
			/*
			$window.on('mousewheel', function(event){
				introScroll(event);
			});
			
			var targ_opacity = 0;
			var set_to = $el.data('to-opacity');
			var set_from = $el.data('from-opacity');
			
			$('body').addClass('intro-scroll');
			
			function introScroll(event){
				var curr_o = Number($el.css('opacity').split('px').join(' '));
				var targ_o = curr_o + (event.deltaY/($window.height()/2));
					targ_o = targ_o < set_to ? set_to : targ_o;
					targ_o = targ_o > set_from ? set_from : targ_o;
				
				if($targ.scrollTop() == 0){
					if(targ_o <= set_to) {
						$targ.scrollTop(1);
						$('body').removeClass('intro-scroll');
						$el.hide()
					} else {
						$el.css('opacity', targ_o)
					}
					
					
				}
				
				
					
				
			
			}
			
			//introScroll();
			*/
		}
		
		$window.on('resize', setOpacity);
		$window.on('mousewheel scroll', setOpacity);
		
		setScrollTarg();
		setOpacity();
		
		
};
  