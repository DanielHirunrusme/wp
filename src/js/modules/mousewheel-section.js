var settings = require( "modules/settings" ),
	mousewheel = require('jquery-mousewheel'),
	throttle = require('modules/throttle'),
	$window,
	scrollable = true,
	projects = false,
	project = false;


module.exports = function( el ) {
	var $el = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' ),
		$window = $( window );

		if($('body').hasClass('projects')) {
			$('.projects-menu nav li').eq(0).find('a').addClass('selected');
			$('.project-information a').attr("href", $('.projects-menu nav li').eq(0).find('a').attr('href'));
			$('.project-information h1').text($('.work').eq(0).data('title'));
		}
		
		//$('body').scrollTop(0);
		
		$window.on('mousewheel scroll', throttle(function (event) {
			
			if($('body').hasClass('projects')) {
				
				$last_article = $('.main-wrapper article:last-child');
				
			 	$('.main-wrapper article:last-child').find('.work.on').each(function(){
					
					
					
					if($window.width() > settings.breakpoints.m) {
				 		if($(this).position().top < $window.height()/2){ 
							$last_article.find('.project-information h1').text($(this).data('title'));
							$last_article.find('.projects-menu nav a').removeClass('selected');
							//console.log($(this).index());
							$last_article.find('.project-information a').attr("href", $(this).data('url')); 
							$last_article.find('.projects-menu nav li').eq($(this).index()).find('a').addClass('selected');
							//$('.main-wrapper article:last-child').find('.project-information a').attr("href", $('.main-wrapper article:last-child').find('.projects-menu nav li').eq($(this).index()).find('a').attr('href'));
							
							
							
							$('.main-wrapper article:last-child').attr('data-work-num', $('.projects-menu nav li').eq($(this).index()-1).data('num'));
							$('.main-wrapper article:last-child').find('.project-information a').attr('data-work-num', $('.projects-menu nav li').eq($(this).index()-1).data('num'));
				 		}
					} else {
						if($window.width() > settings.breakpoints.m) {
					 		if($(this).position().top < $window.height()/4){ 
								$last_article.find('.project-information h1').text($(this).data('title'));
								$last_article.find('.projects-menu nav a').removeClass('selected');
								//console.log($(this).index());
								$last_article.find('.project-information a').attr("href", $(this).data('url')); 
								$('.projects-menu nav li').eq($(this).index()).find('a').addClass('selected');
					
								$('.project-information a').attr("href", $('.projects-menu nav li').eq($(this).index()).find('a').attr('href'));
								$('.project-information a').data("num", $('.projects-menu nav li').eq($(this).index()).data('num'));
								//$('.project-information a').attr('data-work-num', $('.main-wrapper article:last-child').find('.projects-menu nav li').attr('data-num'));
					 		}
						} else {
					 		if($('body').scrollTop() > $(this).position().top - $window.height()/2){ 
								$last_article.find('.project-information h1').text($(this).data('title'));
								$last_article.find('.projects-menu nav a').removeClass('selected');
								//console.log($(this).index());
								$last_article.find('.project-information a').attr("href", $(this).data('url')); 
								$('.projects-menu nav li').eq($(this).index()).find('a').addClass('selected');
								$last_article.find('.project-information a').data("num", 222);
								$last_article.find('.project-information a').attr('data-work-num', $('.projects-menu nav li').eq($(this).index()-1).data('num'));
								//$('.main-wrapper article:last-child').find('.project-information a').attr("href", $('.main-wrapper article:last-child').find('.projects-menu nav li').eq($(this).index()).find('a').attr('href'));
					 		}
						}
					}
			 	});
				
			}
			
		}, 200));
			
		
		
		
		$window.on('mousewheel scroll', function(){
			if( $('body').hasClass('project') ){
				
				
				var dim = 1 - ( $el.scrollTop() - $window.height()/2 ) / $window.height() ;
				
				var $targ = $el;
	
				//$('.site-footer').css('opacity', dim );
				if($window.width() > settings.breakpoints.m) {
					$('.projects-menu').addClass('notrans');
					$('.projects-menu').css('opacity', dim );
					$('.project-information').css('opacity', 1 );
					$('.main-menu').css('opacity', dim );
					
					if(dim < .3) {
						$('.projects-menu').addClass('disable-link');
						$('.main-menu').addClass('disable-link');
					} else {
						$('.projects-menu').removeClass('disable-link');
						$('.main-menu').removeClass('disable-link');
					}
					
					
				} else {
					$targ = $('body');
				}
				
				var bottom_dim = -1 * ( $targ.scrollTop() -  $targ[0].scrollHeight + $window.height() )  /  ( $window.height()   );
					bottom_dim = bottom_dim > 1 ? 1 : bottom_dim;
					bottom_dim = bottom_dim < 0 ? 0 : bottom_dim;
					
					
				var overlay_dim = ( $targ.scrollTop() * 10 )  /  ( $window.height()  );
					overlay_dim = overlay_dim > 1 ? 1 : overlay_dim;
					overlay_dim = overlay_dim < 0 ? 0 : overlay_dim;
					overlay_dim = 1 - overlay_dim;
				
				
				
				if($targ[0].scrollHeight <= $window.height() *2) {
					bottom_dim = 1;
					overlay_dim = 0;
					
					//$('.mobile-black-overlay').css( 'opacity', ( 0 ) );
					//$('.mobile-black-overlay').velocity('stop').velocity({ opacity: 0 }, 1000);
					//alert('lesss than')
					if($('body').hasClass('scrolling')) return true;
					if(bottom_dim < .5) {
						$('.project-information .inner').hide();
						if(!$('.top').hasClass('off')) $('.top').show().css('opacity', 1);
						//$('.top').removeClass('off')
					} else {
						$('.project-information .inner').show();
						$('.top').hide().css('opacity', 0);
						//$('.top').addClass('off')
					
					}
					
				} else {
					//$('.mobile-black-overlay').css( 'opacity', ( overlay_dim) );
					if($('body').hasClass('scrolling')) return true;
					if(bottom_dim < .5) {
						$('.project-information .inner').hide();
						$('.top').show().css('opacity', 1);
						$('.top').removeClass('off')
					} else {
						$('.project-information .inner').show();
						$('.top').hide().css('opacity', 0);
						$('.top').addClass('off')
					
					}
				}
					
				//$('.project-information .inner').css( 'opacity', bottom_dim - .3 );
				
				//$('.top').css( 'opacity', 1 - bottom_dim );
				
			
				//$('.top').css('opacity', $('.main-wrapper').scrollTop() / $window.height() )
			}
		});
		
		
		$('.projects-menu').on('mouseover', function(){
			scrollable = false;
			$('body').addClass('menu-over');
		}).on('mouseout', function(){
			scrollable = true;
			$('body').removeClass('menu-over');
		})
		
		$window.on('mousewheel', function(event){
			if($('body').hasClass('mobile')) return true;
			if(!$('body').hasClass('animating') && !$('body').hasClass('toggle-menu') && scrollable) {
				//console.log(scrollable)
				var scroll = $el.scrollTop();
				$el.scrollTop( scroll - event.deltaY )
				
			} else {
				return true;
			}
	
				
			
			return true;
		});
		
		
		$window.trigger('mousewheel');
		$window.trigger('resize');
		
		
		
};
 