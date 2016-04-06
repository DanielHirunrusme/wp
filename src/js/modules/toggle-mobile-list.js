var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity");





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		$list = $el.parent();
		 
		$el.on('click', function(e){
			e.preventDefault();
			$('body').toggleClass('toggle-menu');
			$list.toggleClass('toggle-menu');
			
			setTimeout(function(){
				$list.toggleClass('hidden');
			}, 300);
			
			
			if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
			        $(window).scroll(function () {
			            $currentScrollPos = $('body').scrollTop();
			        })
			    
			            if ($('body').hasClass('toggle-menu')) {
			                
			                //localStorage.cachedScrollPos = $currentScrollPos;
			            } else {
			                $('body').css({
			                    'position': 'relative'
			                });
			                //$('body').scrollTop(0);
			            }
			  
			    }
			
		});
		
		
		
		
};
  