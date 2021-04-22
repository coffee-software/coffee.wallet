import {fastTap} from "../Tools/Fasttap";


export abstract class ListItemWidget {

    static activeWidget : ListItemWidget = null;
    element: HTMLElement;
    protected slidingRow: HTMLElement;
    centerCell: HTMLElement;
    leftCell: HTMLElement;
    rightCell: HTMLElement;
    leftButtons: HTMLElement;
    rightButtons: HTMLElement;

    private touchDiff: number;
    private startX: number;
    private startY: number;

    constructor() {

        this.element = document.createElement("div");
        this.element.classList.add('listingRow');
        this.slidingRow = document.createElement("div");
        this.slidingRow.classList.add('slidingRow');

        this.centerCell = document.createElement("div");
        this.centerCell.classList.add('unit');

        this.leftCell = document.createElement("div");
        this.leftCell.classList.add('left');

        this.rightCell = document.createElement("div");
        this.rightCell.classList.add('right');

        this.leftButtons = document.createElement("div");
        this.leftButtons.classList.add('buttons');
        this.leftButtons.classList.add('buttonsLeft');

        this.rightButtons = document.createElement("div");
        this.rightButtons.classList.add('buttons');
        this.rightButtons.classList.add('buttonsRight');


        this.element.appendChild(this.leftButtons);
        this.slidingRow.appendChild(this.leftCell);
        this.slidingRow.appendChild(this.centerCell);
        this.slidingRow.appendChild(this.rightCell);
        this.element.appendChild(this.rightButtons);
        this.element.appendChild(this.slidingRow);

        let stitch = document.createElement("div");
        stitch.classList.add('stitch2');
        this.element.appendChild(stitch);

        this.touchDiff = 0;

        this.slidingRow.addEventListener('touchstart', this.slidingRowTouchstart.bind(this));
        this.slidingRow.addEventListener('touchmove', this.slidingRowTouchmove.bind(this));
        this.slidingRow.addEventListener('touchend', this.slidingRowTouchend.bind(this));
    }

    private slidingRowTouchstart( event: TouchEvent ) {
        this.setActive();
        this.slidingRow.classList.add('touching');
        this.startX = event.touches[0].clientX + this.touchDiff;
        this.startY = event.touches[0].clientY;
    }

    private slidingRowTouchmove( event: TouchEvent ) {
        this.touchDiff = this.startX - event.touches[0].clientX;
        if (Math.abs(this.startY - event.touches[0].clientY) > 30) {
            this.touchDiff = 0;
        }
        //if (that.touchDiff > that.slidingRow.offsetWidth / 2) that.touchDiff = that.slidingRow.offsetWidth / 2;
        //if (that.touchDiff < - that.slidingRow.offsetWidth / 2) that.touchDiff = - that.slidingRow.offsetWidth / 2;
        this.slidingRow.style['transform'] = 'translate3d(' + -this.touchDiff + 'px,0,0)';
        this.leftButtons.classList.toggle('hidden', this.touchDiff > 0);
        this.rightButtons.classList.toggle('hidden', this.touchDiff < 0);
    }

    private slidingRowTouchend( event: TouchEvent ) {
        this.slidingRow.classList.remove('touching');
        if (this.touchDiff >  (this.rightButtons.offsetWidth / 2)) {
            this.touchDiff = this.rightButtons.offsetWidth;
        } else if (this.touchDiff < - (this.leftButtons.offsetWidth / 2)) {
            this.touchDiff = -this.leftButtons.offsetWidth;
        } else {
            this.touchDiff = 0;
            this.unsetActive();
        }
        this.slidingRow.style['transform'] = 'translate3d(' + -this.touchDiff + 'px,0,0)';
    }

    setActive(scroll: boolean = false) {
        if (ListItemWidget.activeWidget && ListItemWidget.activeWidget == this) return true;
        if (ListItemWidget.activeWidget) {
            ListItemWidget.activeWidget.element.classList.remove('active');
            ListItemWidget.activeWidget.touchDiff = 0;
            ListItemWidget.activeWidget.slidingRow.style['transform'] = 'translate3d(0,0,0)';
        }
        this.element.classList.add('active');
        ListItemWidget.activeWidget = this;
        if (scroll) {
            //TODO
            document.getElementById('wallets').parentElement.scrollTop = this.element.offsetTop - 54;
        }
    }

    unsetActive() {
        this.element.style['transform'] = 'translate3d(0,0,0)';
        this.element.classList.remove('active');
        if (ListItemWidget.activeWidget && ListItemWidget.activeWidget == this) ListItemWidget.activeWidget = null;
    }

    static createButton(icon: string, text: string, callback: ()=>void) : HTMLElement {
        let button = document.createElement("a");
        let img = document.createElement("img");
        img.setAttribute('src', 'icons/' + icon + '.png');
        button.appendChild(img);
        let label = document.createElement('div');
        label.innerHTML = text;
        button.appendChild(label);

        if (callback === null) {
            button.classList.add('disabled');
        } else {
            button.onclick = callback;
            fastTap(button);
        }
        let div = document.createElement("div");
        div.classList.add('button');
        div.appendChild(button);
        return div;
    }
}