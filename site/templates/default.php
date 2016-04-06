<?php snippet('header') ?>

  <main class="main" data-text-id="<?php echo $page->hash(); ?>">
    <div class="text">
      <h1><span class="date"><?php echo $page->Year() ?></span><?php echo $page->title()->html() ?></h1>
      <?php echo $page->text()->kirbytext() ?>
  	</div><!-- text -->
  </main>

<?php snippet('footer') ?>