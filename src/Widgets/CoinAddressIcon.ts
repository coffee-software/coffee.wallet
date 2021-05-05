import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {isOnlineCoinHanlder} from "../AllCoinHandlers";
import {Widget} from "./Widget";

let jazzicons = require('@metamask/jazzicon');

export class CoinAddressIcon implements Widget {

    element: HTMLElement

    constructor(handler : BaseCoinHandler, address : string = null) {
        if (address && isOnlineCoinHanlder(handler)) {
            console.log(jazzicons(100, handler.getIdenticonSeed(address)).outerHTML);
            this.element = jazzicons(100, handler.getIdenticonSeed(address));
            this.element.children[0].setAttribute("viewBox", "0 0 100 100");
            this.element.children[0].removeAttribute("width");
            this.element.children[0].removeAttribute("height");
            (this.element.children[0] as HTMLElement).style.display = 'block';
            this.element.style.borderRadius = '50%'
            this.element.style.width = '100%'
            this.element.style.height = '100%'
        } else {
            this.element = document.createElement('img');
            this.element.setAttribute("class", "coinIcon");
            this.element.setAttribute("src", "coins/noicon.svg");
        }
    }
}