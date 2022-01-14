@extends('layouts.app')

@section('title', 'vue list')

@section('content_block')
<div class="container lw-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      <h2 class="mb20">Document</h2>
      <ul>
        <li><a href="{{ env('APP_URL') }}/vue" target="_blank">{{ env('APP_URL') }}/vue</a></li>
        <li><a href="{{ env('APP_URL') }}/vue/ajax_get" target="_blank">{{ env('APP_URL') }}/vue/ajax_get</a></li>
        <li><a href="{{ env('APP_URL') }}/vue/component" target="_blank">{{ env('APP_URL') }}/vue/component</a></li>
      </ul>
      <h2 class="mb20">Document</h2>
      <ul>  
        <li><a href="{{ env('APP_URL') }}/ac/wp-json/wp/v2/posts" target="_blank">{{ env('APP_URL') }}/ac/wp-json/wp/v2/posts</a></li>
        <li><a href="https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts" target="_blank">https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts</a></li>
      </ul> 
    </div>

    <div class="col-md-3">
      <h1>Hello!!</h1>
      <div id="app">@{{ message }}</div>
      <script type="text/javascript" src="/assets/js/vue/vue.js"></script>
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
            <li>@{{row.title}}(@{{index}})- @{{row.content}}</li>
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
  </div>
</div>
@endsection