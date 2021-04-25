import {HandlerBtc} from "./Handlers/HandlerBtc";
import {HandlerEth} from "./Handlers/HandlerEth";
import {HandlerBtcTest} from "./Handlers/HandlerBtcTest";
import {ERC20TestHandler, HandlerEthTest} from "./Handlers/HandlerEthTest";
import {BaseCoinHandler, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {HandlerLtc} from "./Handlers/HandlerLtc";
import {HandlerDoge} from "./Handlers/HandlerDoge";
import {CacheWrapper, LogInterface} from "./Engine";
import {PortfolioOnlyHandler} from "./Handlers/PortfolioOnlyHandler";
import {HandlerDash} from "./Handlers/HandlerDash";

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
        'DASH': new HandlerDash(log, cache),
        'ERC20.TST': new ERC20TestHandler(
            log,
            cache,
            'ERC20.TST',
            'ERC20 Test Tokens',
            'erc20.tst',
            '0x251735ff853720582345c64cdb4eb44bd02e61a2',
            18
        ),
        'WEENUS.TST': new ERC20TestHandler(
            log,
            cache,
            'WEENUS.TST',
            'WEENUS Test Tokens',
            'noicon',
            '0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA',
            18
        ),
        'YEENUS.TST': new ERC20TestHandler(
            log,
            cache,
            'YEENUS.TST',
            'YEENUS Test Tokens',
            'noicon',
            '0xF6fF95D53E08c9660dC7820fD5A775484f77183A',
            8
        ),
        'ZEENUS.TST': new ERC20TestHandler(
            log,
            cache,
            'ZEENUS.TST',
            'ZEENUS Test Tokens',
            'noicon',
            '0xC84f8B669Ccb91C86AB2b38060362b9956f2De52',
            0
        ),
    }
}

export function isOnlineCoinHanlder(toBeDetermined: BaseCoinHandler): toBeDetermined is OnlineCoinHandler {
    return ('explorerLinkAddr' in (toBeDetermined as OnlineCoinHandler));
}
