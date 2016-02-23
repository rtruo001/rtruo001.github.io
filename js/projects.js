/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// When a dot in the project nav section is clicked, move the slide to that specific slide
function goToProjectClickedSlide(divId) {
  disableButtonAnimations();
  ifScrollTransitioning = true;
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  if (divId == 'project-dot-1') {
    $('.pages-horizontal').css('left', '0px');
    $('#project-dot-1').css('background-color', 'white');
    $('#project-dot-2').css('background-color', 'transparent');
    $('#project-dot-3').css('background-color', 'transparent');
    $('#project-dot-4').css('background-color', 'transparent');
    $('#project-dot-5').css('background-color', 'transparent');
    if (divWindowPositionX == 0) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionX = 0;
  }
  else if (divId == 'project-dot-2') {
    $('.pages-horizontal').css('left', -screenWidth + 'px');
    $('#project-dot-1').css('background-color', 'transparent');
    $('#project-dot-2').css('background-color', 'white');
    $('#project-dot-3').css('background-color', 'transparent');
    $('#project-dot-4').css('background-color', 'transparent');
    $('#project-dot-5').css('background-color', 'transparent');
    if (divWindowPositionX == 1) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();  
    }
    divWindowPositionX = 1;
  }
  else if (divId == 'project-dot-3') {
    $('.pages-horizontal').css('left', (2 * -screenWidth) + 'px');
    $('#project-dot-1').css('background-color', 'transparent');
    $('#project-dot-2').css('background-color', 'transparent');
    $('#project-dot-3').css('background-color', 'white');
    $('#project-dot-4').css('background-color', 'transparent');
    $('#project-dot-5').css('background-color', 'transparent');
    if (divWindowPositionX == 2) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionX = 2;
  }
  else if (divId == 'project-dot-4') {
    $('.pages-horizontal').css('left', (3 * -screenWidth) + 'px');
    $('#project-dot-1').css('background-color', 'transparent');
    $('#project-dot-2').css('background-color', 'transparent');
    $('#project-dot-3').css('background-color', 'transparent');
    $('#project-dot-4').css('background-color', 'white');
    $('#project-dot-5').css('background-color', 'transparent');
    if (divWindowPositionX == 3) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionX = 3;
  }
  else if (divId == 'project-dot-5') {
    $('.pages-horizontal').css('left', (4 * -screenWidth) + 'px');
    $('#project-dot-1').css('background-color', 'transparent');
    $('#project-dot-2').css('background-color', 'transparent');
    $('#project-dot-3').css('background-color', 'transparent');
    $('#project-dot-4').css('background-color', 'transparent');
    $('#project-dot-5').css('background-color', 'white');
    if (divWindowPositionX == 4) {
      ifScrollTransitioning = false;
      reenableButtonAnimations();
    }
    divWindowPositionX = 4;
  }
  // Changes the nav font colors depending on the background
  checkFontColorInNav();
}

// Change the colors of the dots depending on which dot is moved
function changeColorOfDotsForProjectNav(dotNum, dotState) {
  var dotChosen = "#project-dot-" + (dotNum + 1);
  $(dotChosen).css('background-color', dotState);
}