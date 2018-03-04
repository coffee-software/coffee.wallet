'use strict'

/**
  simple fix for 300ms click delay on iOS
**/

var fastTapElement = null;
var fastTapStart = null;
var fastTapBoundary = 10;

function fastTap(target, handler) {

  target.addEventListener('touchstart', function(event) {
      fastTapElement = event.target;
      fastTapStart = [event.targetTouches[0].pageX, event.targetTouches[0].pageY];
      return true;
  });

  target.addEventListener('touchend', function(event) {
    if (fastTapElement == event.target) {
      if ((Math.abs(event.changedTouches[0].pageX - fastTapStart[0]) < fastTapBoundary)
          && (Math.abs(event.changedTouches[0].pageY - fastTapStart[1]) < fastTapBoundary)) {
            fastTapElement = null;
            if (!handler()) {
              event.preventDefault();
              return false;
            }
      }
    }
    return true;
  });
}
