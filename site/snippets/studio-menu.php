<?php

$items = false;

// get the open item on the first level
if($root = $pages->findOpen()) {

  // get visible children for the root item
  $items = $root->children()->visible();
}

// only show the menu if items are available
if($items && $items->count() > 0):

?>
<div class="col span_3 studio-menu left-menu" data-module-init="nav" data-scroll-area="all" data-left="21.25%">
	
	<div class="studio-site-description">
		<span data-module-init="hoversection"><?php echo $pages->find('studio')->callout()->kt() ?></span>
	</div>
	
	
	<nav class="selected-press block">
	  <h3>Selected Press</h3>
	  <ul>
	    <?php foreach($items as $item): ?>
	    <li>
			<a class="<?php ecco($item->isOpen(), 'active '); ?> <?php if(!$item->isOpen()) echo ' pjax'; ?>" href="<?php echo $item->url() ?>"><i class="open"></i><?php echo html($item->title()) ?></a>
			<?php if($item->isOpen()): ?>
				<?php if($item->text()->kt() != ''): ?>
			 
				 <div class="<?php ecco($item->isOpen(), 'open '); ?>" ><?php echo $item->text()->kt(); ?></div>
			 
				 <?php endif; ?>
			 <?php endif; ?>
		</li>
	    <?php endforeach ?>
	  </ul>
	</nav>


	<div class="clients block">
		<h3>Clients</h3>
	<!-- clients -->
	<?php
		
	echo $pages->find('studio')->clients()->kt();
		
	?>
	</div>
	
	<div class="awards block">
		<h3>Awards &amp; Achievements</h3>
	<!-- awards -->
	<?php
		
	echo $pages->find('studio')->awards()->kt();
		
	?>
	</div>
	
	<div class="studio-site-footer">
		<p><?php echo $site->footer()->kt() ?></p>
	</div>
	
</div>
<?php endif ?>