$(document).ready(function() {

  $('.svg').css('fill', '#eee');

  $('#draw-gun').hide();
  $('#draw-blog').hide();
  $('#draw-draw').hide();
  $('#draw-game').hide();
  $('.see-more').hide();

  $('.see-more').fadeIn(3000);

  $('.see-more').click(function() {
    $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
  });


  $("#the-work").click(function() {
    $('#the-work').css('color', '#457371');
    $('#the-about').css('color', '#eee');
    $('#the-contact').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
  });

  $("#the-about").click(function() {
    $('#the-about').css('color', '#457371');
    $('#the-work').css('color', '#eee');
    $('#the-contact').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#about").offset().top
   }, 800);
  });

  $("#the-contact").click(function() {
    $('#the-contact').css('color', '#457371');
    $('#the-work').css('color', '#eee');
    $('#the-about').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
   }, 800);
  });

  $('.descript').hover( function() {
    $('.descript').css('background-color', '#bbd3d6');
    }, function(){
      $('.descript').css('background-color', '#eee');
  });

  $('.project-3').hover( function() {
    $('#draw-gun').show();
    $('#draw-gun').addClass('animated slideInUp');
    }, function(){
      $('#draw-gun').hide();
  });

  $('.project-2').hover( function() {
    $('#draw-game').show();
    $('#draw-game').addClass('animated slideInUp');
    }, function(){
      $('#draw-game').hide();
  });

  $('.project-1').hover( function() {
    $('#draw-draw').show();
    $('#draw-draw').addClass('animated slideInUp');
    }, function(){
      $('#draw-draw').hide();
  });

  $('.project-0').hover( function() {
    $('#draw-blog').show();
    $('#draw-blog').addClass('animated slideInUp');
    }, function(){
      $('#draw-blog').hide();
  });

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

  // $(window).scroll(function(event) {
  //   var y = $(this).scrollTop();
  //
  //   if (y >= 300) {
  //     $('.one').addClass('animate');
  //     $('.two').addClass('animate');
  //   }
  // });
});
