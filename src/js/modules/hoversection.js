var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	$window;
	

module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		
		$el.find('p').on('mouseover', function(){ 
			$el.find('p').addClass('out');
		
		
		}).on('mouseout', function(){
			$el.find('p').removeClass('out');
			
			
		}); 
		
};
 