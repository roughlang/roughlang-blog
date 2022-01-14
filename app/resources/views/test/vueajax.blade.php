@extends('layouts.app')

@section('title', 'vue.js + ajax')


@section('content_block')
<div class="container lw-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      <h3>Ajax(axios) GET sample</h3>
      <p>axiosのgetメソッドでAPIのjsonを読み込んでリスト表示します。</p>
      <div id="vueajax1">
        {{-- 
          [{
          "id":1,
          "title":"Hello world!",
          "content":"<p>WordPress へようこそ。こちらは最初の投稿です。編集または削除し、コンテンツ作成を始めてください。</p>",
          "permalink":"https://lwbase.roughlang.com/ac/2022/01/05/hello-world/",
          "publish_date":"2022-01-05 01:39:40",
          "modified_date":"2022-01-05 01:39:40",
          "category":[{"term_id":1,
          "name":"未分類",
          "slug":"uncategorized",
          "term_group":0,
          "term_taxonomy_id":1,
          "taxonomy":"category",
          "description":"",
          "parent":0,
          "count":1,
          "filter":"raw",
          "cat_ID":1,
          "category_count":1,
          "category_description":"",
          "cat_name":"未分類",
          "category_nicename":"uncategorized",
          "category_parent":0}],
          "tag":false,
          "icatch":false,
          "post_images":[],
          "slug":"hello-world"
          }]
        --}}
        <ol>
          <li v-for="page in blog"><a href="@{{ page.permalink }}">@{{ page.title }}</a></li>
        </ol>
      </div>
      {{ env('APP_URL') }}
      <script>
        const vueajax1 = new Vue({
          el: '#vueajax1',
          data: {
            blog: []
          },
          mounted: function() {
            const self = this;
            axios
            .get( '{{ env('APP_URL') }}/ac/')
            .then(function(response) {
              console.log(response);
                self.blog = response.data;
            })
            .catch(function(error) {
              console.log('取得に失敗しました。', error);
            })
          }
        });
      </script>
    </div>
    <div class="col-md-3">
      bar
    </div>
  </div>
</div>
@endsection