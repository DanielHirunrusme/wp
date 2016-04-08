var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" );





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window ),
		opacity = 1,
		disabled = false,
		area = $el.data('scroll-area'),
		bounds = area == 'all' ? $window.width() : $window.width()/2;
		
		$el.find('a').on('click', function(){
			//alert('clicked')
			
			//$el.closest('.project-list').addClass('active');
			$('.project-list').addClass('active');
			
			$(this).closest('ul').addClass('active');
			$(this).closest('ul').find('a.active').removeClass('active');
			$(this).addClass('active');
			
		}).on('mouseover', function(){
			$el.addClass('over');
			//opacity = $el.css('opacity');
			//$el.velocity('stop').velocity({ opacity: 1 }, 100);
		}).on('mouseout', function(){
			//$el.removeClass('over')
			//$el.velocity('stop').velocity({ opacity: opacity }, 100);
		});
		
		/*
		$window.on('mousemove', function(e){
			if(e.clientX < $window.width()){
				if($el.hasClass('disable-link')) disabled = true;
				$el.removeClass('disable-link');
			} else {
				if($el.hasClass('disable-link')) disabled = true;
				$el.addClass('disable-link');
			}
		})
		
		*/
		
		$(settings.scrollContainer).on('mousewheel scroll', function(e){
			
			if($el.height() > $window.height() && $window.width() > settings.breakpoints.m) 
			if(e.clientX < bounds){
				var pad  = $window.height() * .04;
				
				//scrolling down
				if(e.deltaY > 0) {
					var dest_top = $el.position().top + e.deltaY < pad ? $el.position().top + e.deltaY : pad;
					
					$el.css('top', dest_top)
					settings.scrollPos = dest_top;
					
				}else{
					//var dest_top = $el.position().top > $window.height() - $el.height() ? $el.position().top + e.deltaY : $window.height() - $el.height() - 1;
					var dest_top = $el.position().top + e.deltaY > $window.height() - $el.height() - pad ? $el.position().top + e.deltaY : $window.height() - $el.height() - pad;
					
					$el.css('top', dest_top)
					settings.scrollPos = dest_top;
					
				}
				
				//$('.scroll-pos').text(settings.scrollPos);
				
				
			}
		});
		
		$el.css('top', settings.scrollPos);
		
		//$('body').append('<p class="scroll-pos" style=" position:fixed; top:0; left:0; z-index:9999999; color:red">'+settings.scrollPos+'</p>');
		
		$window.on('resize', function(){
			if($el.height() < $window.height()  && $window.width() > settings.breakpoints.m ) {
				var pad  = $window.height() * .04;
				$el.css('top', pad)
			} else {
				//$el.css('top', 0)
			}
		})
		
};
  