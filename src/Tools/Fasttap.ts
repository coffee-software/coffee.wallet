'use strict'

/**
 simple fix for 300ms click delay on mobile browsers
 **/

let fastTapElement : EventTarget = null;
let fastTapStart : number[] = null;
let fastTapBoundary = 10;

export function fastTap(target: HTMLElement) {

    target.addEventListener('touchstart', function(event) {
        fastTapElement = event.target;
        fastTapStart = [event.targetTouches[0].pageX, event.targetTouches[0].pageY];
        return true;
    });

    target.addEventListener('touchend', function(event) {
        if (fastTapElement == event.target) {
            if ((Math.abs(event.changedTouches[0].pageX - fastTapStart[0]) < fastTapBoundary)
                && (Math.abs(event.changedTouches[0].pageY - fastTapStart[1]) < fastTapBoundary)) {
                event.preventDefault();
                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
                if (fastTapElement instanceof HTMLElement) {
                    fastTapElement.click();
                }
                fastTapElement = null;
                return false;
            }
        }
        return true;
    });
}
