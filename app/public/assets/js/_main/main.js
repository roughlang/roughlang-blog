// alert("main.js");
$(function(){
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

