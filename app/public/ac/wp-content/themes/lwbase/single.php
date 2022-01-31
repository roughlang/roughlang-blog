<?php
include(__DIR__."/include/common.php");
// echo basename(get_page_template());

/**
 * breadcrumb string
 */
if (mb_strlen($page_title) > 10) {
  $breadcrumb_blog_title = mb_substr($page_title, 0, 10)."...";
}
?>
<!DOCTYPE html>
<html lang="ja">
<?php include("include/header.php"); ?>
<body>
<div class="topbar"></div>
<?php include("include/nav.php"); ?>
	
	<div class="container lw-contents-block blog-contents-block mt60 mb60">
		<div class="row">
			<div class="col-md-9 blog">
				<h2 class="mb60"><?php echo $blog_title; ?></h2>
				<div class="breadcrumb">
					<ul>
						<li class="parent"><a href="/">Home</a></li>
						<li class="parent"><a href="<?php echo home_url(); ?>"><?php echo $blog_title; ?></a></li>
						<li class="parent"><a href="#"><?php echo $cat_name; ?></a></li>
						<li><?php echo $breadcrumb_blog_title; ?></li>
					</ul>
				</div>
				<?php if(have_posts()): ?>
					<?php while(have_posts()): the_post(); ?>
						<h3 class="single-title"><?php the_title(); ?></h3>
						<div class="tags float-end">
							<?php the_tags('<ul><li>', '</li><li>', '</li></ul>'); ?>
						</div><br clear="both">
            <div class="wp-content">
              <?php the_content(); ?>
            </div>
            <br clear="both">
            <div class="thumbnail-list mt50" id="thmnl">
						<?php
              $images = post_images();
              foreach($images as $image){
                echo <<<EOM
                  <a data-bs-toggle="modal" data-bs-target="#modalid_ugryhacks" class="modal-link">
                    <img src="{$image}" width="100%" alt="xxxxxxx" class="modal-image mb-10">
                  </a>
                  <div class="modal fade" id="modalid_ugryhacks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <img src="{$image}" width="100%" alt="xxxxxxx">
                        </div>
                      </div>
                    </div>
                  </div>
EOM;
              }
						?>
            </div>
						<div class="blog-meta mb30">
							<p class="datetime float-end">
                <?php the_time('Y.m.d'); ?>
              </p>
							<?php the_category(); ?>
						</div>
					<?php endwhile; ?>
				<?php else: ?>
					<!-- 投稿データが取得できない場合の処理 -->
				<?php endif; ?>

				<?php
				the_posts_pagination(
					array(
						'mid_size'      => 2, // 現在ページの左右に表示するページ番号の数
						'prev_next'     => true, // 「前へ」「次へ」のリンクを表示する場合はtrue
						'prev_text'     => __( '&lt;'), // 「前へ」リンクのテキスト
						'next_text'     => __( '&gt;'), // 「次へ」リンクのテキスト
						'type'          => 'list', // 戻り値の指定 (plain/list)
					)
				); ?>
			</div>

			<div class="col-md-3 blog">
				<?php if ( is_active_sidebar('main-sidebar') ) : ?>
					<ul class="menu">
						<?php dynamic_sidebar('main-sidebar'); ?>
					</ul>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<?php include("include/footer.php"); ?>
</body>
</html>





