<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package vin
 */

get_header(); ?>




<section class="error-404 not-found narrow">
	<header class="page-header">
		<h1 class="page-title"><?php _e( 'Page not found', 'vin' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<p class="centered"><?php _e( 'No results were found at this location.', 'vin' ); ?></p>

		<div class="widget">
		<?php get_search_form(); ?>
		</div>

		<?php the_widget( 'WP_Widget_Recent_Posts' ); ?>

	</div><!-- .page-content -->
</section><!-- .error-404 -->



<?php get_footer(); ?>