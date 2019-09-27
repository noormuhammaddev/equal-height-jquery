# Equal Height for sibling childs - jQuery

This is the robust solution to make equal height for same child elements inside sibling containers. You just need to pull down the code and follow the following steps to make this code work for you.

## Setup
To get started, simply clone this repository and use the code step by step.

### Step-1
Use this code to make basic configuration on the top of your .js file.
```
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
```

### Step-2
Use the following code to call for specific section.
```
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
```
