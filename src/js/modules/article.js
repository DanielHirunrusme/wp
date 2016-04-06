var $ = require('jquery');
var Velocity = $.velocity = require('velocity-animate');

var settings = require( "modules/settings" ),
	mousewheel = require('jquery-mousewheel'),
	throttle = require('modules/throttle'),
	$window,
	scrollable = true,
	projects = false,
	project = false;



module.exports = function( el ) {
	
	var $el = $( el ),
		$window = $( window ),
		speed =  1000,
		$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper article-last-child') : $( '.inner-wrapper' );
		
		
		// get the scroll container
		function setScrollTarg() {
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
			} else {
				$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper article:last-child') : $( '.inner-wrapper' );
			}
		}
		
		$window.on('resize', function(){
			setScrollTarg();
		})
		
		setScrollTarg();
		
		
		
		
		
		
		
		$('.active').on('click', function(e){
			e.preventDefault();
			$('.inner-wrapper').stop().animate({ scrollTop:0 });
		});
		
		
		if($('body').hasClass('home')){
			$('.logo-link').addClass('link-disabled');
		} else {
			$('.logo-link').removeClass('link-disabled');
		}
		
		
		
		
		
		
		if($('body').hasClass('project')){
			
			/** 
			*   clicked the title from projects page 
			*   or on same slide as what you clicked in the project menu
			*/ 
			if( $('.main-wrapper article:first-child').data('work-num') == $('.main-wrapper article:last-child').data('work-num')) {
	
				$('.main-wrapper article:first-child').find('.project-information').hide();
				$('.main-wrapper article:last-child').find('.project-information').show().css('opacity', 1).css('right', 0);
				
			} else if($('.main-wrapper article:first-child').hasClass('projects-wrapper') && $targ.scrollTop() < $('.work.shown').height()/2) {
				console.log('scrollTop ' + $targ.scrollTop())
				$('.main-wrapper article:first-child').find('.project-information').hide();
				//$('.main-wrapper article:last-child').find('.project-information').show().css('opacity', 1).css('right', 0);
			}
			
		}
		
		if($('.projects-holder').length > 0) {
			$('.projects-holder').addClass('loaded');
			//setTimeout(function(){ $('.projects-holder').addClass('loaded'); }, 2000)
		}
		
		/*

		if( $('.remove-article').data('order') == $('.added-article').data('order')) {
			$('.fadein').removeClass('fadein').addClass('show');
			console.log('remove all fadein ****')
		}

		 */
		
		if( $('.remove-article').data('order') == $('.added-article').data('order') ||
		 	$('.added-article').hasClass('home') && $('.remove-article').hasClass('studio') ||
			$('.added-article').hasClass('studio') && $('.remove-article').hasClass('home') 
		) {
			$('.fadein').removeClass('fadein').addClass('show');
			
		}
		
		$('.next-slide').on('click', function(e){
			e.preventDefault();
			$('.inner-wrapper').stop().animate({ scrollTop:$window.height() });
		});
		
		if($el.hasClass('remove-article')) {
			
			$('body').addClass('animating');
			
			if ($('.added-article .fade-in').length){
				$('.added-article .fade-in').velocity({
				    opacity: 1
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){
						$('.added-article').addClass('anim-finished');
						$('body').removeClass('animating');
					}
				});
			}
			

		
			$('.remove-article .fade-in').velocity({
			    opacity: 0
			}, {
			    duration: speed,
			    easing: "ease-in-out",
				complete: function(){
					$('.added-article').addClass('anim-finished');
					$('body').removeClass('animating');
				
				}
			});
			
			//if on the press page and going to another page
			if( $('.main-wrapper .remove-article').find('.post-content').length > 0 && $('.main-wrapper .added-article').data('order') != $('.main-wrapper .remove-article').data('order') ) {
				settings.scrollPos = settings.padding.top;
				$('.remove-article .post-content').velocity('stop').velocity({
				    left: -$window.width()
				}, {
				    duration: speed,
				    easing: "ease-in-out",
				});
			
			} 
			
			//if going to another page
			if( $('.main-wrapper .added-article').data('order') != $('.main-wrapper .remove-article').data('order') ) {
				settings.scrollPos =  settings.padding.top;
				
				$('.site-description span:last-child').velocity({
				    left: 0
				}, {
				    duration: speed,
				    easing: "ease-in-out"
				});
			
				$('.site-description span:first-child').velocity('stop').velocity({
				    left: -$window.width()
				}, {
				    duration: speed,
				    easing: "ease-in-out"
				});
			} else {
			// if on same page
				console.log('same page')
				$('.site-description span:last-child').velocity({
				    left: 0
				}, {
				    duration: 0,
				    easing: "ease-in-out"
				});
			
				$('.site-description span:first-child').velocity('stop').velocity({
				    left: -$window.width()
				}, {
				    duration: 0,
				    easing: "ease-in-out"
				});
				
				
				
				$('.remove-article .project-information').velocity({
				    right: $window.width()
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){

					}
				});
				
				//$('.site-description span:first-child').remove();
			}
			
			setTimeout(function(){
				$('.remove-article').remove(); 
				$('body').removeClass('animating');
			}, speed);
			
			
			/* if projects page slide out menu */
			
			if($('.added-article .left-menu').length > 0) {
				
				if( $('.main-wrapper .added-article').data('order') != $('.main-wrapper .remove-article').data('order') ) {
					console.log(settings.breakpoints.m);
					var left = $window.width() > settings.breakpoints.m ? $('.added-article .left-menu').data('left') : 0;
					
					$('.added-article .left-menu').velocity({
						left: left
					}, {
					    duration: speed,
					    easing: "ease-in-out",
					});
					
					
					
					$('.remove-article .project-information').velocity({
					    right: $window.width()
					}, {
					    duration: speed,
					    easing: "ease-in-out",
						complete: function(){

						}
					});
					
				} else {
					
					var left = $window.width() > settings.breakpoints.m ? $('.added-article .left-menu').data('left') : 0;
					
					$('.added-article .left-menu').velocity({
						left: left
					}, {
					    duration:0
					});
					
					$('.remove-article .left-menu').remove();
					
					
				}
				
				$('.added-article .project-information').velocity({
				    right: "0"
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){

					}
				});
						
						
				
			}
			
			/* if projects page slide out title */
			
			if($('.remove-article .left-menu').length > 0) {
				
				if( $('.main-wrapper .added-article').data('order') != $('.main-wrapper .remove-article').data('order') )  {
					$('.remove-article .left-menu').velocity({
					   left: "-60vw"
					}, {
					    duration: speed,
					    easing: "ease-in-out",
					});
					
					$('.remove-article .project-information').velocity({
					    right: $window.width()
					}, {
					    duration: speed,
					    easing: "ease-in-out",
						complete: function(){

						}
					});
					
				} else {
					$('.remove-article .left-menu').remove();
					
					
				}
				
				
				
			}
			
			
			$window.on('resize', function(){
				
				setTimeout(function(){
					if(!$('body').hasClass('animating')){
						console.log('resize')
						if($window.width() > settings.breakpoints.m){
					
							var left = $('.added-article .left-menu').data('left');
					
							$('.added-article .left-menu').velocity({
								left: left
							}, {
							    duration: 0,
							    easing: "ease-in-out",
							});
					
						} else {
					
							$('.added-article .left-menu').velocity({
								left: 0
							}, {
							    duration: 0,
							    easing: "ease-in-out",
							});
						}
					}
				}, 100)
				
				

			})
			
			
			
			
			
			
			/*
			$('.added-description').velocity('stop').velocity({
			    opacity: 1
			}, {
			    duration: speed,
			    easing: "ease-in-out",
				complete: function(){
					$('.added-description').addClass('anim-finished');
					$('body').removeClass('animating');
				}
			});
			
			$('.remove-description').removeClass('anim-finished').velocity('stop').velocity({
			    opacity: 0
			}, {
			    duration: speed,
			    easing: "ease-in-out",
				complete: function(){ 
					$('.remove-description').remove(); 
				}
			});
			*/
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			// this is for moving the slides left and right
			
			
			
			
			/*
			if( $('.js-Pjax-add').data('order') > $('.js-Pjax-remove').data('order') ) {
				
				//go left
				
				$('.js-Pjax-add').css('left', $window.width());
				$('.js-Pjax-add').velocity('stop').velocity({
				    left:0
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete:function(){
						$('.js-Pjax-add').addClass('anim-finished');
						$('body').removeClass('animating');
					}
				});
				
				$('.js-Pjax-remove').velocity('stop').velocity({
				    left: -$window.width()
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){ 
						$('.js-Pjax-remove').remove(); 
					}
				});
				
			} else {
				// go right
				$('.js-Pjax-add').css('left', -$window.width());
				$('.js-Pjax-add').velocity('stop').velocity({
				    left: 0
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){
						$('.js-Pjax-add').addClass('anim-finished');
						$('body').removeClass('animating');
					}
				});
				
				$('.js-Pjax-remove').removeClass('anim-finished').velocity('stop').velocity({
				    left: $window.width()
				}, {
				    duration: speed,
				    easing: "ease-in-out",
					complete: function(){ 
						$('.js-Pjax-remove').remove(); 
					}
				});
				
			}
			*/
			
			
		}
		
};
 