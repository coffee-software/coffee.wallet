import {Keychain} from "./Keychain";
import * as BN from "bn.js";
import {OnlineCoinHandler, BaseCoinHandler} from "./Handlers/BaseCoinHandler";
import {PortfolioItem} from "./PortfolioItem";

export class Wallet {
    keychain: Keychain;
    handler: BaseCoinHandler;
    portfolio: PortfolioItem[] = [];

    constructor(
        handler: BaseCoinHandler,
        keychain: Keychain
    ) {
        this.handler = handler;
        this.keychain = keychain;
    }

    getBalance() : BN {
        //(<OnlineCoinHandler>this.handler).getBalance()
        return new BN(0);
    }
}
