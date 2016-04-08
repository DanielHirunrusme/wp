<?php 

$url_cat = 'all';

if(isset($_GET['category']))
{
	$url_cat = htmlspecialchars($_GET["category"]);
}
$count = 0;

$items = page()->children()->visible()->sortby('title', 'asc');

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

?>
	
  <?php foreach( $sorted['featured'] as $project): ?>
	  
      
	  <?php 
			
	 	 	$matches = $url_cat != 'all' ? '' : 'on';
			$item_categories = [];
	  		foreach($project->categories()->split() as $category): 
		  	$item_categories[] = $category;
		  	if( $category == $url_cat ):
				$matches = 'on';
			endif;
		  
	  		endforeach;
	  ?>
 
      <div class="work <?php echo $matches; ?> <?php if($url_cat != 'all' && in_array($url_cat, $item_categories)) echo ' on';  ?>" data-module-init="work" data-work-id="<?php echo $project->num(); ?>" id="work-<?php echo $project->num()-1; ?>" data-url="<?php echo $project->url(); ?>" data-title="<?php echo $project->title(); ?>">
		  
		  <?php
		  	 
		  	 $image_url = $site->url().'/assets/images/grey.gif';
		     $real_url = $project->images()->count();
			 if($project->images()->count() > 0 ):
			 $image_url = $project->images()->first()->url();
			 $real_url = $project->images()->first()->url();
		     endif;
			 
			 $dummy_url = $count > 0 ? $site->url().'/assets/images/grey.gif' : $image_url;
			 
		  ?>
		  
		  <div class="work-holder <?php if($count > 0): ?>lazy<?php endif; ?>" data-original="<?php echo $real_url; ?>" style="background-image:url(<?php echo $dummy_url; ?>)"></div>

      </div><!-- /work -->
	  
	  <?php $count++; ?>
 
  <?php endforeach ?>
  
  
  
  
  
  
  
  <?php foreach( $sorted['all'] as $project): ?>
	  
      
	  <?php 
			
	 	 	$matches = $url_cat != 'all' ? '' : 'on';
			$item_categories = [];
	  		foreach($project->categories()->split() as $category): 
		  	$item_categories[] = $category;
		  	if( $category == $url_cat ):
				$matches = 'on';
			endif;
		  
	  		endforeach;
	  ?>
 
      <div class="work <?php echo $matches; ?> <?php if($url_cat != 'all' && in_array($url_cat, $item_categories)) echo ' on';  ?>" data-module-init="work" data-work-id="<?php echo $project->num(); ?>" id="work-<?php echo $project->num()-1; ?>" data-url="<?php echo $project->url(); ?>" data-title="<?php echo $project->title(); ?>">
		  
		  <?php
		  	 
		  	 $image_url = $site->url().'/assets/images/grey.gif';
		     $real_url = $image_url;
			 if($project->images()->count() > 0 ):
			 $image_url = $project->images()->first()->url();
			 $real_url  = $project->images()->first()->url();
		     endif;
			 
			 $dummy_url = $count > 0 ? $site->url().'/assets/images/grey.gif' : $image_url;
			 
		  ?>
		  
		  <div class="work-holder <?php if($count > 0): ?>lazy<?php endif; ?>" data-original="<?php echo $real_url; ?>" style="background-image:url(<?php echo $dummy_url; ?>)"></div>

      </div><!-- /work -->
	  
	  <?php $count++; ?>
 
  <?php endforeach ?>
  
 

