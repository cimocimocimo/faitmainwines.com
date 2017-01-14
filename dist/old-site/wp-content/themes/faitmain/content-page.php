<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package vin
 */
?>


<h1><?php the_title(); ?></h1>

<?php the_content(); ?>
<?php
	wp_link_pages( array(
		'before' => '<div class="page-links">' . __( 'Pages:', 'vin' ),
		'after'  => '</div>',
	) );
?>

<?php edit_post_link( __( 'Edit', 'vin' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>
