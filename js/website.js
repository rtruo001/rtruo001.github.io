$(document).ready(function() {
  $("body").hide().fadeIn(1500);
  $("header").hide().fadeIn(6000);
  $("#home .textInSection").hide().fadeIn(6000);
});

$(document).ready(function(){
  $('#nav').localScroll(800);
  // $('#home').parallax("50%", 0.1);
  // $('#aboutMe').parallax("50%", 0.1);
  // $('#resume').parallax("50%", 0.1);
  // $('#myLinks').parallax("50%", 0.1);
})

$(document).ready(function() {  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
  /* Check the location of each desired element */
  $('.hideme').each( function(i){          
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
          
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ) {
          $(this).animate({'opacity':'1'},500);                  
      }
    }); 
  });
});


