var $ = require('jquery');
var Velocity = $.velocity = require('velocity-animate');

var settings = require( "modules/settings" ),
controller = require( "modules/section-controller" );





module.exports = function( el ) {
		var $nav = $( el );
		$window = $( window );
		
		var index = $nav.parent().index();
		
		//$nav.css('opacity', 1);
		 
		$nav.on('mouseover', function(e){ 
			e.stopPropagation();
			if($window.width() < settings.breakpoints.m ) {
				console.log('return')
				return true;
				
			}
			//console.log($nav);
			
			var index = $nav.parent().index();
			if(!$nav.hasClass('main-wrapper')) {
				$('.preview-bg').eq(index).velocity('stop').velocity({
				    opacity: 1
				}, {
				    duration: 400,
				    easing: "ease-in-out"
				});
			}
			
		}).on('mouseout', function(e){
			e.stopPropagation();
			if(settings.breakpoints.m < 1000) {
				return true;
			}
			var index = $nav.parent().index();
			
			$('.preview-bg').eq(index).velocity('stop').velocity({
			    opacity: e
			}, {
			    duration: 800,
			    easing: "ease-in-out"
			});
			 

		}).on('click', function(e){
			//e.preventDefault();
			$(this).closest('ul').find('.active').removeClass('active');
			$(this).addClass('active');

			
		});
		
		
};
  