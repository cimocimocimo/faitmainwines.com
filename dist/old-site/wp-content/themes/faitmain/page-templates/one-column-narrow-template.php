<?php
/*
Template Name: One Column Narrow
*/

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

	<div class="narrow">
		
		<?php get_template_part( 'content', 'page' ); ?>
			
	</div>

	<?php endwhile; // end of the loop. ?>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
