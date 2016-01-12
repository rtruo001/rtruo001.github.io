/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// When a dot in the nav section is clicked, move the slide to that specific slide
function goToClickedSlide(div) {
  disableButtonAnimations();
  ifScrollTransitioning = true;
  var divId = $(div).attr('id');
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  if (divId == 'dot-slide-1') {
    $('.pages-vertical').css('top', '0px');
    $('#dot-1').css('background-color', 'white');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'transparent');
    // For when the slide clicked is already at its position
    if (divWindowPositionY == 0) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }    
    divWindowPositionY = 0;
  }
  else if (divId == 'dot-slide-2') {
    $('.pages-vertical').css('top', -screenHeight + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'white');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'transparent');
    if (divWindowPositionY == 1) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionY = 1;
  }
  else if (divId == 'dot-slide-3') {
    $('.pages-vertical').css('top', (2 * -screenHeight) + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'white');
    $('#dot-4').css('background-color', 'transparent');
    if (divWindowPositionY == 2) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionY = 2;
  }
  else if (divId == 'dot-slide-4') {
    $('.pages-vertical').css('top', (3 * -screenHeight) + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'white');
    if (divWindowPositionY == 3) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionY = 3;
  }
  // Changes the nav font colors depending on the background
  checkFontColorInNav();
}

// Changes the color of the text in the nav depending on which background the page is currently at
// Does this in order to easily see the nav text as pages change
function checkFontColorInNav() {
  if (pagesArray[divWindowPositionY][divWindowPositionX] == '#work-experience-section' ||
      pagesArray[divWindowPositionY][divWindowPositionX] == '#main-splash-screen-section' ||
      pagesArray[divWindowPositionY][divWindowPositionX] == '#project-1' ||
      // pagesArray[divWindowPositionY][divWindowPositionX] == '#project-3' ||
      pagesArray[divWindowPositionY][divWindowPositionX] == '#contact-section') {
    $('nav').css('color', 'white');  
  }
  else {
    $('nav').css('color', 'black');
  }
}

// Change the colors of the dots depending on which dot is moved
function changeColorOfDotsForNav(dotNum, dotState) {
  var dotChosen = "#dot-" + (dotNum + 1);
  $(dotChosen).css('background-color', dotState);
}