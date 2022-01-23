// alert("main.js");
$(function(){
  var window_width = $(window).width();
  var now = new Date();
  var hour = now.getHours();
  console.log(window_width);
  console.log(hour);
  /**
   * 
   */
  if (hour >= 0 && hour < 6) {
    // alert("hoge");
    if (window_width < 576) {
      $('#big-banner').css('background-image', 'url(/assets/img/top/_bg-575.png)'); 
    } else if (window_width >= 576 && window_width < 769) {
      $('#big-banner').css('background-image', 'url(/assets/img/top/_bg-768.png)'); 
    } else if (window_width >= 769 && window_width < 993) {
      $('#big-banner').css('background-image', 'url(/assets/img/top/_bg-992.png)'); 
    } else if (window_width >= 993 && window_width < 1200) {
      $('#big-banner').css('background-image', 'url(/assets/img/top/_bg-1200.png)'); 
    } else if (window_width >= 1200) {
      $('#big-banner').css('background-image', 'url(/assets/img/top/_bg-1680.png)'); 
    }
  }


  // $("#big-banner").addClass("big-banner-before");
  $(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2;
    // console.log(scrollTop);
    // console.log(bgPosition); 
    if(bgPosition){
      $('#big-banner').css('background-position', '50% top, 50% '+ bgPosition + '%'); 
      // $('#container').css('background-position', ' center '+ bgPosition + 'px');
      // $('#big-banner').css('background-position', 'center '+ bgPosition + '%');
      // $('#big-banner:before').css('filter', 'blur(5px)');

    }
  });
});

