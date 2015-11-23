/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// CONSTANTS
var VERTICALNUMBEROFPAGES = 3;
var HORIZONTALNUMBEROFPAGES = 3;

// 2D Array of all the pages formatted in their correct order
var pagesArray = new Array(VERTICALNUMBEROFPAGES)

// The current page the screen is at
var currPage = $('#main-splash-screen-section');

$(document).ready(function() {
  console.log("Welcome to my website!");
  window.scrollTo(0, 0);
  initPagesArray();
  checkScreenSize();
});

function initPagesArray() {
  for (var i = 0; i < VERTICALNUMBEROFPAGES; ++i) {
    pagesArray[i] = new Array(HORIZONTALNUMBEROFPAGES)
  }

  // First page
  pagesArray[0][0] = '#main-splash-screen-section';

  // Second page
  pagesArray[1][0] = '#work-experience-section'
  
  // Third row of pages
  pagesArray[2][0] = '#project-1'
  pagesArray[2][1] = '#project-2'
  pagesArray[2][2] = '#project-3'
}

// Used for when the screen is resized
$(window).resize(checkScreenSize);

function checkScreenSize() {
  // $('#main-splash-screen-section').width($(window).width());
  // $('#main-splash-screen-section').height($(window).height());
  $('.page').width($(window).width());
  $('.page').height($(window).height());

  // $('#work-experience-section').width($(window).width());
  // $('#work-experience-section').height($(window).height());

  for (var i = 0; i < VERTICALNUMBEROFPAGES; ++i) {
    for (var j = 0; j < HORIZONTALNUMBEROFPAGES; ++j) {
      if (pagesArray[i][j] != null && pagesArray[i][j] != undefined) {
        $(pagesArray[i][j]).width($(window).width());
        $(pagesArray[i][j]).height($(window).height());
      }
    }
  }

  $('.pages-vertical').width($(window).width());
  $('.pages-vertical').height($(window).height());
  $('.pages-horizontal').width($(window).width());
  $('.pages-horizontal').height($(window).height());
  moveToTopOfCurrentDiv();
}

function moveToTopOfCurrentDiv() {
// $.scrollTo($(pagesArray[divWindowPositionY][divWindowPositionX]), 0);
  // $(window).scrollTop($(pagesArray[divWindowPositionY][divWindowPositionX]).offsetHeight);


  var positionOfCurrDiv = $(pagesArray[divWindowPositionY][divWindowPositionX]).offset()
  var divTop = parseInt(positionOfCurrDiv.top, 10);
  var divLeft = parseInt(positionOfCurrDiv.left, 10);

  // I don't know how to explain this
  // This is pretty crazy
  if (divTop != 0) {
    var topAttr = parseInt($('.pages-vertical').css('top'), 10) - divTop;
    $('.pages-vertical').css('top', topAttr + 'px')
  }
  if (divLeft != 0) {
    var leftAttr = parseInt($('.pages-horizontal').css('left'), 10) - divLeft;
    $('.pages-horizontal').css('left', leftAttr + 'px')
  }

  // $('html, body').animate({
  //   scrollTop: positionOfCurrDiv.top
  // }, 0);

  // // for (var i = 0; i < divWindowPositionY; ++i) {
  // //   totalHeightToMove += $(window).height();
  // // }

  // var totalHeightToMove = 0;

  // for (var i = 0; i < divWindowPositionY; ++i) {
  //   totalHeightToMove += $(window).height();
  // }
  // console.log(totalHeightToMove);
  // window.scrollTo(0, 0);
}

