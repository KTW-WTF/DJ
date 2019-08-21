$(document).ready(function(){
  var coverheight = $('.coverview').height();
  $(window).scroll(function(){
    var sct = $(this).scrollTop();
    if(sct>coverheight){
      $('.gnb').css('position','fixed').addClass("sub-design");
    }
    else  if(sct<coverheight){
      $('.gnb').css('position','absolute').removeClass("sub-design");
    }
  });
});
