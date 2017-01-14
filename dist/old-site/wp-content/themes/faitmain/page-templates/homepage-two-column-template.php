<?php
/*
Template Name: Homepage Two Column 
*/

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<div class="row">

	<div class="col-6 homepage-gallery">
		<ul class="bx-slider">
	<?php if (get_field('image_1'))
	{
		$path = get_field('image_1');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
	<?php if (get_field('image_2'))
	{
		$path = get_field('image_2');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
	<?php if (get_field('image_3'))
	{
		$path = get_field('image_3');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
	<?php if (get_field('image_4'))
	{
		$path = get_field('image_4');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
	<?php if (get_field('image_5'))
	{
		$path = get_field('image_5');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
	<?php if (get_field('image_6'))
	{
		$path = get_field('image_6');
		echo '<li><img src="'.$path.'" alt="" /></li>';
	}?>
		</ul>
	</div>

	<div class="col-6 last">

	<?php the_content(); ?>

	</div>

</div>


<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>