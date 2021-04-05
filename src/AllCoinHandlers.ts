import {HandlerBtc} from "./Handlers/HandlerBtc";
import {HandlerEth} from "./Handlers/HandlerEth";

export var allCoinHandlers = {
    'BTC': new HandlerBtc(),
    'BTC.TST': new HandlerBtc(),
    'ETH': new HandlerEth(),
    'ETH.TST': new HandlerEth(),
    'LTC': new HandlerBtc(),
    'DOGE': new HandlerBtc(),
    'BCH': new HandlerBtc(),
    'BCH.TST': new HandlerBtc(),
};
