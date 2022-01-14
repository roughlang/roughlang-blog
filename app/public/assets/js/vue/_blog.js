alert("blog");

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