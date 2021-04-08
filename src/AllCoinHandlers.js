"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerBtc_1 = require("./Handlers/HandlerBtc");
var HandlerEth_1 = require("./Handlers/HandlerEth");
var HandlerBtcTest_1 = require("./Handlers/HandlerBtcTest");
exports.allCoinHandlers = {
    'BTC': new HandlerBtc_1.HandlerBtc(),
    'BTC.TST': new HandlerBtcTest_1.HandlerBtcTest(),
    'ETH': new HandlerEth_1.HandlerEth(),
    'ETH.TST': new HandlerEth_1.HandlerEth(),
};
//# sourceMappingURL=AllCoinHandlers.js.map