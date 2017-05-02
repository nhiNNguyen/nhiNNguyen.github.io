$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
  $('.footnote').removeClass('showme');
  });

  $('.blueheader').mouseenter(function() {
  $('h2').addClass('hide');
  });

  $('.blueheader').mouseleave(function() {
  $('h2').removeClass('hide');
  });

});
