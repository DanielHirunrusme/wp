<!-- Brand Column -->

<div class="site-description pjax-container fadein">
	
		<?php if($page->uid() == 'home'):?>			
			
			<span data-module-init="hoversection"><?php echo $site->description() ?></span>
		
		<?php elseif($page->intendedTemplate() == 'post'): ?>
			
			<span data-module-init="hoversection"><?php echo $pages->find('studio')->callout()->kt() ?></span>
			
		<?php else: ?>
			
			<span data-module-init="hoversection"><?php echo $page->callout()->kt() ?></span>
		
		<?php endif; ?>

</div>

<div class="col brand-menu">
	<div class="brand-menu-holder">
		
		
		
		<h1 class="logo fadein"><a class="logo-link pjax" href="<?php echo $site->url(); ?>">W&#47;<span>&mdash;&mdash;</span>Projects</a></h1>
		
		
		
	</div>
</div>


<div class="btm-site-footer">

	<div class="fadein"><?php echo $site->footer()->kt() ?></div>

</div>