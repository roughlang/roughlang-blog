<?php
include(__DIR__."/include/common.php");
// echo basename(get_page_template());

/**
 * breadcrumb string
 */
if (mb_strlen($page_title) > 10) {
  list($title,$tail) = explode("|",$page_title);
  $breadcrumb_blog_title = mb_substr($title, 0, 10)."...";
} else {
  list($title,$tail) = explode("|",$page_title);
  $breadcrumb_blog_title = trim($title);
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
				<?php edit_post_link('編集する','<button type="button" class="btn btn-light mb20">','</button>'); ?>
				
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

						<h3 class="single-title mb50"><?php the_title(); ?></h3>
						<div class="tags float-end">
							<?php the_tags('<ul><li>', '</li><li>', '</li></ul>'); ?>
						</div><br clear="both">
            <div class="single-content">
              <?php the_content(); ?>
            </div>
            <br clear="both">
            <div class="thumbnail-list mt50 mb50" id="thmnl">
						<?php
              $images = post_images();
			  $i=0;
        foreach($images as $image){
          echo <<<EOM
              <a data-bs-toggle="modal" data-bs-target="#modalid_{$i}" class="modal-link">
                <img src="{$image}" width="100%" alt="xxxxxxx" class="modal-image mb-10">
              </a>
              <div class="modal fade" id="modalid_{$i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
				$i++;
              }
						?>
			      	<br clear="both">
					  <?php edit_post_link('編集する','<button type="button" class="btn btn-light">','</button>'); ?>
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
        <div class="sendlink">
          <?php previous_post_link('%link', '< 前の記事へ', true); ?>
          <?php next_post_link('%link', '次の記事へ >', true); ?>
        </div>
			</div>

			<div class="col-md-3 blog">
				<?php echo do_shortcode( '[bogo]' ); ?>
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





