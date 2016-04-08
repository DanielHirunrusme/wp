<?php snippet('header') ?>

<article data-order="<?php echo $page->num(); ?>" data-work-num="<?php echo $page->num(); ?>" data-module-init="article" class="projects-wrapper inner-wrapper">

<?php snippet('projects-menu') ?>

	<div class="project-information span_3" data-module-init="scroll-overlay" data-mobile-from-opacity="1" data-from-opacity="0" data-to-opacity="1">
		<div class="inner">
			<a class="pjax" data-work-num="0" href="#"><h1></h1></a>
		</div>
	</div>
	
	<a href="#" class="bottom-arrow" title="scroll down" data-module-init="scroll-overlay next-link" data-mobile-from-opacity="0" data-from-opacity="1" data-to-opacity="0"><i class="arrow-down"></i></a>

  <main class="main row work-holder projects-holder fade-in">
	<div class="overlay intro" data-module-init="scroll-overlay" data-mobile-from-opacity=".2" data-from-opacity="1" data-to-opacity=".2"></div>
	
	
	
    <?php snippet('projects-list'); ?>

  </main>

<?php //snippet('preview-image') ?>

</article><!-- inner-wrapper -->

<?php snippet('footer') ?>