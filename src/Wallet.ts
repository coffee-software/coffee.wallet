import {Keychain} from "./Keychain";
import {OnlineCoinHandler, BaseCoinHandler, Balance, NewTransaction} from "./Handlers/BaseCoinHandler";
import {PortfolioItem} from "./PortfolioItem";
import {isOnlineCoinHanlder} from "./AllCoinHandlers";
import {BigNum} from "./Core/BigNum";
import {Engine} from "./Engine";


export interface TransactionSender {
    handler: BaseCoinHandler;
    prepareTransaction(receiverAddr : string, amount : BigNum|"MAX", fee: number) : Promise<NewTransaction>
}

export class PrivateKeySender implements TransactionSender {
    handler: OnlineCoinHandler;
    privateKey: string

    constructor(
        handler: OnlineCoinHandler,
        privateKey: string
    ) {
        this.handler = handler;
        this.privateKey = privateKey;
    }

    async prepareTransaction(receiverAddr : string,
                             amount : BigNum|"MAX",
                             fee: number) : Promise<NewTransaction> {
        return await this.handler.prepareTransaction(this.privateKey, receiverAddr, amount, fee);
    }
}

export class Wallet implements TransactionSender {
    keychain: Keychain;
    handler: BaseCoinHandler;
    engine: Engine;
    code: string;
    portfolio: PortfolioItem[] = [];

    constructor(
        engine: Engine,
        code: string,
        handler: BaseCoinHandler,
        keychain: Keychain
    ) {
        this.engine = engine;
        this.code = code;
        this.handler = handler;
        this.keychain = keychain;
    }

    isOnline() : boolean {
        return isOnlineCoinHanlder(this.handler);
    }
    canSendViaMessage() : boolean {
        return isOnlineCoinHanlder(this.handler) && this.handler.canSendViaMessage()
    }

    getReceiveAddress() : string {
        if (isOnlineCoinHanlder(this.handler)) {
            return this.handler.getReceiveAddr(this.keychain);
        }
    }

    private getRawCachedBalance(key: string, returnNull: boolean = false) : Balance {
        let cached = this.engine.getCache('wallet.' + this.code + '.' + key, null);
        if (cached !== null) {
            return new Balance(this.handler, new BigNum(cached.confirmed), new BigNum(cached.unconfirmed));
        } else {
            return returnNull ? null : this.getZeroBalance()
        }
    }
    private setRawCachedBalance(key: string, balance: Balance) : void {
        this.engine.setCache('wallet.' + this.code + '.' + key, {
            confirmed: balance.amount.toString(),
            unconfirmed: balance.unconfirmed.toString()
        });
    }

    getCachedPortfolioTotal() : Balance {
        return this.getRawCachedBalance('CachedPortfolioTotal');
    }

    getCachedPortfolioItemBalance(item: PortfolioItem) : Balance {
        if (PortfolioItem.isBalance(item)) {
            return new Balance(this.handler, BigNum.fromFloat(item.balance, this.handler.decimals));
        } else if (PortfolioItem.isAddress(item) && isOnlineCoinHanlder(this.handler)) {
            return this.getRawCachedBalance('CachedPortfolioItemBalance' + item.address);
        }
    }

    async getPortfolioItemBalance(item: PortfolioItem) : Promise<Balance> {
        if (PortfolioItem.isBalance(item)) {
            return new Balance(this.handler, BigNum.fromFloat(item.balance, this.handler.decimals));
        } else if (PortfolioItem.isAddress(item) && isOnlineCoinHanlder(this.handler)) {
            let balance = await this.handler.getBalance(item.address)
            this.setRawCachedBalance('CachedPortfolioItemBalance' + item.address, balance);
            return balance;
        }
        return this.getZeroBalance();
    }

    async getPortfolioTotal() : Promise<Balance> {
        let total = new Balance(
            this.handler,
            new BigNum("0")
        );

        for (let i in this.portfolio) {
            let item = this.portfolio[i];
            let itemBalance = await this.getPortfolioItemBalance(item)
            total.amount = total.amount.add(itemBalance.amount)
            total.unconfirmed = total.unconfirmed.add(itemBalance.unconfirmed)
        }
        this.setRawCachedBalance('CachedPortfolioTotal', total);
        return total;
    }

    getZeroBalance() : Balance {
        return new Balance(
            this.handler,
            new BigNum("0")
        );
    }

    getCachedBalance() : Balance {
        return this.getRawCachedBalance('CachedBalance');
    }

    async getBalance() : Promise<Balance> {
        if (isOnlineCoinHanlder(this.handler)) {
            let cached = this.getRawCachedBalance('CachedBalance', true);
            let balance = await this.handler.getOwnBalance(this.keychain);
            if ((cached !== null) && (!balance.equals(cached))) {
                this.setRawCachedBalance('CachedBalance', balance);
                let diff = balance.total().sub(cached.total());
                let nDiff = diff.toFloat(this.handler.decimals);
                if (nDiff > 0.0) {
                    this.engine.log.success(nDiff.toString() + ' more on your ' + this.handler.ticker + ' wallet', this.handler.code);
                } else if (nDiff < 0.0) {
                    this.engine.log.info( (-nDiff).toString() + ' less on your ' + this.handler.ticker + ' wallet', this.handler.code);
                }
            }
            return balance;
        } else {
            return this.getZeroBalance()
        }
    }

    async prepareTransaction(receiverAddr : string,
                             amount : BigNum|"MAX",
                             fee: number) : Promise<NewTransaction> {
        if (!isOnlineCoinHanlder(this.handler)) {
            return null;
        } else {
            return await this.handler.prepareTransaction(this.keychain, receiverAddr, amount, fee);
        }
    }
}
