<?php
/*
Template Name: VineSpring Product Detail
*/

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>


<div id="productdetail" data-vsPlugin="productDetail">
	<noscript>
		JavaScript is required to view and purchase our products. Please <a href="http://www.enable-javascript.com/" target="_blank">enable this feature in your browser.</a>
	</noscript>
	<!--[if lte IE 7]>
		To ensure security and usability, this site requires at least Internet Explorer 8 to function properly. Please view our site in a <a href="http://www.google.com/chrome">different browser</a>, or upgrade to the latest version of <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>.
	<![endif]-->
</div>
<script type="text/html" id="productdetail-custom">
	<div data-bind="with: product">


        <h1 data-bind="text: Title"></h1>

        <div class="productdetail-item">

            <!-- ko if: DetailImageUrl -->
            <div class="product-image">
                <img src="" alt="" data-bind="attr: { alt: Title, src: ListImageUrl }">
            </div>
            <!-- /ko -->

            <div class="product-details">

                <div class="product-text" data-bind="html: Description"></div>

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