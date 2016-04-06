

<!-- Main Menu -->
<div class="col span_3 offset_4 main-menu" data-module-init="scroll-overlay" data-to-opacity="1" data-from-opacity="1" data-page="<?php echo $page->intendedTemplate() ?>">
	<?php

	// main menu items
	$items = $pages->visible();

	// only show the menu if items are available
	if($items->count()):

	?>
	<nav>
	  <ul>
		<li><a class="pjax mobile logo-link" href="<?php echo $site->url(); ?>">W&#47;<span>&mdash;&mdash;</span></a>
	    <?php foreach($items as $item): ?>
		<?php
			
		$video_bg = $item->video_background() != '' ? $item->video_background() : '';
		preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $video_bg, $matches);
		
		$image_bg = $item->images()->first() != '' ? $item->images()->first() : '';
		
		$allow_parent = true;
		
		if( ($page->intendedTemplate() == 'studio' || $page->intendedTemplate() == 'post') && $item->title()->html() == 'Studio') $allow_parent = false;
		
		
		$allow_click = false;
		
		if(!$item->isOpen()) {
			$allow_click = true;
		} else {
			if($page->parent()->num() == 1 || $page->parent()->num() == 2) $allow_click = true;
		}	
		
		?>
	    <li><a data-module-init="preview-nav" <?php if($image_bg != ''): ?> data-image-bg="<?php echo $image_bg; ?>" <?php endif; ?> <?php if($video_bg != ''): ?> data-video-bg="<?php echo $matches[0]; ?>" <?php endif; ?> class="<?php e($item->isOpen(), 'active') ?> <?php if($allow_click): ?> pjax <?php endif; ?>" href="<?php echo $item->url() ?>"><?php echo $item->title()->html() ?></a></li>
	    <?php endforeach ?>
	  </ul>
	</nav>
	<?php endif ?>
</div>

