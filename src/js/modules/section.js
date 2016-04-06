var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	$window;
	

module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		if(!settings.unique && !settings.animating) {
			
			settings.animating = true;
			
			//side by side
			if($('.js-Pjax-add').data('tier') == $('.js-Pjax-remove').data('tier')) {
				console.log('move sideways')
				
				console.log(Number($('.js-Pjax-add').data('page-id')))
				console.log(Number($('.js-Pjax-remove').data('page-id')))
				
				if( Number($('.js-Pjax-add').data('page-id')) >  Number($('.js-Pjax-remove').data('page-id')) ){
					console.log('move left');
					$('.js-Pjax-add').velocity({ left: -$window.width() }, 0 ).velocity({ left: 0 }, 1000, 'ease-in-out');
					$('.js-Pjax-remove').velocity({ left: $window.width() }, {
						duration:1000, 
						easing:'ease-in-out',
						complete:function(){ $('.js-Pjax-remove').remove(); console.log('remove') }
					});
					
					$('.logos').velocity({ left: 0 }, 0 ).velocity({ left: $window.width() }, 1000, 'ease-in-out');
					
					
				} else {
					console.log('move right');
					
					$('.js-Pjax-add').velocity({ left: $window.width() }, 0 ).velocity({ left: 0 }, 1000, 'ease-in-out');
					$('.js-Pjax-remove').velocity({ left: -$window.width()  }, {
						duration:1000, 
						easing:'ease-in-out',
						complete:function(){ $('.js-Pjax-remove').remove(); console.log('remove') }
					});
					
					$('.logos').velocity({ left: 0 }, 0 ).velocity({ left: -$window.width() }, 1000, 'ease-in-out');
					
					
					
					//$('.mgs-logo.screen-3').velocity({ left: $window.width() * 2 }, 0 ).velocity({ left: $window.width() }, 1000, 'ease-in-out');
				}
				
			}
			
			//move down
			if($('.js-Pjax-add').data('tier') > $('.js-Pjax-remove').data('tier')) {
				console.log('move down')
				$('.js-Pjax-add').velocity({ top: $window.width() }, 0 ).velocity({ top: 0 }, 1000, 'ease-in-out');
				$('.js-Pjax-remove').velocity({ top: -$window.width() }, {
					duration:1000, 
					easing:'ease-in-out',
					complete:function(){ $('.js-Pjax-remove').remove(); console.log('remove') }
				});
			}
			
			//move up
			if($('.js-Pjax-add').data('tier') < $('.js-Pjax-remove').data('tier')) {
				console.log('move up')
				$('.js-Pjax-add').velocity({ top: -$window.width() }, 0 ).velocity({ top: 0 }, 1000, 'ease-in-out');
				$('.js-Pjax-remove').velocity({ top: $window.width() }, {
					duration:1000, 
					easing:'ease-in-out',
					complete:function(){ $('.js-Pjax-remove').remove(); console.log('remove') }
				});
			}
			
			setTimeout(function(){ settings.animating = false }, 1000);
			
			/*
			if($el.hasClass('js-Pjax-add')){
				//console.log('section tier add' + $el.data('tier'));
				
				if(settings.tier.target != settings.tier.current) {
					
					var move_y = settings.tier.target > settings.tier.current ? $window.height() : -$window.height();
						move_y = settings.tier.target == settings.tier.current ? 0 : move_y;
						
					$el.velocity({ top: move_y }, 0 ).velocity({ top: 0 }, 1000, 'ease-in-out');
					
				} else {
					
					var start_x = 0;
					
					console.log('===== target index ==== ' + settings.index.target)
					console.log('===== current index ==== ' + settings.index.current)
					
					if( settings.index.target > settings.index.current ) {
						
						start_x = $window.width();
						console.log('===== go left ====')
					} else {
						
						start_x = -$window.width();
						console.log('===== go right ====')
					}
					
					$el.velocity({ left: start_x }, 0 ).velocity({ left: 0 }, 1000, 'ease-in-out');
					
					
				} 
				
					
				
					
				
				
				
				
			}
			
			if($el.hasClass('js-Pjax-remove')){
				
				//console.log('section tier remove ' + $el.data('tier'));
				
				if(settings.tier.target != settings.tier.current) {
					var move_y = settings.tier.target > settings.tier.current ? -$window.height() : -$window.height();
						move_y = settings.tier.target == settings.tier.current ? 0 : move_y;
						
					$el.velocity({ 
						top: move_y
						} , {
						easing: 'ease-in-out',
						duration:1000,
	    				complete: function(elements) { $(elements).remove() } });
					
					
				} else {
					
					var end_x = -$window.width();
					
					if( settings.index.target > settings.index.current ) {
						
						end_x = -$window.width();
						
					} else {
						
						end_x = $window.width();
						
					}
					
					$el.velocity({ 
						left: end_x
						} , {
						easing: 'ease-in-out',
						duration:1000,
	    				complete: function(elements) { $(elements).remove() } });
					
				}
				
				
			}
		*/
			
		} else {
			//settings.tier.current = $el.data('tier');
		}
		
		
		$window.on('resize', function(){
			$('.screen-0').css('left', -$window.width());
			$('.screen-1').css('left', 0);
			$('.screen-2').css('left', $window.width());
			$('.screen-3').css('left', $window.width() * 2);
			$('.logos').css('left', 0);
			if(settings.animating == false) {
				//$('.logos').velocity({ left: $window.width() }, 0 );
				
			}
		});
		
		$window.trigger('resize');
		
};
 