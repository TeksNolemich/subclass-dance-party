$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    console.log($(window).height())
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * $(window).height() - 150),
      Math.floor(Math.random() * $(window).width() - 200),
      Math.random() * 1000
    );

    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
   
  $('.inLine').on('click', function(event) {
    $('.dancer').css('top', function() {
      return 50+'%';
    });
  });

    $('.group').on('click', function(event) {
      for (var i = 0; i < dancers.length; i++) {
        var name = dancers[i].$node[0].className;
        if(name.includes('blinky-dancer')) {
          var topVal = Math.floor(Math.random() * 50) + '%';
          var leftVal = Math.floor(Math.random() * 30) + '%';
          dancers[i].setPosition(topVal, leftVal);
        }
        if(name.includes('blue-dancer')) {
          var topVal = Math.floor(Math.random() * 50) + 50 + '%';
          var leftVal = Math.floor(Math.random() * 60) + 40 + '%';
          dancers[i].setPosition(topVal, leftVal);
        }
        if(name.includes('yellow-dancer')) {
          var topVal = Math.floor(Math.random() * 30) + '%';
          var leftVal = Math.floor(Math.random() * 30) + 50 + '%';
          dancers[i].setPosition(topVal, leftVal);
        }
      }
    });
 
});

$( "div.example" ).css( "width", function( index ) {
  return index * 50;
});