import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {isOnlineCoinHanlder} from "../AllCoinHandlers";

let jazzicons = require('@metamask/jazzicon');

export class CoinAddressIcon  {

    element: HTMLElement

    constructor(handler : BaseCoinHandler, address : string = null) {
        if (address && isOnlineCoinHanlder(handler)) {
            this.element = jazzicons(100, handler.getIdenticonSeed(address)).children[0];
            this.element.setAttribute("viewBox", "0 0 100 100");
            this.element.removeAttribute("width");
            this.element.removeAttribute("height");
            this.element.style.borderRadius = '50%';
        } else {
            this.element = document.createElement('img');
            this.element.setAttribute("class", "coinIcon");
            this.element.setAttribute("src", "coins/noicon.svg");
        }
    }
}