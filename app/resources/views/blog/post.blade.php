@extends('layouts.app')

@section('title', 'Blog {{ $id }}')


@section('content_block')
<div class="container lw-contents-block blog-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      <div id="post" class="blog-post">
        {{ $id }}
        
        <ul>
          <li>id: @{{ post.id }}</li>
          <li>id: @{{ post.date | date_format }}</li>
          <li>id: @{{ post.date_gmt }}</li>
        </ul>
      </div>
    </div>
    <script>
      const wp_rest_api_endpoint_domain = 'https://lwbase.roughlang.com';
      const wp_rest_api_endpoint_path = '/ac/wp-json/wp/v2/posts/{{ $id }}';
      const post = new Vue({
        el: '#post',
        data: {
          post: [],
        },
        mounted: function() {
          const self = this;
          /* post */
          axios.get( wp_rest_api_endpoint_domain + wp_rest_api_endpoint_path)
          .then(function(response) {
            console.log(response.data.date_gmt);
            self.post = response.data;
          }).catch(function(){
            console.log('Failed to get blog from wp-rest-api.', error);
          });
        },
        filters: {
          date_format: function(val){
            datetime = val;
            console.log(val);
            return val;
          },
        },
      });
    </script>
    <div class="col-md-3 blog-sidebar">
      @include('include/sidebar') 
    </div>
  </div>
</div>
@endsection


