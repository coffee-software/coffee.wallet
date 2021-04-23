import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {fastTap} from "../Tools/Fasttap";

export class CoinButtonWidget {

    element: HTMLAnchorElement
    code: string
    handler: BaseCoinHandler
    onClick : (code: string, handler: BaseCoinHandler) => void

    constructor(code: string, handler: BaseCoinHandler, active : boolean, onClick : (code: string, handler: BaseCoinHandler) => void) {
        this.code = code
        this.handler = handler
        this.onClick = onClick
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
        this.element.onclick = this.onClickHandler.bind(this)
        fastTap(this.element);
    }

    onClickHandler() {
        this.element.classList.add('active');
        this.onClick(this.code, this.handler);
    }
}