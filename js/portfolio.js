$(document).ready(function() {

  $('#draw-gun').hide();
  $('#draw-blog').hide();
  $('#draw-draw').hide();
  $('#draw-game').hide();

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
