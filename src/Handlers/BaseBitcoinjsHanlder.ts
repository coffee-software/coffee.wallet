import {Balance, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../BigNum";
import {Keychain} from "../Keychain";
import {ECPair, Network, Psbt} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
import * as https from 'https';
import {RequestOptions} from "https";

var coininfo = require('coininfo');
var config = require('../../config');
var base58 = require('bs58');
var bech32 = require('bech32');

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

    makeRequest(host: string, path: string, body?: object): Promise<any> {
        return new Promise(function (resolve, reject) {
            //console.log(new Date().getTime() + ": REQUEST " + 'https://' + host + path);
            const data = JSON.stringify(body);
            let options : RequestOptions = {
                method: body === undefined ? 'GET' : 'POST',
                host: host,
                path: path
            }
            if (body !== undefined) {
                options.headers = {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            }
            let req = https.request(options);
            req.on('response', response => {
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    var str = ''
                    response.on('data', function (chunk) {
                        str += chunk;
                    });
                    response.on('end', function () {
                        resolve(JSON.parse(str));
                    });
                } else {
                    reject();
                }
            });

            req.on('error', error => {
                reject(error);
            });
            if (body !== undefined) {
                req.write(data)
            }
            req.end()
            /* TODO test in browser and remove
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            if (body !== undefined) {
                xhr.setRequestHeader("Content-Type", "application/json");
            }
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            if (body === undefined) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(body));
            }*/
        });
    }

    async get(host: string, path: string): Promise<object> {
        await this.wait();
        let response = await this.makeRequest(host, path);
        this.sleep(500);
        return response;
    }

    async post(host: string, path: string, body: object): Promise<object> {
        await this.wait();
        let response = await this.makeRequest(host, path, body);
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

    abstract testCoin: boolean;
    abstract description: string;
    abstract icon: string;
    abstract links: { [p: string]: string };
    abstract name: string;
    abstract ticker: string;
    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    webapiHost : string
    webapiPath : string
    network : Network
    keyPath : string

    static web : WebRequestsQueuedProcessor = new WebRequestsQueuedProcessor();

    async getBalance(addr: string): Promise<Balance> {
        interface BalanceResponse {
            balance: number
            unconfirmed_balance: number
            final_balance: number
        }
        let response = <BalanceResponse>await BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/addrs/' + addr + '/balance');
        return new Balance(new BigNum(response.balance), new BigNum(response.unconfirmed_balance));
    }

    async getOwnBalance(keychain: Keychain): Promise<Balance> {
        var wif = keychain.derivePath(this.keyPath, this.network);
        var key = ECPair.fromWIF(wif, this.network);
        var segwitAddress = bitcoin.payments.p2wpkh({
            pubkey: key.publicKey,
            network: this.network
        }).address;
        var legacyAddress =  bitcoin.payments.p2pkh({
            pubkey: key.publicKey,
            network: this.network
        }).address;
        var segwitBalance = await this.getBalance(segwitAddress);
        var legacyBalance = await this.getBalance(legacyAddress);
        return new Balance(
            segwitBalance.amount.add(legacyBalance.amount),
            segwitBalance.unconfirmed.add(legacyBalance.unconfirmed)
        );
    }

    getDecimals(keychain: Keychain): number {
        return 8;
    }

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
        if (addr.startsWith('tb1')) {
            //TODO
            return bech32.decode(addr).words.slice(2,10).reduce(function(a :number,b : number){ return a * 32 + b; });
        } else {
            return parseInt(base58.decode(addr.slice(0, 8)).toString('hex'), 16);
        }
    }

    getReceiveAddr(keychain: Keychain): string {
        var wif = keychain.derivePath(this.keyPath, this.network);
        var key = ECPair.fromWIF(wif, this.network);
        /* console.log(bitcoin.payments.p2wpkh({
                        pubkey: key.publicKey,
                        network: network.network
                }).address); */
        return bitcoin.payments.p2pkh({
            pubkey: key.publicKey,
            network: this.network
        }).address;
    }

    isP2WSH(script: string): boolean {
        return (script.startsWith("00"));
    }

    async prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        let amountOut: number = parseInt(amount.toString());

        var wif = keychain.derivePath(this.keyPath, this.network);
        var key = ECPair.fromWIF(wif, this.network);

        var legacyFrom = bitcoin.payments.p2pkh({
            pubkey: key.publicKey,
            network: this.network
        }).address;

        var segwitFrom = bitcoin.payments.p2wpkh({
            pubkey: key.publicKey,
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

}
