<?php
/*
Template Name: VineSpring Product List
*/

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<script>
window.vinespringReady = function (config) {
    vinespring.api('getCurrentUserName', null, function (userName) {
        if (!userName) { //not logged in
// console.log('not logged in');

// $('#productlist').addClass('user-unverified');

        } else {
// console.log('logged in');

// $('#productlist').addClass('user-verified');

        }
    });
};
</script>

<h1><?php the_title(); ?></h1>

<div id="productlist" data-vsPlugin="productList">
	<noscript>
		JavaScript is required to view and purchase our products. Please <a href="http://www.enable-javascript.com/" target="_blank">enable this feature in your browser.</a>
	</noscript>
	<!--[if lte IE 7]>
		To ensure security and usability, this site requires at least Internet Explorer 8 to function properly. Please view our site in a <a href="http://www.google.com/chrome">different browser</a>, or upgrade to the latest version of <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>.
	<![endif]-->
</div>
<script type="text/html" id="productlist-custom">

    <div class="store-rows" data-bind="foreach: parentProducts">

        <div class="productlist-item">

            <!-- ko if: ListImageUrl -->
            <div class="product-image">
                    <a data-bind="attr: { href: '/wines/detail/?item=' + Tag}" href=""><img src="" alt="" data-bind="attr: { alt: Title, src: ListImageUrl }"></a>
            </div>
            <!-- /ko -->

            <div class="product-details">

                <div class="product-text">
                    <h2><a data-bind="attr: { href: '/wines/detail/?item=' + Tag }, text: Title" href=""></a></h2>
                    <p data-bind="html: Teaser"></p>
                </div>

                <div class="product-form">
                    <h3>Purchase</h3>
                    <div data-bind="template: 'vs2-productList-addToCart-default'"></div>
                </div>

            </div>

        </div>

    </div>
</script>



<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>