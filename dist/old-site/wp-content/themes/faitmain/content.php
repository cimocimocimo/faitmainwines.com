<?php
/**
 * @package vin
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<h2 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>

	<?php if ( is_search() ) : // Only display Excerpts for Search ?>
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->
	<?php else : ?>

	<?php if($post->post_excerpt){
		the_excerpt();

	} else {
		the_content('Read more...'); 
	}
	?>

		<?php //the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'vin' ) ); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'vin' ),
				'after'  => '</div>',
			) );
		?>

	<?php endif; ?>

		<?php edit_post_link( __( 'Edit', 'vin' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-## -->
