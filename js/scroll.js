/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// Variables used throughout the scrolling
var ifScrollTransitioning = false;

// There are 4 transitions for hovering and unhovering over buttons
var ifButtonsAreHovering = false;
var ifButtonsAreUnHovering = false;
var ifButtonsAreHovered = false;
var ifButtonsAreUnHovered = true;

// Current page in the pageArray
var divWindowPositionX = 0;
var divWindowPositionY = 0;

// Event handlers for when the buttons are hovered over
$('.up-slide-button').hover(function() {
  ifButtonsAreHovering = true;
  ifButtonsAreUnHovered = false;
}, function() {
  ifButtonsAreHovered = false;
  ifButtonsAreUnHovering = true;
});

$('.down-slide-button').hover(function() {
  ifButtonsAreHovering = true;
  ifButtonsAreUnHovered = false;
}, function() {
  ifButtonsAreHovered = false;
  ifButtonsAreUnHovering = true;
});

$('.left-slide-button').hover(function() {
  ifButtonsAreHovering = true;
  ifButtonsAreUnHovered = false;
}, function() {
  ifButtonsAreHovered = false;
  ifButtonsAreUnHovering = true;
});

$('.right-slide-button').hover(function() {
  ifButtonsAreHovering = true;
  ifButtonsAreUnHovered = false;
}, function() {
  ifButtonsAreHovered = false;
  ifButtonsAreUnHovering = true;
});

// Event handlers for when the buttons are hovered over
// $('.up-slide-button').hover(function() {
//   ifButtonsAreHovered = true;
// }, function() {
//   ifButtonsAreUnHovered = true;
// });

// $('.down-slide-button').hover(function() {
//   ifButtonsAreHovered = true;
// }, function() {
//   ifButtonsAreUnHovered = true;
// });

// $('.left-slide-button').hover(function() {
//   ifButtonsAreHovered = true;
// }, function() {
//   ifButtonsAreUnHovered = true;
// });

// $('.right-slide-button').hover(function() {
//   ifButtonsAreHovered = true;
// }, function() {
//   ifButtonsAreUnHovered = true;
// });

/* IE7, IE8 */
document.onmousewheel = function() { 
  stopWheel();  
}

if(document.addEventListener){ /* Chrome, Safari, Firefox */
    document.addEventListener('DOMMouseScroll', stopWheel, false);
}

function stopWheel(e) {
  /* IE7, IE8, Chrome, Safari */
  if(!e) { 
    e = window.event; 
  } 

  /* Chrome, Safari, Firefox */
  if(e.preventDefault) { 
    e.preventDefault(); 
  }

  /* IE7, IE8 */
  e.returnValue = false; 

  // If not in tbe process of a scroll, then actually scrolls the screen depending if the screen was scrollded down or up
  if (!ifScrollTransitioning) {
    reenableButtonAnimations();
    var evt=window.event || e

    // The Speed and direction of the mousewheel scroll
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
    if (delta < 0) {
      downSlide();
    }
    else if (delta > 0) {
      upSlide();
    }
  }
}

// THIS PART IS THE MOST CONFUSING PART FOR ME
// Sets the state if scrolling is still transitioning, if it finished then resets the values of the variables
$('.pages-vertical').on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', function() { 

