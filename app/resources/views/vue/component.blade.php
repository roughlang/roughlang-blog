@extends('layouts.app')

@section('title', 'vue component')

@section('content_block')
<div class="container lw-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      <h3 class="mb20">vue component basic</h3>
      <ul>
        <li><a href="https://jp.vuejs.org/v2/guide/components.html">コンポーネントの基本</a></li>
        <li><a href="https://qiita.com/shizen-shin/items/a06a72c6f35f96c19772">【Vue.js】コンポーネントの使い方と注意点</a></li>
      </ul>
      
      
      <h4>components-demo</h4>
      <div id="components-demo">
        <button-counter></button-counter>
      </div>
      <script>
        // button-counter と呼ばれる新しいコンポーネントを定義します
        Vue.component('button-counter', {
          data: function () {
            return {
              count: 0
            }
          },
          template: '<button v-on:click="count++">You clicked me @{{ count }} times.</button>'
        });

        new Vue({ el: '#components-demo' });
      </script>
      
      <h4>components-demo axios</h4>
      <div id="components-demo2">
        <button-counter2></button-counter2>
      </div>
      <script>
        // button-counter2 と呼ばれる新しいコンポーネントを定義します
        Vue.component('button-counter2', {
          data: function () {
            return {
              category: 'hoge'
            }
          },
          method: {
            clickHandler:function(){
              this.category = 'category'
            }
          },
          template: '<button>@{{ category }}</button>'
        });

        new Vue({ el: '#components-demo2' });
      </script>

    </div>
    <div class="col-md-3">
      @include('include/sidebar')
    </div>
  </div>
</div>
@endsection
