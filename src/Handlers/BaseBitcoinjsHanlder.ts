import {Balance, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../Core/BigNum";
import {Keychain} from "../Keychain";
import {ECPair, Network, Psbt} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
import * as bip32 from "bip32";
import {CacheWrapper, LogInterface} from "../Engine";
import {Https} from "../Core/Https";
import {bech32} from "bech32";

var coininfo = require('coininfo');
var base58 = require('bs58');

class BtcTransaction implements NewTransaction {
    handler: BaseBitcoinjsHanlder
    tx: Psbt

    constructor(handler: BaseBitcoinjsHanlder, tx: Psbt) {
        this.handler = handler
        this.tx = tx
    }

    getBalanceAfter(): string {
        return "";
    }

    getFeeDisplay(): string {
        return "TODO";
    }

    getFeeETA(): string {
        return "TODO";
    }

    getSummaryTable(): string {
        return "TODO";
    }

    async send(): Promise<string> {

        interface PushResponse {
            tx: {
                hash: string
            }
        }
        let response = <PushResponse>await BaseBitcoinjsHanlder.web.post(
            this.handler.webapiHost,
            this.handler.webapiPath + '/txs/push',
            {
                tx:
                    this.tx.extractTransaction().toHex()
            }
        );

        return response.tx.hash;
    }
}


class WebRequestsQueuedProcessor {

    pause: Promise<void>;

    constructor() {
        this.pause = new Promise(resolve => setTimeout(resolve, 0));
    }

    sleep(ms: number) {
        this.pause = new Promise(resolve => setTimeout(resolve, ms));
    }

    async wait(): Promise<void> {
          await this.pause;
    }

    async get(host: string, path: string): Promise<object> {
        await this.wait();
        let response = await Https.makeJsonRequest(host, path);
        this.sleep(500);
        return response;
    }

    async post(host: string, path: string, body: object): Promise<object> {
        await this.wait();
        let response = await Https.makeJsonRequest(host, path, body);
        this.sleep(500);
        return response;
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

export abstract class BaseBitcoinjsHanlder implements OnlineCoinHandler {

    onlineCoin = true;
    abstract testCoin: boolean;
    abstract description: string;
    abstract icon: string;
    abstract links: { [p: string]: string };
    abstract name: string;
    abstract code: string;
    abstract ticker: string;
    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    segwitSupport : boolean
    webapiHost : string
    webapiPath : string
    network : Network
    keyPath : string

    log: LogInterface
    cache: CacheWrapper

    constructor(log: LogInterface, cache: CacheWrapper) {
        this.log = log
        this.cache = cache
    }

    static web : WebRequestsQueuedProcessor = new WebRequestsQueuedProcessor();

    async getBalance(addr: string): Promise<Balance> {
        interface BalanceResponse {
            balance: number
            unconfirmed_balance: number
            final_balance: number
        }
        let response = <BalanceResponse>await BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/addrs/' + addr + '/balance');
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

    async getFeeOptions(): Promise<number[]> {
        interface RootResponse {
            unconfirmed_count: number
            high_fee_per_kb: number
            medium_fee_per_kb: number
            low_fee_per_kb: number
        }
        let response = <RootResponse>await BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath);
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
        let response = <TxResponse>await BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/txs/' + tx_hash + '?includeHex=true');
        return response.hex;
    }

    async getUtxosForAddr(address: string) : Promise<BitcoinUtxo[]> {
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
        let response = <UtxosResponse>await BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/addrs/' + address + '?unspentOnly=true&includeScript=true');

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

    getReceiveAddr(keychain: Keychain): string {
        var bip32 = this.getPrivateKey(keychain);
        if (this.segwitSupport) {
            return bitcoin.payments.p2wpkh({
                    pubkey: bip32.publicKey,
                    network: this.network
            }).address;
        } else {
            return bitcoin.payments.p2pkh({
                pubkey: bip32.publicKey,
                network: this.network
            }).address;
        }
    }

    isP2WSH(script: string): boolean {
        return (script.startsWith("00"));
    }

    async prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        let amountOut: number = parseInt(amount.toString());

        var bip32 = this.getPrivateKey(keychain);
        var legacyFrom = bitcoin.payments.p2pkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;

        var segwitFrom = bitcoin.payments.p2wpkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;


        var tmpTx = new bitcoin.Psbt({network:this.network});
        var totalIn = 0;
        var atLeastOneUnconfirmed = false;

        var utxos = await this.getUtxosForAddr(segwitFrom);
        utxos = utxos.concat(await this.getUtxosForAddr(legacyFrom));
        for (let i = 0; i < utxos.length; i ++) {
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
            //TODO: if (totalIn >= amount + fee) break; //we have enough fees
            if (!atLeastOneUnconfirmed && !utxos[i].confirmed) {
                atLeastOneUnconfirmed = true;
            }
        }

        tmpTx.addOutput({
            address: receiverAddr,
            value: amountOut
        });

        //calculating change and fee
        const tmpChange = totalIn - amountOut;
        let finalTx = tmpTx.clone();
        tmpTx.addOutput({
            address: segwitFrom,
            value: tmpChange
        });
        let key = ECPair.fromPrivateKey(bip32.privateKey);
        tmpTx.signAllInputs(key).finalizeAllInputs();
        const vsize = tmpTx.extractTransaction().virtualSize();
        const finalFee = Math.ceil(fee * vsize / 1000); //fee is in satoshi per kilobyte
        const changeValue = totalIn - amountOut - finalFee;
        if (changeValue < finalFee) {
            //app.alertInfo('warning. dust leftover detected. transaction might fail. consider using "send all" feature next time.');
        }
        finalTx.addOutput({
            address: segwitFrom,
            value: changeValue
        });
        finalTx.signAllInputs(key).finalizeAllInputs();
        return new BtcTransaction(this, finalTx);
    }

    validateAddress(addr: string): boolean {
        try {
            bitcoin.address.toOutputScript(addr, coininfo.bitcoin.main.toBitcoinJS());
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
}
