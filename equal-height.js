/*--Responsive breakpoints check--start--*/
var _windowWidth = window.innerWidth || jQuery(window).width();
var _view = 0;
if (_windowWidth < 401) _view = 1;
else if (_windowWidth >= 401 && _windowWidth < 501) _view = 2;
else if (_windowWidth >= 501 && _windowWidth < 768) _view = 3;
else if (_windowWidth >= 768 && _windowWidth < 991) _view = 4;
else if (_windowWidth >= 991 && _windowWidth < 1200) _view = 5;
else _view = 6;
/*--Responsive breakpoints check--ends--*/

/*--GENERIC FUNCTION TO KEEP CONTENT HEIGHT SAME ON ALL SIBLINGS----STARTS --*/
function genericSetHeightForAllSiblings(
  allItems,
  newWindowView,
  autoBreakPoint
) {
  var highestItem;
  for (i = 0; i < allItems.length; i++) {
    highestItem = 0;
    for (j = 0; j < allItems[i].length; j++) {
      if (newWindowView > autoBreakPoint) {
        allItems[i].each(function() {
          jQuery(this).css("min-height", "auto");
          var thisHeight = jQuery(this).height();
          if (thisHeight > highestItem) highestItem = thisHeight;
        });
        allItems[i].each(function() {
          jQuery(this).css("min-height", highestItem);
        });
      } else {
        allItems[i].each(function() {
          jQuery(this).css("min-height", "auto");
        });
      }
    }
  }
}
/*----GENERIC FUNCTION TO KEEP CONTENT HEIGHT SAME ON ALL SIBLINGS----ENDS ---*/

/*--Equal Height function start--*/
function functionName(newWindowView) {
  var container = jQuery(".container"),
    allItems = [];
  if (container.length > 0) {
    allItems.push(container.find("child_Element"));
    allItems.push(container.find("child_Elemnt_if_more"));
    genericSetHeightForAllSiblings(allItems, newWindowView, 3);
  }
}
/*--Equal Height function end--*/

/* Ready function */
jQuery(document).ready(function($) {
  functionName(_view);
});

/**
 * WINDOW RESIZE FUNCTION STARTS
 */
jQuery(window).on("resize", function() {
  var re_windowWidth = window.innerWidth || jQuery(window).width();
  var re_view = 0;
  if (re_windowWidth < 401) re_view = 1;
  else if (re_windowWidth >= 401 && re_windowWidth < 501) re_view = 2;
  else if (re_windowWidth >= 501 && re_windowWidth < 768) re_view = 3;
  else if (re_windowWidth >= 768 && re_windowWidth < 991) re_view = 4;
  else if (re_windowWidth >= 991 && re_windowWidth < 1200) re_view = 5;
  else re_view = 6;

  //little delay after resize
  setTimeout(function() {
    /*---Value Features content height----*/
    functionName(re_view);

    if (_view != re_view) {
      /**
       * keep View and WindowWidth variables at the end of if
       */
      _view = re_view;
      _windowWidth = re_windowWidth;
    } //IF BREAKPOINT MEETS
  }, 250);
  //little delay after resize
});
//WINDOW RESIZE ENDS
