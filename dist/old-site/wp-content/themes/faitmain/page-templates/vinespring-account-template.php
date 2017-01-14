<?php
/*
Template Name: VineSpring Account
*/

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>



<h1><?php the_title(); ?></h1>

<?php the_content(); ?>


<div id="vs-account" data-vsPlugin="account">
	<noscript>
		JavaScript is required to view and purchase our products. Please <a href="http://www.enable-javascript.com/" target="_blank">enable this feature in your browser.</a>
	</noscript>
	<!--[if lte IE 7]>
		To ensure security and usability, this site requires at least Internet Explorer 8 to function properly. Please view our site in a <a href="http://www.google.com/chrome">different browser</a>, or upgrade to the latest version of <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>.
	<![endif]-->
</div>



<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>