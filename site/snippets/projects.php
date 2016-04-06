
  <?php foreach(page()->children()->visible() as $project): ?>
	  
     <?php  ?>
	  
      <div class="work selected" id="work-<?php echo $project->parent()->num()-1; ?>" data-title="<?php echo $project->title(); ?>"" data-work-id="<?php echo $project->parent()->num()-1; ?>" <?php if($project->video_background() != null){ ?> data-video-bg="<?php echo $project->video_background(); ?>" <?php } ?> " style="background-image:url(<?php echo $project->images()->first()->url(); ?>)">
		  <?php
		  /*
        <div class="grid-item featured">
         h2><span class="date"><?php echo $project->Year() ?></span><?php echo $project->title()->html() ?></h2>
          <p class="work-description"><?php echo $project->text() ?></p>
          <a href="#"><img class="<?php echo $project->image()->orientation(); ?>" src="<?php echo $project->images()->sortBy('sort', 'asc')->first()->url(); ?>"  alt="<?php echo $page->title()->html() ?>"></a>
          <p><?php echo $project->images()->sortBy('sort', 'asc')->first()->Caption(); ?></p>
        </div><!-- /grid-item -->
		  */
		  ?>
		<?php
		/*
        <div class="grid-container" >
          <?php foreach($project->images()->sortBy('sort', 'asc')->offset(1) as $image): ?>
            <div class="grid-item">
              <a href="#"><img class="<?php echo $image->orientation(); ?>" src="<?php echo $image->url() ?>" data-src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>"></a>
              <p><?php echo $project->images()->first()->Caption(); ?></p>
          </div><!-- /grid-item -->
          <?php endforeach ?>
        </div><!-- /grid-container -->
		*/ ?>
      </div><!-- /work -->

 
  <?php endforeach ?>
  
 

