var settings = require( "modules/settings" ),
	$window,
	page = '',
	resizeTimer;



function setPage(p){ settings.page.current = p;  }
function getPage() { return settings.page.current; }


module.loadPage = function(page){
	console.log(page);
}

function loadPage(page) {
	console.log(page);
}

module.exports = function( el ) {
	var $el = $( el );
		$window = $( window );
		
		console.log('                                                 ');
		console.log('=================================================');
		console.log('page-controller.js initialized');
		console.log('=================================================');
		console.log('                                                 ');
		 
		
		//setPage( $el.data('section') );
		console.log('%c CURRENT PAGE: ' + getPage(), 'background: #222; color: #bada55');
		
		
		setPage( $el.data('section') );
		
		$('section[data-section="'+getPage()+'"]').addClass('visible'); 
		
		//console.log('page ' + getPage())
		
		console.log($('section[data-section="'+getPage()+'"]').show())
		
		function loadPage(page) {
			console.log(page);
		}
		
		
		
		
		
		
		$window.on('resize', function(){
			$('a, p, section, div, span, ul').addClass('notransition');
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function(){
				$('a, p, section, div, span, ul').removeClass('notransition');
			}, 200)
		});
};
 