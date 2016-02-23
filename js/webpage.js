/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// CONSTANTS
var VERTICALNUMBEROFPAGES = 4;
var HORIZONTALNUMBEROFPAGES = 5;

// 2D Array of all the pages formatted in their correct order
var pagesArray = new Array(VERTICALNUMBEROFPAGES)

// The current page the screen is at
var currPage = $('#main-splash-screen-section');

// When the webpage begins, Start with this function
$(document).ready(function() {
  console.log("Welcome to my website!");
  // Defaults scrolls to the first page
  window.scrollTo(0, 0);
  initPagesArray();
  checkScreenSize();
});

// Initialize the array with all of the ID's of each page for webpage
function initPagesArray() {
  for (var i = 0; i < VERTICALNUMBEROFPAGES; ++i) {
    pagesArray[i] = new Array(HORIZONTALNUMBEROFPAGES);
  }

  // Need to put multiple same ID's in different the same row due to changing nav color

  // First page
  pagesArray[0][0] = '#main-splash-screen-section';
  pagesArray[0][1] = '#main-splash-screen-section';
  pagesArray[0][2] = '#main-splash-screen-section';
  pagesArray[0][3] = '#main-splash-screen-section';
  pagesArray[0][4] = '#main-splash-screen-section';


  // Second page
  pagesArray[1][0] = '#work-experience-section';
  pagesArray[1][1] = '#work-experience-section';
  pagesArray[1][2] = '#work-experience-section';
  pagesArray[1][3] = '#work-experience-section';
  pagesArray[1][4] = '#work-experience-section';

  
  // Third row of pages
  pagesArray[2][0] = '#project-1';
  pagesArray[2][1] = '#project-2';
  pagesArray[2][2] = '#project-3';
  pagesArray[2][3] = '#project-4';
  pagesArray[2][4] = '#project-5';

  // Fourth page
  pagesArray[3][0] = '#contact-section';
  pagesArray[3][1] = '#contact-section';
  pagesArray[3][2] = '#contact-section';
  pagesArray[3][3] = '#contact-section';
  pagesArray[3][4] = '#contact-section';
}

// Used for when the screen is resized
$(window).resize(checkScreenSize);

function checkScreenSize() {
  // Keeps the pages as same size as the screen
  $('.page').width($(window).width());
  $('.page').height($(window).height());

  // Keeps the nav background same size as the nav
  $('.nav-background').width($('nav').innerWidth());  

  for (var i = 0; i < VERTICALNUMBEROFPAGES; ++i) {
    for (var j = 0; j < HORIZONTALNUMBEROFPAGES; ++j) {
      if (pagesArray[i][j] != null && pagesArray[i][j] != undefined) {
        $(pagesArray[i][j]).width($(window).width());
        $(pagesArray[i][j]).height($(window).height());
      }
    }
  }

  // Sets the width and hiehgt appropriately for the pages
  $('.pages-vertical').width($(window).width());
  $('.pages-vertical').height($(window).height());
  $('.pages-horizontal').width($(window).width());
  $('.pages-horizontal').height($(window).height());

  // Horizontally centers specific divs
  horizontallyCenterInDiv('.project-dots');
  horizontallyCenterInDiv('.up-slide-button');
  horizontallyCenterInDiv('.down-slide-button');

  // Vertically centers specific divs
  verticallyCenterInDiv('.left-slide-button');
  verticallyCenterInDiv('.right-slide-button');

  // Adjust the position of the screen to the beginning of the current page
  moveToTopOfCurrentDiv();

  // adjustHeights(".about-me-text");
}

// Adjusts the height and font within the element
function adjustHeights(elem) {
  var fontstep = 2;
  if ($(elem).height()>$(elem).parent().height() || $(elem).width()>$(elem).parent().width()) {
    $(elem).css('font-size',(($(elem).css('font-size').substr(0,2)-fontstep)) + 'px').css('line-height',(($(elem).css('font-size').substr(0,2))) + 'px');
    adjustHeights(elem);
  }
}

// Centers a div horizontally within a div
function horizontallyCenterInDiv(divName) {
  $(divName).css('left', (($(window).width() / 2) - ($(divName).width() / 2)) + 'px');
}

// Centers a div vertically within a div
function verticallyCenterInDiv(divName) {
  $(divName).css('top', (($(window).height() / 2) - ($(divName).height() / 2)) + 'px');
}

// Adjust the position of the screen to the beginning of the current page
function moveToTopOfCurrentDiv() {
  var positionOfCurrDiv = $(pagesArray[divWindowPositionY][divWindowPositionX]).offset()
  var divTop = parseInt(positionOfCurrDiv.top, 10);
  var divLeft = parseInt(positionOfCurrDiv.left, 10);

  // I don't know how to explain this
  // This is pretty crazy
  // But makes complete sense
  if (divTop != 0) {
    var topAttr = parseInt($('.pages-vertical').css('top'), 10) - divTop;
    $('.pages-vertical').css('top', topAttr + 'px')
  }
  if (divLeft != 0) {
    var leftAttr = parseInt($('.pages-horizontal').css('left'), 10) - divLeft;
    $('.pages-horizontal').css('left', leftAttr + 'px')
  }
}

