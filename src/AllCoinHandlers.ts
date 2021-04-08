import {HandlerBtc} from "./Handlers/HandlerBtc";
import {HandlerEth} from "./Handlers/HandlerEth";
import {HandlerBtcTest} from "./Handlers/HandlerBtcTest";
import {HandlerEthTest} from "./Handlers/HandlerEthTest";
import {BaseCoinHandler, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {HandlerLtc} from "./Handlers/HandlerLtc";
import {HandlerDoge} from "./Handlers/HandlerDoge";


export const allCoinHandlers : { [code: string] : BaseCoinHandler } = {
    'BTC': new HandlerBtc(),
    'BTC.TST':  new HandlerBtcTest(),
    'ETH': new HandlerEth(),
    'ETH.TST': new HandlerEthTest(),
    'LTC': new HandlerLtc(),
    'DOGE': new HandlerDoge(),
    /*'BCH': new HandlerBch(),
    'BCH.TST': new HandlerBchTest(),
    'DASH': new HandlerDash(),*/
};

export function isOnlineCoinHanlder(toBeDetermined: BaseCoinHandler): toBeDetermined is OnlineCoinHandler {
    return ((toBeDetermined as OnlineCoinHandler).explorerLinkAddr('test') != null);
}
