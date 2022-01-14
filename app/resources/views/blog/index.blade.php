@extends('layouts.app')

@section('title', 'Blog top')

{{--
api: https://lwbase.roughlang.com/ac/wp-json/wp/v2/posts
initial: 最新20件 ページネーション
search: 別フォーム作成（Blog用）
category / tagのソートと検索
--}}
@section('content_block')
<div class="container lw-contents-block blog-contents-block mt60 mb60">
  <div class="row">
    <div class="col-md-9">
      
      <h2 class="mb20" id="blog_top">Blog list</h2>
      <div class="blog-search-form">
        <form class="d-flex float-end">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn" type="submit">
            <img src="/assets/img/item/search.svg" width="24" height="24" alt="search">
          </button>
        </form>
        <br clear="both">
      </div>

      <div class="blog-latest-blocck">
        <div id="tab" class="tab mt30">
          <ul class="tab-menu">
            <li @click="isSelect('1')" class="tab-item tab-item1" v-bind:class="{'active': isActive === '1'}">
              <h3><a href="#">Latest</a></h3>
              <img src="/assets/img/item/under-arrow.png" class="add-arrow">
            </li>
            <li @click="isSelect('2')" class="tab-item tab-item2" v-bind:class="{'active': isActive === '2'}">
              <h3><a href="#">Gallery</a></h3>
              <img src="/assets/img/item/under-arrow.png" class="add-arrow">
            </li>
            <li @click="isSelect('3')" class="tab-item tab-item3" v-bind:class="{'active': isActive === '3'}">
              <h3><a href="#">Archives</a></h3>
              <img src="/assets/img/item/under-arrow.png" class="add-arrow">
            </li>
          </ul>
          <div class="tab-contents">
            <div v-if="isActive === '1'">Tab All</div>
            <div v-else-if="isActive === '2'">Tab News</div>
            <div v-else-if="isActive === '3'">Tab Event</div>
          </div>
        </div>
        


        <ul id="blog" class="blog">

          <li v-for="page in blog">
            <h4><a v-bind:href="'/blog/post/' + page.id" class="blog-title-link">@{{ page.title.rendered }}</a></h4>
            <div class="excerpt" v-html="page.excerpt.rendered">
              @{{ page.excerpt.rendered }}
            </div>
            <div class="meta">
              <div class="categories">
                <ul v-for="category in page.category_info">
                  <li><a v-bind:href="'#' + category.cat_ID">@{{ category.cat_name }}</a></li>
                </ul>   
              </div>
              <div class="tags">
                <ul v-for="tag in page.tag_info">
                  <li ><a v-bind:href="'#' + tag.term_id">@{{ tag.name }}</a></li>
                </ul>
              </div>
              <div class="date">@{{ page.date }}</div>
            </div>
          </li>

        </ul>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center pagination-sm">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">←</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">→</a>
            </li>
          </ul>
        </nav>
      </div>
      <script>
      /* Blogの表示 */
      const blog = new Vue({
        el: '#blog',
        data: {
          blog: [],
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
        },
        method: function() {
          alert();
        }
      });
      </script>

      <script>
        new Vue({
          el: "#tab",
          data: {
            isActive: "1"
          },
          methods: {
            isSelect: function (num) {
              this.isActive = num;
            }
          }
        });
      </script>

      <div class="blog-categories">

      </div>
    </div>
    <div class="col-md-3 blog-sidebar">
      @include('include/sidebar') 
    </div>
  </div>
</div>
@endsection