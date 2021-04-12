import {HandlerBtc} from "./Handlers/HandlerBtc";
import {HandlerEth} from "./Handlers/HandlerEth";
import {HandlerBtcTest} from "./Handlers/HandlerBtcTest";
import {HandlerEthTest} from "./Handlers/HandlerEthTest";
import {BaseCoinHandler, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {HandlerLtc} from "./Handlers/HandlerLtc";
import {HandlerDoge} from "./Handlers/HandlerDoge";
import {CacheWrapper, LogInterface} from "./Engine";
import {PortfolioOnlyHandler} from "./Handlers/PortfolioOnlyHandler";

export function createAllCoinHandlers(log: LogInterface, cache: CacheWrapper) : { [code: string] : BaseCoinHandler } {
    return {
        'BTC': new HandlerBtc(log, cache),
        'BTC.TST': new HandlerBtcTest(log, cache),
        'ETH': new HandlerEth(log, cache),
        'ETH.TST': new HandlerEthTest(log, cache),
        'LTC': new HandlerLtc(log, cache),
        'DOGE': new HandlerDoge(log, cache),
        'BCH': new PortfolioOnlyHandler(
            'BCH', 'Bitcoin Cash', 'bch',
            'via bitcoin.com: Bitcoin Cash (BCH) is a peer-to-peer electronic cash system. ' +
            'It is a consensus network that enables a new type of payment method and a completely digital form of money. ' +
            'It is a decentralized peer-to-peer payment network that is powered by its users with no central authority or middlemen.'
        ),
        'BCH.TST': new PortfolioOnlyHandler(
            'BCH.TST', 'Bitcoin Cash TestNet', 'bch.test',
            'via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. ' +
            'Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value.'
        ),
        'DASH': new PortfolioOnlyHandler(
            'DASH', 'Dash', 'dash',
            'Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. ' +
            'It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes".'
        ),
    }
}

export function isOnlineCoinHanlder(toBeDetermined: BaseCoinHandler): toBeDetermined is OnlineCoinHandler {
    return ('explorerLinkAddr' in (toBeDetermined as OnlineCoinHandler));
}
