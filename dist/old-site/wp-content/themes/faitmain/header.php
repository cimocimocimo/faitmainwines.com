<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8" />
<title><?php wp_title( '|', true, 'right' ); ?></title>

<!-- <meta name="description" content="" /> -->
<meta name="author" content="Vin, vinagency.com" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<?php wp_head(); ?>

<link rel="shortcut icon" href="<? echo get_template_directory_uri(); ?>/images/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic" />

<!--[if lt IE 9]>
<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>
<?php
$body_class = 'theme-align-center theme-lightness-light';
?>
<body id="top" <?php body_class( $body_class ); ?>>
    <div id="fb-root"></div>

    <div id="container" class="container">

        <div id="vs-accountlinks" data-bind="template: 'vs2-accountLinks-' + mode()">
            <div id="vs2-accountLinks">
                <span id="vs2-accountLinks-user">
                    <a data-bind="attr: { href: currentUser() ? '/account#index' : '/account#login' }" href="/account#login">
                        <i class="icon-user"></i>
                        <span id="vs2-accountLinks-user-label"></span>
                    </a>
                </span>
                <span id="vs2-accountLinks-cart">
                    <a href="/cart">
                        <i class="icon-basket"></i>
                        <span id="vs2-accountLinks-cart-label">Cart</span> <span id="vs2-accountLinks-cart-count" data-bind="text: vinespring.cartCount"></span>
                    </a>
                </span>
            </div>
        </div>
        <div id="vs2-cart-confirmation-custom">
            <a class="button-close"><i class="icon-cancel"></i></a>
            <h3>Cart</h3>
            <p>Item(s) have been added to your cart.</p>
            <a href="/cart" class="button-review">Review your cart</a>
        </div>


        <header id="header" role="banner" class="clearfix">

            <div id="logo">

                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="/images/logo_fait_main.jpg" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>"></a>

            </div>

        </header>

        <div id="main" role="main" class="clearfix">

