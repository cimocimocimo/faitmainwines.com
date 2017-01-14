<?php
/**
 * vin functions and definitions
 *
 * @package vin
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 640; /* pixels */

if ( ! function_exists( 'vin_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function vin_setup() {

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on vin, use a find and replace
	 * to change 'vin' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'vin', get_template_directory() . '/languages' );

	/**
	 * Add default posts and comments RSS feed links to head
	 */
	add_theme_support( 'automatic-feed-links' );

	/**
	 * Enable support for Post Thumbnails on posts and pages
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	/**
	 * This theme uses wp_nav_menu() in one location.
	 */
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'vin' ),
	) );

	/**
	 * Enable support for Post Formats
	 */
	//add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

	/**
	 * Setup the WordPress core custom background feature.
	 */
	// add_theme_support( 'custom-background', apply_filters( 'vin_custom_background_args', array(
	// 	'default-color' => 'ffffff',
	// 	'default-image' => '',
	// ) ) );
}
endif; // vin_setup
add_action( 'after_setup_theme', 'vin_setup' );

/**
 * Register widgetized area and update sidebar with default widgets
 */
// function vin_widgets_init() {
// 	register_sidebar( array(
// 		'name'          => __( 'Sidebar', 'vin' ),
// 		'id'            => 'sidebar-1',
// 		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
// 		'after_widget'  => '</aside>',
// 		'before_title'  => '<h1 class="widget-title">',
// 		'after_title'   => '</h1>',
// 	) );
// }
// add_action( 'widgets_init', 'vin_widgets_init' );

/**
 * Enqueue scripts and styles
 */


function vin_styles_scripts() {

	//styles
	wp_enqueue_style( 'site', get_stylesheet_uri() );
	//wp_enqueue_style( 'grid', get_template_directory_uri() . '/stylesheets/grid.css' );
	wp_enqueue_style( 'vs2', get_template_directory_uri() . '/stylesheets/vs2.css' );


	//scripts
	wp_deregister_script('jquery');
	wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', false, '1.8.3');
	wp_enqueue_script('jquery');

	wp_enqueue_script( 'global', get_template_directory_uri() .'/scripts/global.js', array('jquery'), '20120206', true );
    wp_enqueue_script( 'vinespring', 'https://platform.vinespring.com/scripts/2.0/all.js', array(), '20120206', true );
}
add_action( 'wp_enqueue_scripts', 'vin_styles_scripts' );


/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';


/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';


/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';


/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';


/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


/**
 * Excerpt
 */
function vin_addexcerpt() {
add_meta_box('postexcerpt', __('Excerpt'), 'post_excerpt_meta_box', 'page', 'normal', 'core');
}
add_action( 'admin_menu', 'vin_addexcerpt' );

function vin_excerpt_more( $more ) {
    return ' <a class="button read-more" href="'. get_permalink( get_the_ID() ) . '">Read More...</a>';
}
add_filter( 'excerpt_more', 'vin_excerpt_more' );




/**
 * Remove unnecessary header tags
 */

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rel_canonical');




/**
 * Theme customization
 */

