var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity");





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window ),
		$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
		
		
		function setScrollTarg() {
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
			} else {
				$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
			}
		}
		
		$window.on('resize', function(){
			setScrollTarg();
		})
		
		setScrollTarg();
		
		$targ.on('mousewheel scroll', function(){
			$('body').removeClass('scrolling');
			
			
			if($targ[0].scrollHeight <= $window.height() *2) {
				//$el.hide();
				//alert('hi')
				//$el.hide().css('opacity', 0).addClass('off');
			} else {
				/*console.log($targ.scrollTop())
				if($targ.scrollTop() > $('.work').last().position().top -  $('.work').last().height() )
				$el.show().css('opacity', 1).removeClass('off');
				else
				$el.hide().css('opacity', 0).addClass('off');*/
			}
		});
		
		
		function toTop(e){
			e.preventDefault();
			
		
			
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
			}
			
			$el.off();
			$el.addClass('off');
			$('body').addClass('scrolling');
			
			$targ.stop().animate({scrollTop:0 }, 800, function(){
				$el.on('click', toTop);
				//$el.removeClass('off');
				$('body').removeClass('scrolling');
				$window.off('mousewheel', stopToTop);
			});
			$('.top').addClass('off')
			$('.projects-menu').removeClass('disable-link');
			$('.main-menu').removeClass('disable-link');
			$('.mobile-black-overlay').velocity('stop').velocity({ opacity: .3 }, 1000);
			//$('.project-information').show().velocity('stop').velocity({ opacity: 1 }, 1000);
			$('.project-information .inner').show().velocity('stop').velocity({ opacity: 1 }, 1000);
			$('.projects-menu').velocity('stop').velocity({ opacity: 1 }, 1000);
			//$('.main-menu').velocity('stop').velocity({ opacity: 1 }, 1000);
			$('.top').hide().velocity('stop').velocity({ opacity: 0 }, 100);
			
			$('[data-from-opacity]').each(function() {
			
				$(this).show().velocity('stop').velocity({ opacity: $(this).data('from-opacity') }, 1000);
			})
			
			
			
			
			
			$window.on('mousewheel', stopToTop);

		} 
		
		function stopToTop(e){
			$el.on('click', toTop);
			$el.removeClass('off');
			
			$('.project-information .inner').velocity('stop');
			$('.projects-menu').velocity('stop');
			$('.main-menu').velocity('stop');
			$('.top').velocity('stop');
			
			
			$targ.stop();
			$window.off('mousewheel', stopToTop);
			$window.trigger('mousewheel');
		}
		
		$window.on('resize', function(){
			setTarg();
		});
		
		function setTarg() {
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
			} else {
				$targ = $('.inner-wrapper');
			}
		}
		
		setTarg();
		
		$el.on('click', toTop);
		
};
  