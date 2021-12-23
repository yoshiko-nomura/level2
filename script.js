
$(function(){
  $("#header").load("header.html #header-inner", function(){
    $('.hamburger').click(function () {
      $('.hamburger, nav:eq(1)').toggleClass('isMenu');
    });
  });
  $("#footer").load("footer.html #footer-inner")
})