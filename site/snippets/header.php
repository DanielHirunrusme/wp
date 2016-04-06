<?php 

$url_cat = 'all';

if(isset($_GET['category']))
{
	$url_cat = htmlspecialchars($_GET["category"]);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<!-- META -->
	<meta charset="utf-8" />
	<meta name="description" content="<?php echo $site->description()->html() ?>">
	<meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no", minimal-ui />
	
	
	<!-- favicons -->
	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $site->url() ?>/assets/images/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $site->url() ?>/assets/images/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $site->url() ?>/assets/images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $site->url() ?>/assets/images/apple-touch-icon-76x76.png">
	<link rel="icon" type="image/png" href="<?php echo $site->url() ?>/assets/images/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo $site->url() ?>/assets/images/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="<?php echo $site->url() ?>/assets/images/favicon-16x16.png" sizes="16x16">
	<link rel="mask-icon" href="<?php echo $site->url() ?>/assets/images/safari-pinned-tab.svg" color="#24b3db">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-TileImage" content="<?php echo $site->url() ?>/assets/images/mstile-144x144.png">
	
	
	<title>With Projects, Inc | <?php echo $page->title()->html() ?></title>


	<!-- CSS -->
	<?php echo css('assets/main.min.css') ?>

</head>
<body class="<?php echo $page->intendedTemplate(); ?>" data-module-init="body">

<div id="background"></div>
<div class="waiting"></div>

	
	
<?php snippet('brand-menu') ?>	
<?php snippet('menu') ?>

<div class="main-wrapper" data-module-init="pjax-container mousewheel-section" data-page="<?php echo $page->intendedTemplate() ?>">
	
	
