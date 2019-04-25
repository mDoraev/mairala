<?php 
$head = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/head.html');
$header = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/header.html');
$slider = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/slider.html');
$about =  file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/about.html');
$best = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/best.html');
$services = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/services.html');
$skills = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/skills.html');
$recent = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/recent.html');
$recent = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/recent.html');
$imageBlock = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/image-block.html');
$imageBlockMes = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/image-block-mes.html');
$imageBlockBtn = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/image-block-btn.html');
$members = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/members.html');
$clients = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/clients.html');
$captBlog = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/capt-blog.html');
$blog = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/blog.html');
$blogLink = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/blog-link.html');
$contact = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/contact.html');
$footer = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/footer.html');

ob_start();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mairala</title>
		<?php echo($head) ?>


</head>
<body>
	<div class="wrapper">
		<?php echo($header) ?>
		<?php echo($slider) ?>
		<?php echo($about) ?>
		<?php echo($best) ?>
		<?php echo($services) ?>
		<?php echo($skills) ?>
		<?php echo($recent) ?>
		<?php echo($imageBlock) ?>
		<?php echo($imageBlockMes) ?>
		<?php echo($imageBlock) ?>
		<?php echo($imageBlockBtn) ?>
		<?php echo($members) ?>
		<?php echo($clients) ?>
		<?php echo($captBlog) ?>
		<div class="home-blog-wrap">
		<?php echo($blog) ?>
		<?php echo($blog) ?>
		<?php echo($blog) ?>
		</div>
		<?php echo($blogLink) ?>
		<?php echo($contact) ?>
		<?php echo($footer) ?>

	</div>



</body>
</html>

<?php 
file_put_contents($_SERVER['DOCUMENT_ROOT'].'/index.html', ob_get_contents());
 ?>