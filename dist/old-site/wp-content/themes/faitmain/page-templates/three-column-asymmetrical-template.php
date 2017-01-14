<?php
/*
Template Name: Three Column Asymmetrical
*/

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

	<h1><?php the_title(); ?></h1>

	<div class="row">
		
		<div class="col-6">
			<?php the_field("first_column_content"); ?>
		</div>

		<div class="col-3">
			<?php the_field("second_column_content"); ?>
		</div>

		<div class="col-3 last">
			<?php the_field("third_column_content"); ?>
		</div>

	</div>

	<?php endwhile; // end of the loop. ?>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
