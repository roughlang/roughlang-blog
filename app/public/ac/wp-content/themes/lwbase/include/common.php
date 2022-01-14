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