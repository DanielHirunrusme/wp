<?php snippet('header') ?>

<article data-order="<?php echo $page->parent()->num(); ?>" data-work-num="<?php echo $page->num(); ?>" data-module-init="article" class="inner-wrapper">

<?php snippet('projects-menu') ?>

	<div class="project-information slide-in span_3 desktop-disable-scroll-overlay"  <?php if($page->images()->count() > 1):?>  data-module-init="scroll-overlay" data-from-opacity="1" data-mobile-from-opacity="1"  data-to-opacity="0" <?php endif; ?>>
		<div class="inner">
			<h1 class="fadein"><?php echo $page->title()?></h1>
			
			
			<?php if(count( $page->categories()->split()) > 0): ?>
			<!-- categories -->
			<nav class="categories">
				<ul>
				  <?php $count = 0; ?>
				  <?php foreach($page->categories()->split() as $category): ?>
				  <li><?php echo ucwords(str_replace("_", " ", $category)); ?></li>
				  <?php if($count < count( $page->categories()->split() ) - 1 ): ?><li>/</li><?php endif; ?>
				  <?php $count++; ?>
				  <?php endforeach ?>
				</ul>
			</nav>
			<?php endif; ?>
			
			<?php if( $page->text() != ''): ?>
			<p><?php echo $page->text()?></p>
			<?php endif; ?>
		</div>
		
		
		
	</div>
	
	<a data-module-init="top-link" class="top off" href="#top" title="top"><i class="arrow"></i></a>
	
	<div class="mobile-black-overlay" data-module-init="scroll-overlay" data-mobile-from-opacity=".3" data-from-opacity=".3" data-to-opacity="0"></div>
	
	<main id="content" class="main row work-holder fade-in">
	 <?php if($page->images()->count() > 1):?>	
	 
 	<?php endif; ?>
	  <?php
			  function videoType($url) {
			      if (strpos($url, 'youtube') > 0) {
			          return 'youtube';
			      } elseif (strpos($url, 'vimeo') > 0) {
			          return 'vimeo';
			      } else {
			          return 'unknown';
			      }
			  }
	  
	  		if($page->video_background() != ''):
			
			if(videoType($page->video_background()) != 'vimeo') {
				preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $page->video_background(), $matches);
				
				?>
				
		  	  <div class="work shown video" data-work-id="<?php echo ($page->num()); ?>" data-video-bg="<?php echo $matches[0]; ?>" data-module-init="video-background">
		  		  <div class="preview-image" style="background-image:url(<?php echo $page->images()->sortBy('sort', 'asc')->first()->url() ?>)"></div>
		  	  </div>
				
				
	  <?php
			} else {
		
			$id = (int) substr(parse_url( $page->video_background() , PHP_URL_PATH), 1);
			
			//$background = $page->video_background();  
			$fullscreen = $page->video_fullscreen()->bool() ? 1 : 0;
			$controls   = $page->video_controls()->bool() ? 1 : 0;
			
			$sound      = $page->video_sound()->bool() ? 1 : 0;
			$autoplay   = $page->video_autoplay()->bool() ? 1 : 0;
			$loop       = $page->video_loop()->bool() ? 1 : 0;
		?>	  
			<div class="embed-container <?php if($fullscreen):?> mobile-fullscreen-video <?php endif; ?>">
				
			  <iframe id="vimeoplayer<?php echo $id?>" name="vimeoplayer<?php echo $id?>" data-module-init="work" data-fullscreen="<?php echo $fullscreen; ?>" data-muted="<?php echo $sound; ?>" class="work shown video vimeo vimeoplayer" src="http://player.vimeo.com/video/<?php echo $id; ?>?&amp;color=fff&amp;background=<?php echo $fullscreen; ?>&amp;autoplay=<?php echo $autoplay; ?>&amp;quality=1080p&amp;loop=<?php echo $loop; ?>&amp;byline=0&amp;title=0&amp;controls=<?php echo $controls; ?>" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> 
			</div>
			
	 <?php
				
			}
			
	  
	  ?>
	  
	  
		  
	  <?php endif; ?>
		

  	  <?php 
		/** 
		*   hide images if have video background
		*/
	  
	  $hide_images = $page->hide_images()->bool() ? 1 : 0;
	  
	  if(!$hide_images)
	  if($page->images()->count() > 0):
	  foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
		  
		  <div class="work shown" data-module-init="work" data-work-id="<?php echo ($page->num()-1); ?>">
		  	<div class="work-holder" style="background-image:url(<?php echo $image->url(); ?>)">
			</div>
		  </div>
  	  <?php 
	  
  	  endforeach;
  	  endif;
	  ?>
	  
	  <?php //snippet('preview-image') ?>
	</main>
	




</article>

<?php snippet('footer') ?>