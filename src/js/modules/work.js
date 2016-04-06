var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity");





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		if($el.index() == 2 && !settings.unique && $('body').hasClass('project')) {
			$('body').addClass('animating');
			
			console.log('scroll down')
			 
			//$(".inner-wrapper").stop().animate({ scrollTop: $window.height() }, 300 );
			//$('body, html').animate({ scrollTop: $window.height() }, 500);
			
			setTimeout(function(){
				$('body').removeClass('animating');
			}, 500);
		}
		
		console.log('work init')
		
		if($el.hasClass('vimeo')){
			
			//disable sound
			
			if($el.data('muted') == "0") {
				
				$('iframe.vimeoplayer').each(function(){
				    $f(this).addEvent('ready', ready);
				});
				
				function ready(player_id){
				    //$f(player_id).addEvent('play', play);
				    //$f(player_id).api('play');
					console.log($f(player_id))
					$f(player_id).api('setVolume', 0);
				    //alert("Ready!!!");
				}
				function play(){
				    //alert("Playing!!!");
				}
					
					
				/*
			    var iframe = $('#vimeoplayer')[0];
			     	
				  $(iframe).ready(function(){
				  	 var player = $f(iframe);
  			       // When the player is ready, add listeners for pause, finish, and playProgress
	  			       player.addEvent('ready', function() {
	  					   player.api('setVolume', 0);
	          			   //alert(player.api.getColor())
	  			           player.addEvent('pause', onPause);
	  			           player.addEvent('finish', onFinish);
	  			           player.addEvent('playProgress', onPlayProgress);
	  			       });
				  })
				  
 			       function onPause() {
	         
 			       }

 			       function onFinish() {
	         
 			       }

 			       function onPlayProgress(data) {
	          
 			       }

			      */
			}
			
			//fullscreen
			if($el.data('fullscreen') == "1") {
				var container = $('.embed-container');
				var video = $('.vimeo');
				var ratio = 16/9; //this is why the 56.25% padding hack exists
				
				
				
				function resizer() {
				
				    var width = $window.width()
				    var height = $window.height();
				
				
	    			var video_width = width;
					var video_height = height + video_width*5625;
				
					var video_left = -video_width/2 + $window.width()/2
					var video_top = -video_height/2 + $window.height()/2;
			
				    video.css('width', video_width + 'px').css('height', video_height + 'px').css('margin-top', video_top)
				}

				window.addEventListener('resize', resizer, false);
				resizer();
			}
			
			
		}
		  
		$window.on('resize', function(e) {
			
			if($window.width() > settings.breakpoints.m){
				$el.css( 'height', $window.height() );
				$el.find('.work-holder').css( 'height', $window.height() );
			} else {
				if(!$('body').hasClass('project')){
					$el.css( 'height', $window.height());
					$el.find('.work-holder').css( 'height', $window.height());
				}else {
					if($window.width() > $window.height()) {
						$el.css( 'height', $window.height() );
						$el.find('.work-holder').css( 'height', $window.height() );
					} else {
						
						$el.css( 'height', $window.height()/2 );
						$el.find('.work-holder').css( 'height', $window.height()/2 );
					}
					
				}
				
			}
			
			
		});
		
		 
		var $targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
		 
		function setScrollTarg() {
			if($window.width() < settings.breakpoints.m) {
				$targ = $('body');
	  		  $el.find(".lazy").lazyload({
	  		       effect : "fadeIn",
	  			   threshold : $window.height()
	  		   });
			} else {
				$targ = $('.main-wrapper .js-Pjax-add').length > 0 ? $('.main-wrapper .js-Pjax-add') : $( '.inner-wrapper' );
	  		  $el.find(".lazy").lazyload({
				  container: $targ,
	  		       effect : "fadeIn",
	  			   threshold : $window.height()
	  		   });
			}
		}
		
		$window.on('resize', function(){
			setScrollTarg();
		})
		
		setScrollTarg();
		
		  
		
		//$window.trigger('resize');
		
};
  