<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package vin
 */
?>

<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php _e( 'Search Results', 'vin' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

		<div class="narrow">
			<p class="centered"><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'vin' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
		</div>

		<?php elseif ( is_search() ) : ?>

			<div class="narrow">
				<p class="centered"><?php _e( 'No results matched your search terms.', 'vin' ); ?></p>
			<?php get_search_form(); ?>

			</div>

		<?php else : ?>

			<div class="narrow">
				<p class="centered"><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'vin' ); ?></p>
				<?php get_search_form(); ?>
			</div>

		<?php endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
