<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package vin
 */

get_header(); ?>



<?php if ( have_posts() ) : ?>

<div class="narrow">

<?php
$title = get_the_title( get_option('page_for_posts', true) );

echo "<h1>".$title."</h1>";

?>

<!-- <h1><?php the_title(); ?></h1> -->

	<?php /* Start the Loop */ ?>
	<?php while ( have_posts() ) : the_post(); ?>

		<?php
			/* Include the Post-Format-specific template for the content.
			 * If you want to overload this in a child theme then include a file
			 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
			 */
			get_template_part( 'content', get_post_format() );
		?>

	<?php endwhile; ?>

	<?php //vin_content_nav( 'nav-below' ); ?>

<?php else : ?>

	<?php get_template_part( 'no-results', 'index' ); ?>

<?php endif; ?>

</div>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>;