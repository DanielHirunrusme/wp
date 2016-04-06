<?php snippet('header') ?>
<article data-order="0" data-module-init="article" class="home inner-wrapper">
  <main id="content" class="inner-holder">
<!--
	  <div class="preview">
		  <?php foreach($pages->visible() as $item): ?>
			 <div class="preview-bg">
			 <?php if( $item->images()->count() > 0 ): ?>
				 <div class="preview-image" style="background-image:url(<?php echo $item->images()->sortBy('sort', 'asc')->first()->url() ?>)"></div>
			 <?php endif; ?>
			 
			 <?php if($item->video_background() !=''):?>
				  <?php preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $item->video_background(), $matches); ?>
				  <div class="preview-video" data-work-id="<?php echo $item->num(); ?>" data-video-bg="<?php echo $matches[0]; ?>" data-module-init="video-background"></div>
			 <?php endif; ?> 
			 </div>
		     <?php endforeach ?>
		 	
	  </div>
-->
  </main>
</article>
<?php snippet('footer') ?>