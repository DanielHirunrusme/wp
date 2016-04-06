var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity"),
	current_preview_index = 0,
	previous_preview_index = 0;




module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		
		 
		$el.on('mouseover', function(event){ 
			
			//$('.preview').prepend($('.preview-image').eq(1));
			
			//$('.preview-image').eq(0).css('background-image', 'url('+$el.data('preview')+')');
			if($el.hasClass('active')) {
				$('.preview .preview-image').eq(0).velocity('stop').velocity({
				    opacity: 0
				}, {
				    duration: 800,
				    easing: "ease-in-out"
				});
				
				return true;
			} 
			
			if($('.projects-menu').css('opacity') < .4) return true;
			var index = $el.parent().index();
			
			$('.preview').prepend( $('.preview-'+index) );
			
			
			
			//fade out previous one
			//if(previous_preview_index != current_preview_index)
			$('.preview .preview-image').eq(1).velocity('stop').velocity({
			    opacity: 0
			}, {
			    duration: 800,
			    easing: "ease-in-out"
			});
			
			previous_preview_index = current_preview_index;
			current_preview_index = index;
			
			//fade in new one
			$('.preview .preview-image').eq(0).velocity('stop').velocity({
			    opacity: 1
			}, {
			    duration: 800,
			    easing: "ease-in-out"
			});
			
			$('.preview').addClass('over');

			
			$('.project-list li').on('mouseleave', function(e){
				if($('.preview .preview-image').eq(0).hasClass('active')) return true;
				if($('.preview .preview-image').eq(1).hasClass('active')) return true;
				$('.preview .preview-image').eq(0).velocity('stop').velocity({
				    opacity: 0
				}, {
				    duration: 800,
				    easing: "ease-in-out"
				});
				
			}).on('mouseenter', function(){
				if($el.hasClass('active')) {
					$('.preview .preview-image').eq(0).velocity('stop').velocity({
					    opacity: 1
					}, {
					    duration: 800,
					    easing: "ease-in-out"
					});
				}
			});
			
		}).on('mouseout', function(){

			
			var index = $el.parent().index();
			 
			
			
			/*
			$('.preview').velocity('stop').velocity({
			    opacity: 0
			}, {
			    duration: 400,
			    easing: "ease-in-out"
			});
			*/
		}).on('click', function(){
			
			if(!$el.hasClass('pjax')) {
				$el.off('mouseout');
				var index = $el.parent().index();
				$('.preview .preview-image').eq(0).addClass('active')
				$('.preview .preview-image').eq(0).velocity('stop').velocity({
				    opacity: 1
				}, {
				    duration: 0,
				    easing: "ease-in-out"
				});
			} else {
				$('.preview .preview-image').eq(0).addClass('active')
			}
			
		});
		
		
};
  