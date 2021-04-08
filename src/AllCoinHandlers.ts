import {HandlerBtc} from "./Handlers/HandlerBtc";
import {HandlerEth} from "./Handlers/HandlerEth";
import {HandlerBtcTest} from "./Handlers/HandlerBtcTest";

export var allCoinHandlers = {
    'BTC': new HandlerBtc(),
    'BTC.TST': new HandlerBtcTest(),
    'ETH': new HandlerEth(),
    'ETH.TST': new HandlerEth(),
   /* 'LTC': new HandlerLtc(),
    'DOGE': new HandlerDoge(),
    'BCH': new HandlerBch(),
    'BCH.TST': new HandlerBchTest(),
    'DASH': new HandlerDash(),*/
};