function vin_theme_customizer( $wp_customize ) {


    //layout alignment center/left
    $wp_customize->add_section( 'vin_layout_alignment_section', array(
        'title'         => __('Layout', 'vin'),
        'priority'      => 30,
    ));
    //center/left
    // $wp_customize->add_setting( 'vin_layout_alignment', array(
    //     'default'       => 'theme-align-center',
    //     'capability'    => 'edit_theme_options',
    //     //'type'          => 'option',
    // ));
    // $wp_customize->add_control( 'vin_layout_alignment', array(
    //     'settings'      => 'vin_layout_alignment',
    //     'label'         => 'Alignment',
    //     'section'       => 'vin_layout_alignment_section',
    //     'type'          => 'select',
    //     'choices'       => array(
    //         'theme-align-center'    => 'Center',
    //         'theme-align-left'      => 'Left',
    //     ),
    // ));


    //dark/light
    // $wp_customize->add_setting( 'vin_color_lightness', array(
    //     'default'       => 'theme-lightness-light',
    //     'capability'    => 'edit_theme_options',
    //     //'type'          => 'option',

    // ));
    // $wp_customize->add_control( 'vin_color_lightness_select_box', array(
    //     'settings'      => 'vin_color_lightness',
    //     'label'         => 'Lightness',
    //     'section'       => 'colors',
    //     'type'          => 'select',
    //     'choices'       => array(
    //         'theme-lightness-light'     => 'Light',
    //         'theme-lightness-dark'      => 'Dark',
    //     ),
    // ));


    //links colors
    // $wp_customize->add_setting( 'vin_link_color', array(
    //     'default'       => '#aaaaaa',
    //     'transport'     => 'postMessage',
    // ) );
    // $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'vin_link_color', array(
    //     'label'         => 'Link Color',
    //     'section'       => 'colors',
    //     'settings'      => 'vin_link_color',
    // ) ) );

    // $wp_customize->add_setting( 'vin_link_hover_color', array(
    //     'default'       => '#cccccc',
    //     'transport'     => 'postMessage',
    // ) );
    // $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'vin_link_hover_color', array(
    //     'label'         => 'Link Hover Color',
    //     'section'       => 'colors',
    //     'settings'      => 'vin_link_hover_color',
    // ) ) );

    // $wp_customize->add_setting( 'vin_menu_link_color', array(
    //     'default'       => '#111111',
    //     'transport'     => 'postMessage',
    // ) );
    // $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'vin_menu_link_color', array(
    //     'label'         => 'Menu Link Color',
    //     'section'       => 'colors',
    //     'settings'      => 'vin_menu_link_color',
    // ) ) );


    // Logo upload
    // $wp_customize->add_section( 'vin_logo_section' , array(
    //     'title'        => __( 'Logo', 'vin' ),
    //     'priority'     => 30,
    //     'description'  => 'Upload a logo to replace the default site name and description in the header',
    // ) );
    // $wp_customize->add_setting( 'vin_logo' );
    // $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'vin_logo', array(
    //     'label'         => __( 'Logo', 'vin' ),
    //     'section'       => 'vin_logo_section',
    //     'settings'      => 'vin_logo',
    // ) ) );








    // Choose excerpt or full content on blog
    // $wp_customize->add_section( 'vin_layout_section' , array(
    //      'title' => __( 'Layout', 'vin' ),
    //      'priority' => 30,
    //      'description' => 'Change how Debut displays posts',
    //     ) );
    //     $wp_customize->add_setting( 'vin_post_content', array(
    //             'default'        => 'option1',
    //     ) );
    //     $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'vin_post_content', array(
    //             'label'                => __( 'Post content', 'vin' ),
    //             'section'        => 'vin_layout_section',
    //             'settings'        => 'vin_post_content',
    //             'type'                => 'radio',
    //             'choices'        => array(
    //                     'option1'        => 'Excerpts',
    //                     'option2'        => 'Full content',
    //                     ),
    //     ) ) );

        // Set site name and description to be previewed in real-time
        $wp_customize->get_setting('blogname')->transport='postMessage';
        $wp_customize->get_setting('blogdescription')->transport='postMessage';

        // Enqueue scripts for real-time preview
        wp_enqueue_script( 'vin-customizer', get_template_directory_uri() . '/js/vin-customizer.js', array( 'jquery' ) );

}
add_action('customize_register', 'vin_theme_customizer');


/**
* Add CSS in <head> for styles handled by the theme customizer
*
*/
function vin_add_customizer_css() { ?>
<!-- theme customization css -->
<style type="text/css">
a,
a:link,
a:visited,
#menu-toggle {
color: <?php echo get_theme_mod( 'vin_link_color' ); ?>;
}
a:hover,
a:focus,
#menu-toggle:hover {
color: <?php echo get_theme_mod( 'vin_link_hover_color' ); ?>;
}
.menu-main-menu-container .menu a,
.menu-main-menu-container .menu a:link,
.menu-main-menu-container .menu a:visited,
.menu-main-menu-container .menu a:hover,
.menu-main-menu-container .menu a:focus,
.menu-main-menu-container .menu a:active {
color: <?php echo get_theme_mod( 'vin_menu_link_color' ); ?>;
}
.theme-lightness-light #credits-info {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-dark #credits-info {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-light legend {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-dark legend {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-light .menu-wrapper {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-dark .menu-wrapper {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-light #vs2-cart-confirmation,
.theme-lightness-light #vs2-cart-confirmation-custom {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
.theme-lightness-dark #vs2-cart-confirmation,
.theme-lightness-dark #vs2-cart-confirmation-custom {
background-color: #<?php echo get_theme_mod( 'background_color' ); ?>;
}
</style>
<?php }
add_action( 'wp_head', 'vin_add_customizer_css' );