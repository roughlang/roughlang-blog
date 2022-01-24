@extends('layouts.app')

@section('title', 'Roughlang')

@section('top_banner')
<div id="big-banner" class="big-banner p-3 p-sm-5 mb-4 bg-img">
	<div id="container" class="container">
		<h1 class="display-4">{{ env('APP_NAME') }}</h1>
		<p class="lead">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
	</div>
</div>
@endsection

@section('content_block')
<div class="container lw-contents-block mt100 mb100">
  <div class="row">
    <div class="col-sm-6">
      <h2>Blog</h2>

      <script type="text/javascript" src="/assets/js/vue/vue.js"></script>
      <script type="text/javascript" src="/assets/js/vue/axios.js"></script>
      
      <script>
        /* Blogの表示 */
        const blog = new Vue({
          el: '#blog',
          data: {
            blog: []
          },
          mounted: function() {
            const self = this;
            /* posts */
            axios.get( 'https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts?page=1')
            .then(function(response) {
              // console.log(response.data);
              self.blog = response.data;
            }).catch(function(){
              console.log('Failed to get blog from wp-rest-api.', error);
            });
          }
        });
      </script>
      <div id="blog">

      </div>
      https://idee.roughlang.com/ac/wp-json/wp/v2/posts
      {{ env('APP_NAME') }}
      <ul>
        <li><a href="https://github.com/roughlang/lwbase" target="_blank">https://github.com/roughlang/lwbase</a></li>
        <li><a href="http://localhost:8000/ac/?feed=rss2" target="_blank">http://localhost:8000/ac/?feed=rss2</a></li>
        <li><a href="https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts" target="_blank">https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts</a></li>
      </ul>  
    </div>
    <div class="col-sm-6">
      <h1>Hello!!</h1>
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

<div class="container lw-contents-block mb60">
  <div class="row">
    <div class="col-sm-6">
      <p>ある朝、グレゴール・ザムザが気がかりな夢から目ざめたとき、自分がベッドの上で一匹の巨大な毒虫に変ってしまっているのに気づいた。彼は甲殻のように固い背中を下にして横たわり、頭を少し上げると、何本もの弓形のすじにわかれてこんもりと盛り上がっている自分の茶色の腹が見えた。腹の盛り上がりの上には、かけぶとんがすっかりずり落ちそうになって、まだやっともちこたえていた。ふだんの大きさに比べると情けないくらいかぼそいたくさんの足が自分の眼の前にしょんぼりと光っていた。</p>
      <p style="font-weight: 100;">ある朝、グレゴール・ザムザが気がかりな夢から目ざめたとき、自分がベッドの上で一匹の巨大な毒虫に変ってしまっているのに気づいた。彼は甲殻のように固い背中を下にして横たわり、頭を少し上げると、何本もの弓形のすじにわかれてこんもりと盛り上がっている自分の茶色の腹が見えた。腹の盛り上がりの上には、かけぶとんがすっかりずり落ちそうになって、まだやっともちこたえていた。ふだんの大きさに比べると情けないくらいかぼそいたくさんの足が自分の眼の前にしょんぼりと光っていた。</p>
      <p style="font-weight: 200;">ある朝、グレゴール・ザムザが気がかりな夢から目ざめたとき、自分がベッドの上で一匹の巨大な毒虫に変ってしまっているのに気づいた。彼は甲殻のように固い背中を下にして横たわり、頭を少し上げると、何本もの弓形のすじにわかれてこんもりと盛り上がっている自分の茶色の腹が見えた。腹の盛り上がりの上には、かけぶとんがすっかりずり落ちそうになって、まだやっともちこたえていた。ふだんの大きさに比べると情けないくらいかぼそいたくさんの足が自分の眼の前にしょんぼりと光っていた。</p>
      <p style="font-weight: 300;">ある朝、グレゴール・ザムザが気がかりな夢から目ざめたとき、自分がベッドの上で一匹の巨大な毒虫に変ってしまっているのに気づいた。彼は甲殻のように固い背中を下にして横たわり、頭を少し上げると、何本もの弓形のすじにわかれてこんもりと盛り上がっている自分の茶色の腹が見えた。腹の盛り上がりの上には、かけぶとんがすっかりずり落ちそうになって、まだやっともちこたえていた。ふだんの大きさに比べると情けないくらいかぼそいたくさんの足が自分の眼の前にしょんぼりと光っていた。</p>
      <p style="font-weight: 400;">ある朝、グレゴール・ザムザが気がかりな夢から目ざめたとき、自分がベッドの上で一匹の巨大な毒虫に変ってしまっているのに気づいた。彼は甲殻のように固い背中を下にして横たわり、頭を少し上げると、何本もの弓形のすじにわかれてこんもりと盛り上がっている自分の茶色の腹が見えた。腹の盛り上がりの上には、かけぶとんがすっかりずり落ちそうになって、まだやっともちこたえていた。ふだんの大きさに比べると情けないくらいかぼそいたくさんの足が自分の眼の前にしょんぼりと光っていた。</p>
    </div>
    <div class="col-sm-6">
      <p>Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
      <p style="font-weight: 100;">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
      <p style="font-weight: 200;">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
      <p style="font-weight: 300;">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
      <p style="font-weight: 400;">Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf sinem panzerartig harten Rücken und sah, wenn er den Kopf eine wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnnen Beine flimmerten ihm hilflos vor den Augen.</p>
    </div>
  </div>
</div>
@endsection


