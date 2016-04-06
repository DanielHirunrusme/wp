<?php snippet('header') ?>
<article data-order="<?php echo $page->parent()->num(); ?>" data-module-init="article" class="studio inner-wrapper ">
  <main class="main row inner-holder content-wrapper">
	  
	<?php snippet('studio-menu') ?>
	
	<div class="col span_6 post-content fade-in" data-module-init="hoversection">
    	<?php echo $page->text()->kt(); ?>
	</div>

  </main>
  
  
  
</article>
<?php snippet('footer') ?>