/*   PreLoader 
=============
*/
$(window).on('load', function () { // make sure tha whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/****** Team Section  ****/
$(document).ready(function(){
  $("#team-members").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false
  });
});

/*** Angle down ****/



