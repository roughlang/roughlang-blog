@extends('layouts.app')

@section('title', 'Roughlang')

@section('top_banner')
<div id="big-banner" class="big-banner p-3 p-sm-5 mb-4 bg-img">
	<div id="container" class="container">
		<h1 class="display-4">{{ env('APP_NAME') }}</h1>
		<!-- <p class="lead">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p> -->
	
    <!-- <div class="big-menu">
      <ul class="big-menu-list">
        <li>
          <a href="http://">
            <img src="/assets/img/top/bl_009.jpg" alt="" class="big-menu-image">
            <h3>Philosophy</h3>
          </a>
        </li>
        <li>
          <a href="http://">2</a>
        </li>
        <li>
          <a href="http://">3</a>
        </li>
      </ul>
    </div> -->
  </div>
</div>
@endsection

@section('content_block')
<div class="container lw-contents-block mt100">
  <div class="row mb100">
    <div class="col-sm-6">

      <h2 class="mb30">Blog update</h2>
      <div id="blog" class="blog-top">
        <div v-for="(row,index) in blog" v-bind:key="row.id" class="blog-ul">
          <div class="blog-li">
            <a v-bind:href="row.link">@{{row.title.rendered}}</a>
            <span class="blog-date">@{{row.modified_gmt}}</span><!--(@{{index}})-->
          </div>
        </div>
      </div>

      <h2 class="mt50 mb30">Blog index</h2>
      <div id="blog" class="c mb40">
        <div class="blog-ul">
          <div class="blog-li">
            <a href="/ac/menu_of_philosophy/">哲学の目次</a>
          </div>
        </div>
      </div>

      <script>
        /* Blogの表示 */
        const env = '{{ config('app.env') }}';
        const blog = new Vue({
          el: '#blog',
          data: {
            loading: false,
            blog: []
          },
          mounted: function() {
            const self = this;
            /* posts */
            this.loading = true;
            let blog_api_endpoint;
            const stg_blog_api_endpoint = 'https://insomnia-stg.roughlang.com/ac/ja/wp-json/wp/v2/posts?categories=11+8+3+1+20';
            const prod_blog_api_endpoint = 'https://insomnia.roughlang.com/ac/ja/wp-json/wp/v2/posts?categories=11+8+3+1+20';
            if (env == 'local' || env == 'develop' || env == 'stg') {
              blog_api_endpoint = stg_blog_api_endpoint;
            } else if (env == 'prod') {
              blog_api_endpoint = prod_blog_api_endpoint;
            }
            axios.get(blog_api_endpoint)
            .then(function(response) {
              for( key in response.data ) {
                /* 日付のフォーマット変更 */
                var date = response.data[key].modified_gmt.split('T');

                var date_format = date[0].replace('-', '.');
                var date_format = date[0].replace(/-/g, '.');
                // console.log(date_format);
                response.data[key].modified_gmt = date_format;
              }
              this.loading = false;
              self.blog = response.data;
            }).catch(function(){
              console.log('Failed to get blog from wp-rest-api.', error);
            });
          }
        });
      </script>
    </div>

    <div class="col-sm-6 mb30">
      <div id="blog" class="blog-top">
        <div class="imgwrap">
          <a href="#"><img src="/assets/img/top/bl_001.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_002.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_003.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_004.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_005.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_006.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_007.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_008.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_009.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_010.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_011.jpg" alt=""></a>
          <a href="#"><img src="/assets/img/top/bl_012.jpg" alt=""></a>
        </div>
      </div>
  </div>
</div>


<div class="container top-gallery" id="top-gallery">
  <div class="row">
    <div class="col-sm-12">
        <div class="top-gallery-area">
          <img src="/assets/s3/photo_0001.jpg" alt="">
          <img src="/assets/s3/photo_0002.jpg" alt="">
          <img src="/assets/s3/photo_0003.jpg" alt="">
        </div>
    </div>
  </div>
</div>
<!--
    <div class="col-sm-6">
      <h2>Blog update</h2>
      <div id="app">@{{ message }}</div>
      
      <script>
        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello Vue!'
          }
        })
      </script>

      <div id="list">
        <ul v-for="(row,index) in tests" :key="row.title">
            <li>@{{row.title}}(@{{index}})- @{{row.content}}　@{{row.content}}</li>
            <ul v-for="(image,index) in row.images">
              <li>@{{image}}</li>
            </ul>
        </ul>
      </div>
      <script>
          var list = new Vue({
          el: '#list',
          data: {
            tests: [
              {title:'foo',content:'aaaaa',images:['jpg1-1','jpg1-2','jpg1-3']},
              {title:'bar',content:'bbbbb',images:['png1-1','png1-2','png1-3']},
              {title:'baz',content:'ccccc',images:['gif1-1','gif1-2','gif1-3']},
            ]
          }
        })
      </script>
    </div>
      -->
@endsection