/*

  1 State1: Hover over button, Do Nothing
  1 State2: Unhover over button, Do Nothing
  2 State3: Hover over button before button finishes Hover Animation and clicking it 
X 1 State4: Hover over button after button finishes Hover Animation and clicking it
  1 State5: After Clicking Slide Animation begins, Unhovers Button
  1 Stat6: Slide animation finishes

*/


  // if (ifButtonsAreUnHovered && ifScrollTransitioning) {
  //   ifButtonsAreHovered = false
  //   ifButtonsAreUnHovered = false
  //   console.log("Both");
  //   return;
  // }

  // if (ifButtonsAreHovered) {
  //   console.log("Hovering");
  // }

  // // For some reason, need this if statement because this function is called when hovering over buttons (Which also calls a type of transition animation)
  // if (ifButtonsAreUnHovered) {
  //   console.log("Unhovering")
  //   ifButtonsAreHovered = false
  //   ifButtonsAreUnHovered = false
  // }
  // // If the buttons are not hovered, or finished transitioning, then resets the variable to allow scrolling again
  // if (ifScrollTransitioning) {
  //   ifScrollTransitioning = false;
  //   console.log("onTransitionEnd");
  // }

  // STATE 6

  // // STATE 5
  // if (ifScrollTransitioning && ifButtonsAreUnHovering) {
  //   ifButtonsAreUnHovering = false;
  //   ifButtonsAreUnHovered = true;
  //   console.log("STATE 5");
  //   return;
  // }

  // // STATE 3
  // if (ifScrollTransitioning && ifButtonsAreHovering) {
  //   ifButtonsAreHovering = false;
  //   ifButtonsAreHovered = true;
  //   console.log("STATE 3");
  //   return;
  // }

  if (ifScrollTransitioning) {
    ifScrollTransitioning = false;
    reenableButtonAnimations();
  }

  if (ifButtonsAreUnHovering) {
    ifButtonsAreUnHovering = false;
    ifButtonsAreUnHovered = true;
  }

  if (ifButtonsAreHovering) {
    ifButtonsAreHovering = false;
    ifButtonsAreHovered = true;
  }
});

function upSlide() {
  disableButtonAnimations();
  if (divWindowPositionY <= 0 || ifScrollTransitioning) {
    return;
  }

  // Change color of the previous slide to transparent to indicate not on that slide
  changeColorOfDotsForNav(divWindowPositionY, "transparent");

  // Move to above slide
  --divWindowPositionY;

  // Change color of the dots to indicate which page user is currently on
  changeColorOfDotsForNav(divWindowPositionY, "white");

  // Changes the nav font colors depending on the background
  checkFontColorInNav();

  // Scrolling is now transitioning
  ifScrollTransitioning = true;

  // Moves the screen to the new page
  divHeight = $(window).height();
  topAttr = parseInt($('.pages-vertical').css('top'), 10);
  newUpPos = topAttr + divHeight
  $('.pages-vertical').css('top', newUpPos + 'px')
}

function downSlide() {
  disableButtonAnimations();
  if (divWindowPositionY >= VERTICALNUMBEROFPAGES - 1 || ifScrollTransitioning) {
    return;
  }

  // Change color of the previous slide to transparent to indicate not on that slide
  changeColorOfDotsForNav(divWindowPositionY, "transparent");

  // Move to below slide
  ++divWindowPositionY;

  // Change color of the dots to indicate which page user is currently on
  changeColorOfDotsForNav(divWindowPositionY, "white");

  // Changes the nav font colors depending on the background
  checkFontColorInNav();
  
  // Scrolling is now transitioning
  ifScrollTransitioning = true;

  // Moves the screen to the new page
  divHeight = $(window).height();
  topAttr = parseInt($('.pages-vertical').css('top'), 10);
  newDownPos = topAttr - divHeight
  $('.pages-vertical').css('top', newDownPos + 'px')
}

function leftSlide() {
  disableButtonAnimations();
  if(ifScrollTransitioning) {
    return;
  }
  
  // Change color of the previous slide to transparent to indicate not on that slide
  changeColorOfDotsForProjectNav(divWindowPositionX, "transparent");
  
  if (divWindowPositionX <= 0) {
    divWindowPositionX = HORIZONTALNUMBEROFPAGES - 1;  
  }
  else {
    // Move to previous slide
    --divWindowPositionX;
  }

  // Change color of the dots to indicate which page user is currently on
  changeColorOfDotsForProjectNav(divWindowPositionX, "white");

  // Changes the nav font colors depending on the background
  checkFontColorInNav();

  // Scrolling is now transitioning
  ifScrollTransitioning = true;

  divWidth = $(window).width();
  leftAttr = parseInt($('.pages-horizontal').css('left'), 10);
  newLeftPos = leftAttr + divWidth
  if (newLeftPos >= (divWidth)) {
    $('.pages-horizontal').css('left', 4 * -divWidth + 'px');
  }
  else {
    $('.pages-horizontal').css('left', newLeftPos + 'px')
  }
}

