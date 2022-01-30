<?php
require $_SERVER["DOCUMENT_ROOT"]."/../vendor/autoload.php";
// use Dotenv\Dotenv;
// $dotenv = Dotenv::create(__DIR__. '/..');
// $dotenv->load();

function adjust_content_text($content) {
  $pattern1 = '/<img.*?src\s*=\s*[\"|\'](.*?)[\"|\'].*?>/i'; // img
  $pattern2 = '/<[hH][1-6].*?>/i'; // h1-h6
  $pattern3 = '/<[pP].*?>|<\/[pP].*?>/i'; // h1-h6
  $content = preg_replace( $pattern1, "", $content);
  $content = preg_replace( $pattern2, "", $content);
  $content = preg_replace( $pattern3, "", $content);
  return $content;
}

/**
 * pageのurlを取得
 */
$page_url = WP_TOPURL.$_SERVER['REQUEST_URI'];

/**
 * 
 */
$blog_title = "Documents";

/**
 * pege title
 */
if ($_SERVER['REQUEST_URI'] == "/ac/") {
  $page_title = "Roughlang document";
  $page_excerpt = "";
  $page_excerpt = get_bloginfo("description", "display")."現代思想,哲学,現代美術,歴史,社会,分析哲学,大陸哲学,論理実証主義,分析哲学,実存主義,構造主義,ポスト構造主義,現象学についてアプローチしています。";
}
/* single | page */
else
{
  $category = get_the_category();
  $cat_name = "";
  if ($category) {
    $cat_id   = $category[0]->cat_ID;
    $cat_name = $category[0]->cat_name;
    $cat_slug = $category[0]->category_nicename;
    $cat_link = get_category_link($category[0]->term_id);
  }

  $tags = get_the_tags();
  if ($tags) {
    $page_tags = "";
    foreach ($tags as $tag) {
      $page_tags .= " | ".$tag->name;
    }
  }

  $page_excerpt = get_the_excerpt()." | ".$cat_name;
  if (!empty($cat_name)) {
    $page_title = get_the_title()." | ".$cat_name;
  } else {
    $page_title = get_the_title();
  }
}


/**
 * Debug
 */
// echo "page url: ".$page_url."<br>\n";
// echo "page title: ".$page_title."<br>\n";
// echo "page excerpt: ".$page_excerpt."<br>\n";
// echo "page tags: ".$page_tags."<br>\n";
