import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {fastTap} from "../Tools/Fasttap";

export class CoinButtonWidget {

    element: HTMLAnchorElement

    constructor(code: string, handler: BaseCoinHandler, active : boolean, onClick : (code: string, handler: BaseCoinHandler) => void) {
        this.element = document.createElement("a");
        this.element.classList.add('coinButton');

        let img = document.createElement("img");
        img.classList.add('coinIcon');
        img.setAttribute('src', 'coins/' + handler.icon + '.svg');
        this.element.appendChild(img);

        this.element.appendChild(document.createElement("br"));

        let span = document.createElement("span");
        span.innerHTML = handler.ticker;
        this.element.appendChild(span);

        this.element.classList.toggle('active', active);
        this.element.onclick = function(){
            onClick(code, handler);
        }
        fastTap(this.element);
    }
}