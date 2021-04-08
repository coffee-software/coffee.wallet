"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerBtc_1 = require("./Handlers/HandlerBtc");
var HandlerEth_1 = require("./Handlers/HandlerEth");
var HandlerBtcTest_1 = require("./Handlers/HandlerBtcTest");
var HandlerEthTest_1 = require("./Handlers/HandlerEthTest");
var HandlerLtc_1 = require("./Handlers/HandlerLtc");
var HandlerDoge_1 = require("./Handlers/HandlerDoge");
exports.allCoinHandlers = {
    'BTC': new HandlerBtc_1.HandlerBtc(),
    'BTC.TST': new HandlerBtcTest_1.HandlerBtcTest(),
    'ETH': new HandlerEth_1.HandlerEth(),
    'ETH.TST': new HandlerEthTest_1.HandlerEthTest(),
    'LTC': new HandlerLtc_1.HandlerLtc(),
    'DOGE': new HandlerDoge_1.HandlerDoge(),
};
function isOnlineCoinHanlder(toBeDetermined) {
    return (toBeDetermined.explorerLinkAddr('test') != null);
}
exports.isOnlineCoinHanlder = isOnlineCoinHanlder;
//# sourceMappingURL=AllCoinHandlers.js.map