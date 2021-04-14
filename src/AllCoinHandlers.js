"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerBtc_1 = require("./Handlers/HandlerBtc");
var HandlerEth_1 = require("./Handlers/HandlerEth");
var HandlerBtcTest_1 = require("./Handlers/HandlerBtcTest");
var HandlerEthTest_1 = require("./Handlers/HandlerEthTest");
var HandlerLtc_1 = require("./Handlers/HandlerLtc");
var HandlerDoge_1 = require("./Handlers/HandlerDoge");
var PortfolioOnlyHandler_1 = require("./Handlers/PortfolioOnlyHandler");
function createAllCoinHandlers(log, cache) {
    return {
        'BTC': new HandlerBtc_1.HandlerBtc(log, cache),
        'BTC.TST': new HandlerBtcTest_1.HandlerBtcTest(log, cache),
        'ETH': new HandlerEth_1.HandlerEth(log, cache),
        'ETH.TST': new HandlerEthTest_1.HandlerEthTest(log, cache),
        'LTC': new HandlerLtc_1.HandlerLtc(log, cache),
        'DOGE': new HandlerDoge_1.HandlerDoge(log, cache),
        'BCH': new PortfolioOnlyHandler_1.PortfolioOnlyHandler('BCH', 'Bitcoin Cash', 'bch', 'via bitcoin.com: Bitcoin Cash (BCH) is a peer-to-peer electronic cash system. ' +
            'It is a consensus network that enables a new type of payment method and a completely digital form of money. ' +
            'It is a decentralized peer-to-peer payment network that is powered by its users with no central authority or middlemen.'),
        'BCH.TST': new PortfolioOnlyHandler_1.PortfolioOnlyHandler('BCH.TST', 'Bitcoin Cash TestNet', 'bch.test', 'via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. ' +
            'Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value.'),
        'DASH': new PortfolioOnlyHandler_1.PortfolioOnlyHandler('DASH', 'Dash', 'dash', 'Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. ' +
            'It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes".'),
        'ERC20.TST': new HandlerEthTest_1.ERC20TestHandler(log, cache, 'ERC20.TST', 'ERC20 Test Tokens', 'erc20.tst', '0x251735ff853720582345c64cdb4eb44bd02e61a2', 18),
        'WEENUS.TST': new HandlerEthTest_1.ERC20TestHandler(log, cache, 'WEENUS.TST', 'WEENUS Test Tokens', 'noicon', '0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA', 18),
        'YEENUS.TST': new HandlerEthTest_1.ERC20TestHandler(log, cache, 'YEENUS.TST', 'YEENUS Test Tokens', 'noicon', '0xF6fF95D53E08c9660dC7820fD5A775484f77183A', 8),
        'ZEENUS.TST': new HandlerEthTest_1.ERC20TestHandler(log, cache, 'ZEENUS.TST', 'ZEENUS Test Tokens', 'noicon', '0xC84f8B669Ccb91C86AB2b38060362b9956f2De52', 0),
    };
}
exports.createAllCoinHandlers = createAllCoinHandlers;
function isOnlineCoinHanlder(toBeDetermined) {
    return ('explorerLinkAddr' in toBeDetermined);
}
exports.isOnlineCoinHanlder = isOnlineCoinHanlder;
//# sourceMappingURL=AllCoinHandlers.js.map