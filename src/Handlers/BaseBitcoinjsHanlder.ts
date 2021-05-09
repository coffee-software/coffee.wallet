import {Balance, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../Core/BigNum";
import {Keychain} from "../Keychain";
import {ECPair, Network, Psbt, Transaction} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
import * as bip32 from "bip32";
import {CacheWrapper, Engine, LogInterface} from "../Engine";
import {Https} from "../Core/Https";
import {bech32} from "bech32";
import {CoinAddressIcon} from "../Widgets/CoinAddressIcon";
import {Strings} from "../Tools/Strings";
import {QueuedProcessor} from "../Core/QueuedProcessor";
import {Mutex} from "../Core/Mutex";

var base58 = require('bs58');

class BtcTransaction implements NewTransaction {
    handler: BaseBitcoinjsHanlder
    tx: Psbt
    extracted: Transaction
    receiverAddr: string
    sendable: boolean
    amountOut: number
    balanceAfter: number

    constructor(handler: BaseBitcoinjsHanlder, sendable: boolean, receiverAddr: string, amountOut: number, balanceAfter: number, tx: Psbt) {
        this.handler = handler
        this.receiverAddr = receiverAddr
        this.tx = tx
        this.extracted = tx.extractTransaction()
        this.sendable = sendable
        this.amountOut = amountOut
        this.balanceAfter = balanceAfter
    }

    isValid() : boolean {
        return this.sendable;
    }

    getAmountDisplay() : string {
        return (new BigNum(this.amountOut)).toFloat(this.handler.decimals).toString();
    }

    getRecipientDisplay() : string {
        return this.receiverAddr;
    }

    getBalanceAfter(): Balance {
        return new Balance(this.handler, new BigNum(this.balanceAfter));
    }

    getFeeTotal(): Balance {
        return new Balance(this.handler, new BigNum(this.tx.getFee()))
    }

    getFeeInfo(): string {
        return this.tx.getFeeRate().toString() + " sat/vb"
    }
    getFeeETA(): string {
        return "TODO";
    }

    getSummary(): { [code: string] : string|Balance } {
        return {
            "recipient": this.receiverAddr,
            "amount": new Balance(this.handler, new BigNum(this.amountOut)),
            "fee" : this.getFeeTotal(),
            "balance after": this.getBalanceAfter(),
            "vsize" : this.extracted.virtualSize().toString() + " vb",
            "fee rate" : this.getFeeInfo(),
            //"ETA" : this.getFeeETA()
        };
    }

    async send(): Promise<string> {

        interface PushResponse {
            tx: {
                hash: string
            }
        }
        let response = <PushResponse>await this.handler.web.post(
            this.handler.webapiHost,
            this.handler.webapiPath + '/txs/push',
            {
                tx:
                    this.extracted.toHex()
            }
        );

        return response.tx.hash;
    }

    getLeftIcon(): string {
        return '<img class="coinIcon" src="coins/' + this.handler.icon + '.svg"/>';
    }

    getLeftLabel(): string {
        return this.getAmountDisplay();
    }

    getRightIcon(): string {
        return (new CoinAddressIcon(this.handler, this.getRecipientDisplay())).element.outerHTML;
    }

    getRightLabel(): string {
        return Strings.shortAddr(this.getRecipientDisplay(), 13);
    }

    getDescriptionHtml(): string {
        return "";
    }
}


class WebRequestsQueuedProcessor {

    processor: QueuedProcessor;
    cache: CacheWrapper;

    constructor(processor: QueuedProcessor, cache: CacheWrapper) {
        this.cache = cache
        this.processor = processor
    }

    async getCached(host: string, path: string, lifetime:number): Promise<object> {
        return await this.processor.process(() => this.cache.getCached(host + path, lifetime, () => Https.makeJsonRequest(host, path)));
    }

    async get(host: string, path: string): Promise<object> {
        return await this.processor.process(() => Https.makeJsonRequest(host, path));
    }

    async post(host: string, path: string, body: object): Promise<object> {
        return await this.processor.process(() => Https.makeJsonRequest(host, path, body));
    }
}

interface BitcoinUtxo {
    value: number,
    hash: string,
    script: string,
    vout: number,
    confirmed: boolean,
    hex: string
}

interface BlockRootResponse {
    unconfirmed_count: number
    high_fee_per_kb: number
    medium_fee_per_kb: number
    low_fee_per_kb: number
}

export abstract class BaseBitcoinjsHanlder implements OnlineCoinHandler {

    onlineCoin = true;
    abstract testCoin: boolean;
    abstract description: string;
    abstract icon: string;
    abstract links: { [p: string]: string };
    abstract name: string;
    abstract code: string;
    abstract ticker: string;
    abstract coinGeckoId: string;
    abstract coinMarketCapId: string;
    abstract coinPaprikaId: string;

    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    segwitSupport : boolean
    webapiHost : string
    webapiPath : string
    network : Network
    keyPath : string

    log: LogInterface
    cache: CacheWrapper
    web : WebRequestsQueuedProcessor

    constructor(engine: Engine) {
        this.log = engine.log
        this.cache = engine.cache
        this.web = new WebRequestsQueuedProcessor(BaseBitcoinjsHanlder.processor, engine.cache);
    }

    static processor = new QueuedProcessor(500);

    async getBalance(addr: string): Promise<Balance> {
        interface BalanceResponse {
            balance: number
            unconfirmed_balance: number
            final_balance: number
            n_tx: number,
            unconfirmed_n_tx: number,
            final_n_tx: number
        }
        let response = <BalanceResponse>await this.web.getCached(this.webapiHost, this.webapiPath + '/addrs/' + addr + '/balance', 30);

        let cachePrefix = 'handler.' + this.code + '.txs.' + addr
        let cacheK = response.n_tx + '.' + response.unconfirmed_n_tx + '.' + response.final_n_tx
        let currentK = this.cache.get(cachePrefix + '.k', null);
        if (cacheK != currentK) {
            console.log('clearing tx cache');
            this.cache.set(cachePrefix + '.v', null);
            this.cache.set(cachePrefix + '.k', cacheK);
        }

        return new Balance(this, new BigNum(response.balance), new BigNum(response.unconfirmed_balance));
    }

    async getOwnBalance(keychain: Keychain): Promise<Balance> {
        var bip32 = this.getPrivateKey(keychain);
        var legacyAddress =  bitcoin.payments.p2pkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;
        var legacyBalance = await this.getBalance(legacyAddress);
        if (this.segwitSupport) {
            var segwitAddress = bitcoin.payments.p2wpkh({
                pubkey: bip32.publicKey,
                network: this.network
            }).address;
            var segwitBalance = await this.getBalance(segwitAddress);
            legacyBalance.amount = legacyBalance.amount.add(segwitBalance.amount);
            legacyBalance.unconfirmed = legacyBalance.unconfirmed.add(segwitBalance.unconfirmed);
        }
        return new Balance(
            this,
            legacyBalance.amount,
            legacyBalance.unconfirmed
        );
    }

    decimals = 8

    getDescription(): string {
        return "";
    }

    async getLastBlockData(): Promise<BlockRootResponse> {
        return <BlockRootResponse>await this.web.getCached(this.webapiHost, this.webapiPath, 3 * 60);
    }

    async getDefaultFee(): Promise<number> {
        let response = await this.getLastBlockData();
        return response.medium_fee_per_kb;
    }

    async getFeeOptions(): Promise<number[]> {
        let response = await this.getLastBlockData();
        console.log([
            response.low_fee_per_kb,
            Math.floor((response.low_fee_per_kb + response.medium_fee_per_kb) / 2 ),
            response.medium_fee_per_kb,
            Math.ceil((response.medium_fee_per_kb + response.high_fee_per_kb) / 2),
            response.high_fee_per_kb
        ]);
        return [
            response.low_fee_per_kb,
            Math.floor((response.low_fee_per_kb + response.medium_fee_per_kb) / 2 ),
            response.medium_fee_per_kb,
            Math.ceil((response.medium_fee_per_kb + response.high_fee_per_kb) / 2),
            response.high_fee_per_kb
        ];
    }

    async getTxHex(tx_hash: string) : Promise<string> {
        interface TxResponse {
            hex: string
        }
        let response = <TxResponse>await this.web.getCached(this.webapiHost, this.webapiPath + '/txs/' + tx_hash + '?includeHex=true', 60 * 60 * 24);
        return response.hex;
    }

    utxosMutex = new Mutex();

    async getUtxosForAddr(address: string) : Promise<BitcoinUtxo[]> {

        const unlock = await this.utxosMutex.lock();
        let cachePrefix = 'handler.' + this.code + '.txs.' + address
        let cached = this.cache.get(cachePrefix + '.v', null);
        if (cached) {
            unlock();
            return cached;
        }

        interface TxrefResponse {
            value: number
            tx_hash: string
            script: string
            tx_output_n: number
        }
        interface UtxosResponse {
            txrefs?: TxrefResponse[]
            unconfirmed_txrefs?: TxrefResponse[]
        }
        //TODO set RBF : &confirmations=1
        let response = <UtxosResponse>await this.web.get(this.webapiHost, this.webapiPath + '/addrs/' + address + '?unspentOnly=true&includeScript=true');

        let ret : BitcoinUtxo[] = [];

        if ('txrefs' in response) {
            for (let i = response.txrefs.length - 1; i >= 0; i--) {
                ret.push({
                    value: response.txrefs[i].value,
                    hash: response.txrefs[i].tx_hash,
                    script: response.txrefs[i].script,
                    vout: response.txrefs[i].tx_output_n,
                    confirmed: true,
                    hex: this.isP2WSH(response.txrefs[i].script) ? "" : await this.getTxHex(response.txrefs[i].tx_hash)
                });
            }
        }
        if ('unconfirmed_txrefs' in response) {
            for (let i = response.unconfirmed_txrefs.length - 1; i >= 0; i --) {
                ret.push({
                    value: response.unconfirmed_txrefs[i].value,
                    hash: response.unconfirmed_txrefs[i].tx_hash,
                    script: response.unconfirmed_txrefs[i].script,
                    vout: response.unconfirmed_txrefs[i].tx_output_n,
                    confirmed: false,
                    hex: this.isP2WSH(response.unconfirmed_txrefs[i].script) ? "" : await this.getTxHex(response.unconfirmed_txrefs[i].tx_hash)
                });
            }
        }
        this.cache.set(cachePrefix + '.v', ret);
        unlock();
        return ret;
    }

    getIcon(): string {
        throw new Error('implement this');
    }

    getIdenticonSeed(addr: string): number {
        if (addr.startsWith(this.network.bech32 + '1')) {
            //TODO
            return bech32.decode(addr).words.slice(2,10).reduce(function(a :number,b : number){ return a * 32 + b; });
        } else {
            return parseInt(base58.decode(addr.slice(0, 8)).toString('hex'), 16);
        }
    }

    getPrivateKey(keychain: Keychain): bip32.BIP32Interface {
        return keychain.derivePath(this.keyPath, this.network);
    }

    getLegacyAddr(keychain: Keychain): string {
        var bip32 = this.getPrivateKey(keychain);
        return bitcoin.payments.p2pkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;
    }

    getSegwitAddr(keychain: Keychain): string {
        var bip32 = this.getPrivateKey(keychain);
        return bitcoin.payments.p2wpkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;
    }

    getReceiveAddr(keychain: Keychain): string {
        var bip32 = this.getPrivateKey(keychain);
        if (this.segwitSupport) {
            return this.getSegwitAddr(keychain);
        } else {
            return this.getLegacyAddr(keychain)
        }
    }

    isP2WSH(script: string): boolean {
        return (script.startsWith("00"));
    }


    calculateFeeForInputs(tx : bitcoin.Psbt, signer: ECPair.ECPairInterface, outs: string[], feeRate: number) : number {
        let tmpTx = tx.clone();
        for (let i = 0; i < outs.length; i++) {
            tmpTx.addOutput({
                address: outs[i],
                value: 0
            });
        }
        tmpTx.signAllInputs(signer).finalizeAllInputs();
        //disable fee rate check as fee is whole transaction
        const vsize = tmpTx.extractTransaction(true).virtualSize();
        console.log('FEE', feeRate, vsize);
        return Math.ceil(feeRate * vsize / 1000); //fee is in satoshi per kilobyte
    }

    async prepareTransaction(keychain: Keychain|string, receiverAddr: string, amount: BigNum|"MAX", feeRate: number): Promise<NewTransaction> {
        if (!feeRate) {
            feeRate = await this.getDefaultFee();
        }

        let ecpair = (typeof keychain == "string") ? ECPair.fromWIF(keychain, this.network) : ECPair.fromPrivateKey(this.getPrivateKey(keychain).privateKey);

        var legacyFrom = bitcoin.payments.p2pkh({
            pubkey: ecpair.publicKey,
            network: this.network
        }).address;
        var changeAddress = legacyFrom
        var tmpTx = new bitcoin.Psbt({network:this.network});
        var totalIn = 0;
        var totalBalance = 0;
        var atLeastOneUnconfirmed = false;
        let fee = 0;

        var utxos: BitcoinUtxo[] = []

        if (this.segwitSupport) {
            var segwitFrom = bitcoin.payments.p2wpkh({
                pubkey: ecpair.publicKey,
                network: this.network
            }).address;
            utxos = utxos.concat(await this.getUtxosForAddr(segwitFrom));
            changeAddress = segwitFrom
        }
        utxos = utxos.concat(await this.getUtxosForAddr(legacyFrom));

        let sendable = false;
        var tmpReceiver = changeAddress
        if (this.validateAddress(receiverAddr)) {
            sendable = true;
            tmpReceiver = receiverAddr
        }

        for (let i = 0; i < utxos.length; i ++) {
            totalBalance = totalBalance + utxos[i].value;
        }
        for (let i = 0; i < utxos.length; i ++) {
            if (utxos[i].value == 0) {
                //fix for spam 0 value output
                continue;
            }
            totalIn = totalIn + utxos[i].value;
            if (this.isP2WSH(utxos[i].script)) {
                tmpTx.addInput({
                    hash: utxos[i].hash,
                    index: utxos[i].vout,
                    witnessUtxo: {
                        script: Buffer.from(
                            utxos[i].script,
                            'hex',
                        ),
                        value: utxos[i].value,
                    }
                });
            } else {
                tmpTx.addInput({
                    hash: utxos[i].hash,
                    index: utxos[i].vout,
                    nonWitnessUtxo: Buffer.from(utxos[i].hex, 'hex')
                });
            }
            if (!utxos[i].confirmed) {
                atLeastOneUnconfirmed = true;
            }
            if (amount !== "MAX") {
                fee = this.calculateFeeForInputs(tmpTx, ecpair, [changeAddress, tmpReceiver], feeRate);
                //multiply fee * 2 to avoid dust leftovers on inputs
                if (parseInt(amount.toString()) + (2 * fee) < totalIn) {
                    break;
                }
            }
        }
        let amountOut: number;
        if (amount !== "MAX") {
            amountOut = parseInt(amount.toString());
            let change = totalIn - fee - amountOut;
            console.log(totalIn, fee, amountOut, change);
            tmpTx.addOutput({
                address: changeAddress,
                value: change
            });
            if (amountOut > 0 && change < fee) {
                this.log.info('warning: dust leftover detected. consider using "send max" feature.');
            }
        } else {
            //will have only one output
            fee = this.calculateFeeForInputs(tmpTx, ecpair, [tmpReceiver], feeRate);
            amountOut = totalIn - fee;
        }

        tmpTx.addOutput({
            address: tmpReceiver,
            value: amountOut
        });

        if (atLeastOneUnconfirmed) {
            this.log.info('warning: sending using unconfirmed inputs.');
        }

        tmpTx.signAllInputs(ecpair).finalizeAllInputs();

        tmpTx.setMaximumFeeRate(4000000) //TODO DOGE, warnings configuration
        return new BtcTransaction(this, sendable, receiverAddr, amountOut, totalBalance - amountOut - fee, tmpTx);
    }

    validateAddress(addr: string): boolean {
        try {
            bitcoin.address.toOutputScript(addr, this.network);
            return true;
        } catch (e) {
            return false;
        }
    }

    canSendViaMessage(): boolean {
        return true;
    }

    newRandomPrivateKey() : string {
        return bitcoin.ECPair.makeRandom({network: this.network}).toWIF();
    }

    addressFromPrivateKey(pk: string) : string {
        var key = bitcoin.ECPair.fromWIF(pk, this.network);
        if (this.segwitSupport) {
            return bitcoin.payments.p2wpkh({
                pubkey: key.publicKey,
                network: this.network
            }).address;
        } else {
            return bitcoin.payments.p2pkh({
                pubkey: key.publicKey,
                network: this.network
            }).address;
        }
    }

    exportPrivateKey(keychain: Keychain): string {
        return this.getPrivateKey(keychain).toWIF();
    }
}