function rightSlide() {
  disableButtonAnimations();
  if(ifScrollTransitioning) {
    return;
  }

  // Change color of the previous slide to transparent to indicate not on that slide
  changeColorOfDotsForProjectNav(divWindowPositionX, "transparent");

  if (divWindowPositionX >= HORIZONTALNUMBEROFPAGES - 1) {
    divWindowPositionX = 0;  
  }
  else {
    // Move to next slide
    ++divWindowPositionX;
  }

  // Change color of the dots to indicate which page user is currently on
  changeColorOfDotsForProjectNav(divWindowPositionX, "white");

  // Changes the nav font colors depending on the background
  checkFontColorInNav();

  // Scrolling is now transitioning
  ifScrollTransitioning = true;

  divWidth = $(window).width();
  leftAttr = parseInt($('.pages-horizontal').css('left'), 10);
  newRightPos = leftAttr - divWidth;
  // If at the end of the sliding div, move back to the first page
  if (divWindowPositionX == 0) {
    $('.pages-horizontal').css('left', '0px');
  }
  // Moves to the right page
  else {
    $('.pages-horizontal').css('left', newRightPos + 'px');
  }
}

function disableButtonAnimations() {
  $('body').removeClass('disable-hover');
  // $('pages-vertical .pages').addClass('.notransition'); // Disable transitions  
  // $('pages-vertical .pages').addClass('.notransition'); // Disable transitions  
}

function reenableButtonAnimations() {
    $('body').addClass('disable-hover');
    // $('pages-vertical .up-slide-button')[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
    // $('pages-vertical .up-slide-button').removeClass('.notransition'); // Re-enable transitions
    // $('pages-vertical .down-slide-button')[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
    // $('pages-vertical .down-slide-button').removeClass('.notransition'); // Re-enable transitions
}

// function leftSlide() {
//   divWidth = $(window).width();
//   var leftAttr = $('.pages').css('left');
//   var slide1 = '0px';
//   var slide2 = -1 * divWidth + 'px'; // -100%
//   var slide3 = -2 * divWidth + 'px'; // -200%

//   if (leftAttr == slide1) {
//     $('.pages').css('left', '-200%');
//     $('#dot-slide-1').css('background-color', 'white');
//     $('#dot-slide-3').css('background-color', 'black');
//   }
//   else if (leftAttr == slide2) {
//     $('.pages').css('left', '0%');
//     $('#dot-slide-2').css('background-color', 'white');
//     $('#dot-slide-1').css('background-color', 'black');
//   }
//   else if (leftAttr == slide3) {
//     $('.pages').css('left', '-100%');
//     $('#dot-slide-3').css('background-color', 'white');
//     $('#dot-slide-2').css('background-color', 'black');
//   }
// }

// function rightSlide() {
//   divWidth = $(window).width();
//   var leftAttr = $('.pages').css('left');
//   var slide1 = '0px';
//   var slide2 = -1 * divWidth + 'px';
//   var slide3 = -2 * divWidth + 'px';
  
//   if (leftAttr == slide1) {
//     $('.pages').css('left', '-100%');
//     $('#dot-slide-1').css('background-color', 'white');
//     $('#dot-slide-2').css('background-color', 'black');
//   }
//   else if (leftAttr == slide2) {
//     $('.pages').css('left', '-200%');
//     $('#dot-slide-2').css('background-color', 'white');
//     $('#dot-slide-3').css('background-color', 'black');
//   }
//   else if (leftAttr == slide3) {
//     $('.pages').css('left', '0%');
//     $('#dot-slide-3').css('background-color', 'white');
//     $('#dot-slide-1').css('background-color', 'black');
//   }
// }