<?php
/**
 * アイキャッチ
 */
function twpp_setup_theme() {
  add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'twpp_setup_theme' );
/**
 * 
 */
function sidebar_widgets_init() {
  register_sidebar( array(
    'name' => 'Main Sidebar',
    'id' => 'main-sidebar',
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ) );
}
add_action( 'widgets_init', 'sidebar_widgets_init' );

/**
 * 投稿記事の画像を取得
 */
function post_images() {
  global $post, $posts;
  ob_start();
  ob_end_clean();
  preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  return $matches[1];
}





/**
 * Wordpress rest api
 * 
 * + add icatch url
 * - delete revisions
 */

/**
 * "date_format": "2022年01月10日 (月) 16:05",
 */
add_action( 'rest_api_init', 'api_add_date_format_fields' );
function api_add_date_format_fields() {
  register_rest_field( 'post',
    'date_format',
     array(
      'get_callback'    => 'get_date_format',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}
function get_date_format( $post, $name ) {
	/* */
  get_the_modified_date('Y年m月d日 H時i分s秒');
  return get_the_modified_date('Y年m月d日 (D) H:i');
}

/* add icatch url */
add_action( 'rest_api_init', 'api_add_fields' );
function api_add_fields() {
  register_rest_field( 'post',
    'thumbnail_url',
     array(
      'get_callback'    => 'register_fields',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}
function register_fields( $post, $name ) {
	/* icatch size [thumbnail | full | medium | large] */
  return get_the_post_thumbnail_url($post['id'], 'full');
}

/**
 * add category name
 */
add_action( 'rest_api_init', 'register_rest_category_name'); 

if ( ! function_exists( 'register_rest_category_name' )) {
  function register_rest_category_name() {
    register_rest_field( 'post', 'category_info',
    array(
      'get_callback' => 'get_category_name'
    ));
  }
  function get_category_name( $object ) {
    $categories = [];
    $categories = get_the_category($object[ 'id' ]);
    return $categories;
  }
}

/**
 * add tag name
 */
add_action( 'rest_api_init', 'register_rest_tag_name'); 
if ( ! function_exists( 'register_rest_tag_name' )) {
  function register_rest_tag_name() {
    register_rest_field( 'post', 'tag_info',
    array(
      'get_callback' => 'get_tag_name'
    ));
  }
  function get_tag_name( $object ) {
    $tags =[];
    $tags = get_the_tags($object[ 'id' ]);
    return $tags;
  }
}



/**
 * Debug log
 */
if(!function_exists('_log')){
  function _log($message) {
    if (WP_DEBUG === true) {
      if (is_array($message) || is_object($message)) {
        error_log(print_r($message, true));
      } else {
        error_log($message);
      }
    }
  }
}

// function wps_highlight_results($text) {
//   if(is_search()){
//   $sr = get_query_var('s');
//   $keys = explode(" ",$sr);
//   $text = preg_replace('/('.implode('|', $keys) .')/iu', '<span class="search-highlight">'.$sr.'</span>', $text);
//   }
//   return $text;
// }
// add_filter('the_title', 'wps_highlight_results');
// add_filter('the_content', 'wps_highlight_results');
