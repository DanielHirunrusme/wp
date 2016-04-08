<?php

$url_cat = 'all';

if(isset($_GET['category']))
{
	$url_cat = htmlspecialchars($_GET["category"]);
}




$items = false;

// get the open item on the first level
if($root = $pages->findOpen()) {

  // get visible children for the root item
  $items = $root->children()->visible()->sortby('title', 'asc');
}

// only show the menu if items are available
if($items && $items->count() > 0):

$sorted = [];
$sorted['featured'] = [];
$sorted['all'] = [];

foreach($items as $sort):
	
	if($sort->featured()->bool()):
		array_push( $sorted['featured'], $sort );
	else:
		array_push( $sorted['all'], $sort );
	endif;
	
endforeach;

$menu_list_title = $page->template() != 'projects' ? $page->parent()->title() : $page->title();

?>
<div class="secondary-menu projects-menu left-menu hidden" data-module-init="nav" data-left="21.25%">
	<a href="#" class="toggle-mobile-list" data-module-init="toggle-mobile-list"><i class="open"></i><i class="close"></i><?php echo $menu_list_title; ?> List</a>
	<nav class="project-list <?php foreach($items as $item): if($item->isOpen()): ?> active <?php endif; endforeach; ?>">
	  
	  <ul class="featured">
  	    <?php foreach($sorted['featured'] as $item): ?>
				
			
  		<?php $item_categories = []; ?>
  			<?php foreach($item->categories()->split() as $category): ?>
  				<?php $item_categories[] = $category; ?>	
  			<?php endforeach; ?>
  	    <li class="<?php if($url_cat == 'all' || in_array($url_cat, $item_categories)) echo 'on';  ?>" data-num="<?php echo $item->num(); ?>" class="featured" <?php if($url_cat != 'all' && !in_array($url_cat, $item_categories)) echo 'style="display:none;"';  ?>><a  data-categories="<?php foreach($item_categories as $category): echo $category.','; endforeach; ?>" data-preview="<?php if($item->images()->count() > 0 ) echo $item->images()->sortBy('sort', 'asc')->first()->url(); ?>" class="<?php ecco($item->isOpen(), 'active') ?> <?php if(!$item->isOpen()): ?> pjax <?php endif; ?>" href="<?php echo $item->url().'?category='.$url_cat ?>"><?php echo html($item->title()) ?></a></li>
  	    <?php endforeach ?>
	  </ul>
	  <ul>
	    <?php foreach($sorted['all'] as $item): ?>
		<?php $item_categories = []; ?>
			<?php foreach($item->categories()->split() as $category): ?>
				<?php $item_categories[] = $category; ?>	
			<?php endforeach; ?>
	    <li class="<?php if($url_cat == 'all' || in_array($url_cat, $item_categories)) echo 'on';  ?>" data-num="<?php echo $item->num(); ?>" <?php if($url_cat != 'all' && !in_array($url_cat, $item_categories)) echo 'style="display:none;"';  ?>><a  data-categories="<?php foreach($item_categories as $category): echo $category.','; endforeach; ?>" data-preview="<?php if($item->images()->count() > 0 ) echo $item->images()->sortBy('sort', 'asc')->first()->url(); ?>" class="<?php ecco($item->isOpen(), 'active') ?> <?php if(!$item->isOpen()): ?> pjax <?php endif; ?>" href="<?php echo $item->url().'?category='.$url_cat ?>"><?php echo html($item->title()) ?></a></li>
	    <?php endforeach ?>
	  </ul>
	</nav>




	<!-- categories -->
	<nav class="categories" data-module-init="nav-category-filter">
		<ul>
			<li><a href="#" class="<?php if($url_cat == '' || $url_cat == 'all'):?>on<?php endif; ?>" data-category="all">All</a></li>
		<?php
	
		$categories = [];
	
		?>
		<?php foreach($items as $item): ?>

		  <?php foreach($item->categories()->split() as $category): ?>
 
		 <?php	
			 if (!in_array($category, $categories))
			 {
			     $categories[] = $category; 
			 }
			 
			 sort($categories);
		 ?>
 
		  <?php endforeach ?>

		<?php endforeach ?>

		<?php foreach($categories as $category):?>
			<?php
				$category_name = ucwords(str_replace("_", " ", $category));
			?>
			  <li><a href="#" class="<?php if($url_cat == $category): ?>on<?php endif; ?>" data-category="<?php echo $category; ?>"><?php echo $category_name; ?></a></li>
		<?php endforeach; ?>
		</ul>
	</nav>

</div>
<?php endif ?>