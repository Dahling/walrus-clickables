$(document).ready(function() {
  $(".walrus-showing").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
    $(".walrus").toggle();
    });

    $(".walrus-hidden").click(function() {
      $(".walrus-showing").toggle();
      $(".walrus-hidden").toggle();
      $(".walrus").toggle();
      });



  $(".unicorn-showing").click(function() {
    $(".unicorn-showing").toggle();
    $(".unicorn-hidden").toggle();
    $(".unicorn").toggle();
    });

    $(".unicorn-hidden").click(function() {
      $(".unicorn-showing").toggle();
      $(".unicorn-hidden").toggle();
      $(".unicorn").toggle();
      });
});
