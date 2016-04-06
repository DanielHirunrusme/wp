var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity");





module.exports = function( el ) {
		var $el = $( el );
		$window = $( window );
		
		
		
		var video_bg = $el.data('video-bg'),
			player_count = $el.data('work-id'),
			$image_bg = $el.parent().find('.preview-image');
		 
		 
			
		console.log('init video background ' + player_count)
		
		/*	
		try {
			$el.tubular({
				videoId: video_bg,
				repeat:true,
				mute:true,
				start: 0,
				playercount: player_count,
	            videoFinished: function (state, player) {
	                 player.seekTo(0); // restart
	            }
			});
	    } catch(e) {
	    }*/
			
		var player = $el.YTPlayer({
		    fitToBackground: true,
		    videoId: video_bg,
		    playerVars: {
		      modestbranding: 0,
		      autoplay: 0,
		      controls: 0,
		      showinfo: 0,
		      branding: 0,
			  imagePreview: $image_bg,
		      rel: 0,
		      autohide: 0,
		      start: 59,
			  origin: window.location.origin
		    }
		});
		
		
		//console.log(player
		
		
};
  