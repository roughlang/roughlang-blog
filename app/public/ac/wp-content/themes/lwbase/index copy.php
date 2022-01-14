<?php
/**
 * Return json as API
 */
if (have_posts()) {
	$records = array();
	while (have_posts()) {
		the_post();
		$post_id = get_the_ID();

		/* Get post images */
		$attachments = [];
		$attachments = get_children( array(
			'post_parent' => $post_id,
			'numberposts' => -1,
			'post_type' => 'attachment',
			'post_mime_type' => 'image',
			'exclude' => get_post_thumbnail_id( $post_id ),
		));
		
		$post_images = [];
		// $post_images = new arrayobj();
		foreach ($attachments as $attachment) {
			/* thumbnail */
			preg_match_all('/< *img[^>]*src *= *["\']?([^"\']*)/i', wp_get_attachment_image($attachment->ID, 'thumbnail'), $matches);
			$attachment->image_thumbnail = (string) $matches[1][0];
			/* medium */
			preg_match_all('/< *img[^>]*src *= *["\']?([^"\']*)/i', wp_get_attachment_image($attachment->ID, 'medium'), $matches);
			$attachment->image_medium = (string) $matches[1][0];
			/* large */
			preg_match_all('/< *img[^>]*src *= *["\']?([^"\']*)/i', wp_get_attachment_image($attachment->ID, 'large'), $matches);
			$attachment->image_large = (string) $matches[1][0];
			/* full */
			preg_match_all('/< *img[^>]*src *= *["\']?([^"\']*)/i', wp_get_attachment_image($attachment->ID, 'full'), $matches);
			$attachment->image_full = $matches[1][0];
			$post_images[] = $attachment;
		}
		
		$records[] = array(
			'id'        		=> $post_id,
			'title'     		=> get_the_title(),
			'content'   		=> apply_filters('the_content', preg_replace("/\n/","",get_the_content())),
			'permalink' 		=> get_permalink(),
			'publish_date'  => get_the_date('Y-m-d H:i:s'),
			'modified_date' => get_the_modified_date('Y-m-d H:i:s'),
			'category'      => get_the_category(),
			'tag'           => get_the_tags(),
			'icatch'        => get_the_post_thumbnail_url(),
			'post_images'		=> $post_images,
			'slug'          => $post->post_name,
		);
	}
}

if (WP_ENV == 'local' || WP_ENV == 'dev') {
  echo json_encode($records, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
} else {
  echo json_encode($records, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}