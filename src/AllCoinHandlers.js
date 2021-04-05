"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerBtc_1 = require("./Handlers/HandlerBtc");
var HandlerEth_1 = require("./Handlers/HandlerEth");
exports.allCoinHandlers = {
    'BTC': new HandlerBtc_1.HandlerBtc(),
    'BTC.TST': new HandlerBtc_1.HandlerBtc(),
    'ETH': new HandlerEth_1.HandlerEth(),
    'ETH.TST': new HandlerEth_1.HandlerEth(),
    'LTC': new HandlerBtc_1.HandlerBtc(),
    'DOGE': new HandlerBtc_1.HandlerBtc(),
    'BCH': new HandlerBtc_1.HandlerBtc(),
    'BCH.TST': new HandlerBtc_1.HandlerBtc(),
};
//# sourceMappingURL=AllCoinHandlers.js.map