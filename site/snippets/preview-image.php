<?php

$items = false;

// get the open item on the first level
if($root = $pages->findOpen()) {

  // get visible children for the root item
  $items = $root->children()->visible()->sortby('title', 'asc');
}

// only show the menu if items are available
if($items && $items->count() > 0):
	$count = 0;
?>
<div class="preview">

	<?php foreach($items as $item): ?>
	<?php 
		
	
		$file = $item->postimage()->toFile();
		if($file):
		$file = $file->url();
		elseif($item->images()->count() > 0 ):
		$file = $item->images()->first()->url();
		endif;
		
	?>
	<div class="preview-<?php echo $count; ?> preview-image" style="background-image:url(<?php if( $file ) echo $file; ?>)"></div>
	 
	 <?php $count++; ?>
	 <?php endforeach; ?>
	
	
</div>
<?php endif; ?>