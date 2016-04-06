var settings = require( "modules/settings" ),
	controller = require( "modules/section-controller" ),
	velocity = require("velocity-animate/velocity");



function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
    }

function changeUrlParam(param, value) {
        var currentURL = window.location.href+'&';
        var change = new RegExp('('+param+')=(.*)&', 'g');
        var newURL = currentURL.replace(change, '$1='+value+'&');

        if (getURLParameter(param) !== null){
            try {
                window.history.replaceState('', '', newURL.slice(0, - 1) );
            } catch (e) {
                console.log(e);
            }
        } else {
            var currURL = window.location.href;
            if (currURL.indexOf("?") !== -1){
                window.history.replaceState('', '', currentURL.slice(0, - 1) + '&' + param + '=' + value);
            } else {
                window.history.replaceState('', '', currentURL.slice(0, - 1) + '?' + param + '=' + value);
            }
        }
    }
		

module.exports = function( el ) {
		var $el = $( el );
		$window = $( window ),
		sorted = [],
		unique = true,
		hrefs = [];
		
		var index = 0;
		
		
		
		//console.log( getURLParameter('category') );
		
		
		
		$project_menu = $el.closest('.projects-menu');
		
		
		
		$el.find('a').each(function(){
			var category = String( $(this).data('category') );
		
			sorted[index] = [];
			
			for(var i=0; i< $project_menu.find('li').length; i++){
				//console.log( $('.projects-menu li').eq(i).find('a').data('categories') )
				
				
				
				var str = $project_menu.find('li').eq(i).find('a').data('categories');
				if( str != undefined && str.indexOf(category) >= 0 ) {
					sorted[index].push( 
						{	'id': i,
							'name': $project_menu.find('li').eq(i).find('a').text() }
					);
				}
				
				
			}
			
			
			index++;
			
		}) 
		
		$('.project-list a').each(function(){
			hrefs.push($(this).attr('href'));
			//console.log($(this).text())
		});
		
		
		if(getURLParameter('category') != null ){
			
			var category = getURLParameter('category');
			
			if(category != 'all') {			
				
				//setCategory($('a[data-category="'+category+'"]').parent().index());
				
			}
			
		}
		
		//alert(getURLParameter('category'));
		
		function setCategory(num){
			
			var _index = num;
			
			$('.categories .on').removeClass('on');
			$('.categories li').eq(_index).find('a').addClass('on');
			$('.categories').addClass('filtered');
			$('.project-list li.on').removeClass('on');
			
			var dest_top = $window.width() > settings.breakpoints.m ? $window.height() * .04 : 0;
			
			$('.projects-menu').stop().velocity({
			    top: dest_top
			}, {
			    duration: speed,
			    easing: "ease-in-out",
				complete:function(){  }
			});
			
			$('.work').removeClass('on');
			
			for(var i=0; i<sorted[_index].length; i++){
				var id = sorted[_index][i]['id'];	
		
				$('.project-list li').eq(id).addClass('filtered on').stop().slideDown();
				
				var index = $('.project-list li').eq(id).index();
				
				if($('body').hasClass('projects')){
					$('.work').eq(id).addClass('on').show().velocity({
					    height: $window.height()
					}, {
					    duration: 400,
					    easing: "ease-in-out"
					});
				}
				
			
			}
			
			$('.project-list a').each(function(){
				
				var category = $('.categories a.on').data('category') != undefined ? $('.categories a.on').data('category') : getURLParameter('category');
				
				
				
				var update_href = hrefs[$(this).parent().index()];
					update_href = update_href.split('?')[0];
					update_href = update_href + '?category=' + category;
					
					
					var this_href = $(this).attr('href').split('?')[0];
						this_href = this_href + '?category=' + category;
					
				    $(this).attr('href', this_href);
				
			});
			
			$('.project-list li').each(function(){
				if(!$(this).hasClass('on')) {
					
					$(this).stop().slideUp();
				}
			});
			
			
			if(!$('body').hasClass('project')) {
				console.log('change height')
				var speed = unique ? 0 : 400;
				
				$('.inner-wrapper').stop().animate({scrollTop:0}, 400)
				$('.work').each(function(){
					if(!$(this).hasClass('on')){
					
						$(this).show().velocity({
						    height: 0
						}, {
						    duration: speed,
						    easing: "ease-in-out",
							complete:function(){ $(this).hide(); $window.trigger('mousewheel') }
						});
					
					}
				});
			}
			
		}
		
		
		
		$el.find('a').on('mouseover', function(e){
			var _index = $(this).parent().index();
			
			console.log(sorted[_index]);
			for(var i=0; i<sorted[_index].length; i++){
				var id = sorted[_index][i]['id'];
				
				$project_menu.find('li').eq(id).addClass('over');
				
			}
			
			
		}).on('mouseout', function(e){
			var _index = $(this).parent().index();
				console.log('out')
			for(var i=0; i<sorted[_index]; i++){
				
			}
			
			$project_menu.find('li.over').removeClass('over');
			
		}).on('click', function(e){
			e.preventDefault();
			
			if(!$(this).hasClass('on')) {
				
				if($(this).data('category') != 'all') {

					setCategory( $(this).parent().index() )
				
				} else {
					
					$('.project-list a').each(function(){
				
						var category = 'all'
				
						var update_href = hrefs[$(this).parent().index()];
							update_href = update_href.split('?')[0];
							update_href = update_href + '?category=' + category;
						    $(this).attr('href', update_href);
				
					});
					
					$('.categories').removeClass('filtered');
					$('.categories .on').removeClass('on');
					$(this).addClass('on');
					$project_menu.find('li').removeClass('filtered on').stop().slideDown();
				
					if(!$('body').hasClass('project')) {
						
						$('.work').addClass('on').show().velocity({ 
						    height: $window.height()
						}, {
						    duration: 400,
						    easing: "ease-in-out"
						});
					}
				}
				
				changeUrlParam( 'category', $(this).data('category') );
				
			} else {
				// if category already selected then just scroll to top
				$('.inner-wrapper').stop().animate({scrollTop:0}, 400)
			}
			
			
			

		});
		 
		
		unique = false;
		
};
  