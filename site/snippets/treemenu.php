<?php
/*
<?php if(!isset($subpages)) $subpages = $site->projects() ?>
<ul class="<?php echo $subpages->first()->parent()->uri() ?>">
	<? $id = 0; ?>
  <?php foreach($subpages->visible() AS $p): ?>
  <li class="top-nav depth-<?php echo $p->depth()?> <?php echo ($p->isOpen()) ? 'selected' : ''?>">
    <a href="#" data-location="<?php $url = preg_replace('/[[:space:]]+/', '-', $p->title()); echo $url;?>"><?php echo $p->title() ?></a>
    <?php if($p->hasChildren()): ?>
	<ul class="sub-nav">
	  <?php foreach($p->children()->sortBy('Year', 'desc') AS $p): ?>
	<li class="work-id-<?php echo $id;  ?> depth-<?php echo $p->depth() ?> <?php echo ($p->isActive()) ? 'selected' : '' ?>">
	    <a<?php echo ($p->isActive()) ? ' class="selected"' : '' ?> href="<?php echo ($p->url());?>" data-location="<?php $url = preg_replace('/[[:space:]]+/', '-', $p->title()); echo $p->Year() .'-'.$url; ?>" data-work-id="<?php echo ($p->num()-1);?>"><?php echo $p->title(); ?></a>
	  </li>
	  <? $id++; ?>
	  <?php endforeach ?>
	</ul><!-- sub-nav-->
    <?php endif ?>
  </li>
  <?php endforeach ?>
</ul><!-- section -->
*/
?>

<?php


?>