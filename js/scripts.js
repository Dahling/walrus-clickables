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


$("button#green").click(function() {
  // $("body").removeClass();
   $("body").toggleClass("green-background");
 });

 // $("button#purple").click(function() {
 //   // $("body").removeClass();
 //    $("body").toggleClass("magic");
 //  });


$("button#yellow").click(function() {
  // $("body").removeClass();
   $("body").toggleClass("yellow-background");
 });

$("button#red").click(function() {
  // $("body").removeClass();
   $("body").toggleClass("red-background");
});
$("button#pink").click(function() {
  // $("body").removeClass();
   $("body").toggleClass("pink-background");
});

$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );

});
