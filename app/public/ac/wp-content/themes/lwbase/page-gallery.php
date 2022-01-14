<?php
include(__DIR__."/include/common.php");
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
				<h2 class="mb60">Blog archives</h2>
				<div class="breadcrumb">
					<ul>
						<li class="parent"><a href="/">Home</a></li>
						<li class="parent"><a href="<?php echo home_url(); ?>">Blog</a></li>
						<li><a href="#">Archives</a></li>
					</ul>
				</div>

        <div class="archives">
          <?php
          // catefory一覧
          $args = [
            'parent' => 0,
            'orderby' => 'term_order',
            'order' => 'DSC'
          ];
          $categories = get_categories( $args );
          // var_dump($categories);
          ?>
          <?php foreach( $categories as $category ) : ?>
            <h4>
              <a href="<?php echo get_category_link( $category->term_id ); ?>">
                <?php echo $category->name; ?>
              </a>
            </h4>
            <?php
            // echo $category->slug."<br>\n";
            // $category->name
            $post_args = [
              'posts_per_page' => -1,
              'orderby' => 'date',
              'order' => 'DESC',
              'category_name' => $category->slug,
            ];
            $posts = get_posts( $post_args );
            echo "<ul>";
            foreach($posts as $post) {
              $permalink = get_the_permalink();
              echo '<li><a href="'.$permalink.'">'.$post->post_title.'</a></li>';
              // var_dump($post->post_date);
            }
            echo "</ul>";
            ?>
          <?php endforeach; ?>
        </div>
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