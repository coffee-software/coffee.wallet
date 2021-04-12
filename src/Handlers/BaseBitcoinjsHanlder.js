"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoinHandler_1 = require("./BaseCoinHandler");
var BigNum_1 = require("../BigNum");
var bitcoinjs_lib_1 = require("bitcoinjs-lib");
var bitcoin = require("bitcoinjs-lib");
var Https_1 = require("../Https");
var coininfo = require('coininfo');
var config = require('../../config');
var base58 = require('bs58');
var bech32 = require('bech32');
var BtcTransaction = (function () {
    function BtcTransaction(handler, tx) {
        this.handler = handler;
        this.tx = tx;
    }
    BtcTransaction.prototype.getBalanceAfter = function () {
        return "";
    };
    BtcTransaction.prototype.getFeeDisplay = function () {
        return "TODO";
    };
    BtcTransaction.prototype.getFeeETA = function () {
        return "TODO";
    };
    BtcTransaction.prototype.getSummaryTable = function () {
        return "TODO";
    };
    BtcTransaction.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, BaseBitcoinjsHanlder.web.post(this.handler.webapiHost, this.handler.webapiPath + '/txs/push', {
                                tx: this.tx.extractTransaction().toHex()
                            })];
                    case 1:
                        response = _a.sent();
                        return [2, response.tx.hash];
                }
            });
        });
    };
    return BtcTransaction;
}());
var WebRequestsQueuedProcessor = (function () {
    function WebRequestsQueuedProcessor() {
        this.pause = new Promise(function (resolve) { return setTimeout(resolve, 0); });
    }
    WebRequestsQueuedProcessor.prototype.sleep = function (ms) {
        this.pause = new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    WebRequestsQueuedProcessor.prototype.wait = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.pause];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WebRequestsQueuedProcessor.prototype.get = function (host, path) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wait()];
                    case 1:
                        _a.sent();
                        return [4, Https_1.Https.makeJsonRequest(host, path)];
                    case 2:
                        response = _a.sent();
                        this.sleep(500);
                        return [2, response];
                }
            });
        });
    };
    WebRequestsQueuedProcessor.prototype.post = function (host, path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wait()];
                    case 1:
                        _a.sent();
                        return [4, Https_1.Https.makeJsonRequest(host, path, body)];
                    case 2:
                        response = _a.sent();
                        this.sleep(500);
                        return [2, response];
                }
            });
        });
    };
    return WebRequestsQueuedProcessor;
}());
var BaseBitcoinjsHanlder = (function () {
    function BaseBitcoinjsHanlder(log, cache) {
        this.onlineCoin = true;
        this.decimals = 8;
        this.log = log;
        this.cache = cache;
    }
    BaseBitcoinjsHanlder.prototype.getBalance = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/addrs/' + addr + '/balance')];
                    case 1:
                        response = _a.sent();
                        return [2, new BaseCoinHandler_1.Balance(new BigNum_1.BigNum(response.balance), new BigNum_1.BigNum(response.unconfirmed_balance))];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.getOwnBalance = function (keychain) {
        return __awaiter(this, void 0, void 0, function () {
            var bip32, segwitAddress, legacyAddress, segwitBalance, legacyBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bip32 = this.getPrivateKey(keychain);
                        segwitAddress = bitcoin.payments.p2wpkh({
                            pubkey: bip32.publicKey,
                            network: this.network
                        }).address;
                        legacyAddress = bitcoin.payments.p2pkh({
                            pubkey: bip32.publicKey,
                            network: this.network
                        }).address;
                        return [4, this.getBalance(segwitAddress)];
                    case 1:
                        segwitBalance = _a.sent();
                        return [4, this.getBalance(legacyAddress)];
                    case 2:
                        legacyBalance = _a.sent();
                        return [2, new BaseCoinHandler_1.Balance(segwitBalance.amount.add(legacyBalance.amount), segwitBalance.unconfirmed.add(legacyBalance.unconfirmed))];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.getDescription = function () {
        return "";
    };
    BaseBitcoinjsHanlder.prototype.getFeeOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath)];
                    case 1:
                        response = _a.sent();
                        return [2, [
                                response.low_fee_per_kb,
                                Math.floor((response.low_fee_per_kb + response.medium_fee_per_kb) / 2),
                                response.medium_fee_per_kb,
                                Math.ceil((response.medium_fee_per_kb + response.high_fee_per_kb) / 2),
                                response.high_fee_per_kb
                            ]];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.getTxHex = function (tx_hash) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/txs/' + tx_hash + '?includeHex=true')];
                    case 1:
                        response = _a.sent();
                        return [2, response.hex];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.getUtxosForAddr = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ret, i, _a, _b, _c, _d, i, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        return [4, BaseBitcoinjsHanlder.web.get(this.webapiHost, this.webapiPath + '/addrs/' + address + '?unspentOnly=true&includeScript=true')];
                    case 1:
                        response = _j.sent();
                        ret = [];
                        if (!('txrefs' in response)) return [3, 7];
                        i = response.txrefs.length - 1;
                        _j.label = 2;
                    case 2:
                        if (!(i >= 0)) return [3, 7];
                        _b = (_a = ret).push;
                        _c = {
                            value: response.txrefs[i].value,
                            hash: response.txrefs[i].tx_hash,
                            script: response.txrefs[i].script,
                            vout: response.txrefs[i].tx_output_n,
                            confirmed: true
                        };
                        if (!this.isP2WSH(response.txrefs[i].script)) return [3, 3];
                        _d = "";
                        return [3, 5];
                    case 3: return [4, this.getTxHex(response.txrefs[i].tx_hash)];
                    case 4:
                        _d = _j.sent();
                        _j.label = 5;
                    case 5:
                        _b.apply(_a, [(_c.hex = _d,
                                _c)]);
                        _j.label = 6;
                    case 6:
                        i--;
                        return [3, 2];
                    case 7:
                        if (!('unconfirmed_txrefs' in response)) return [3, 13];
                        i = response.unconfirmed_txrefs.length - 1;
                        _j.label = 8;
                    case 8:
                        if (!(i >= 0)) return [3, 13];
                        _f = (_e = ret).push;
                        _g = {
                            value: response.unconfirmed_txrefs[i].value,
                            hash: response.unconfirmed_txrefs[i].tx_hash,
                            script: response.unconfirmed_txrefs[i].script,
                            vout: response.unconfirmed_txrefs[i].tx_output_n,
                            confirmed: false
                        };
                        if (!this.isP2WSH(response.unconfirmed_txrefs[i].script)) return [3, 9];
                        _h = "";
                        return [3, 11];
                    case 9: return [4, this.getTxHex(response.unconfirmed_txrefs[i].tx_hash)];
                    case 10:
                        _h = _j.sent();
                        _j.label = 11;
                    case 11:
                        _f.apply(_e, [(_g.hex = _h,
                                _g)]);
                        _j.label = 12;
                    case 12:
                        i--;
                        return [3, 8];
                    case 13: return [2, ret];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.getIcon = function () {
        throw new Error('implement this');
    };
    BaseBitcoinjsHanlder.prototype.getIdenticonSeed = function (addr) {
        if (addr.startsWith('tb1')) {
            return bech32.decode(addr).words.slice(2, 10).reduce(function (a, b) { return a * 32 + b; });
        }
        else {
            return parseInt(base58.decode(addr.slice(0, 8)).toString('hex'), 16);
        }
    };
    BaseBitcoinjsHanlder.prototype.getPrivateKey = function (keychain) {
        return keychain.derivePath(this.keyPath, this.network);
    };
    BaseBitcoinjsHanlder.prototype.getReceiveAddr = function (keychain) {
        var bip32 = this.getPrivateKey(keychain);
        return bitcoin.payments.p2pkh({
            pubkey: bip32.publicKey,
            network: this.network
        }).address;
    };
    BaseBitcoinjsHanlder.prototype.isP2WSH = function (script) {
        return (script.startsWith("00"));
    };
    BaseBitcoinjsHanlder.prototype.prepareTransaction = function (keychain, receiverAddr, amount, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var amountOut, bip32, legacyFrom, segwitFrom, tmpTx, totalIn, atLeastOneUnconfirmed, utxos, _a, _b, i, tmpChange, finalTx, key, vsize, finalFee, changeValue;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        amountOut = parseInt(amount.toString());
                        bip32 = this.getPrivateKey(keychain);
                        legacyFrom = bitcoin.payments.p2pkh({
                            pubkey: bip32.publicKey,
                            network: this.network
                        }).address;
                        segwitFrom = bitcoin.payments.p2wpkh({
                            pubkey: bip32.publicKey,
                            network: this.network
                        }).address;
                        tmpTx = new bitcoin.Psbt({ network: this.network });
                        totalIn = 0;
                        atLeastOneUnconfirmed = false;
                        return [4, this.getUtxosForAddr(segwitFrom)];
                    case 1:
                        utxos = _c.sent();
                        _b = (_a = utxos).concat;
                        return [4, this.getUtxosForAddr(legacyFrom)];
                    case 2:
                        utxos = _b.apply(_a, [_c.sent()]);
                        for (i = 0; i < utxos.length; i++) {
                            totalIn = totalIn + utxos[i].value;
                            if (this.isP2WSH(utxos[i].script)) {
                                tmpTx.addInput({
                                    hash: utxos[i].hash,
                                    index: utxos[i].vout,
                                    witnessUtxo: {
                                        script: Buffer.from(utxos[i].script, 'hex'),
                                        value: utxos[i].value,
                                    }
                                });
                            }
                            else {
                                tmpTx.addInput({
                                    hash: utxos[i].hash,
                                    index: utxos[i].vout,
                                    nonWitnessUtxo: Buffer.from(utxos[i].hex, 'hex')
                                });
                            }
                            if (!atLeastOneUnconfirmed && !utxos[i].confirmed) {
                                atLeastOneUnconfirmed = true;
                            }
                        }
                        tmpTx.addOutput({
                            address: receiverAddr,
                            value: amountOut
                        });
                        tmpChange = totalIn - amountOut;
                        finalTx = tmpTx.clone();
                        tmpTx.addOutput({
                            address: segwitFrom,
                            value: tmpChange
                        });
                        key = bitcoinjs_lib_1.ECPair.fromPrivateKey(bip32.privateKey);
                        tmpTx.signAllInputs(key).finalizeAllInputs();
                        vsize = tmpTx.extractTransaction().virtualSize();
                        finalFee = Math.ceil(fee * vsize / 1000);
                        changeValue = totalIn - amountOut - finalFee;
                        if (changeValue < finalFee) {
                        }
                        finalTx.addOutput({
                            address: segwitFrom,
                            value: changeValue
                        });
                        finalTx.signAllInputs(key).finalizeAllInputs();
                        return [2, new BtcTransaction(this, finalTx)];
                }
            });
        });
    };
    BaseBitcoinjsHanlder.prototype.validateAddress = function (addr) {
        try {
            bitcoin.address.toOutputScript(addr, coininfo.bitcoin.main.toBitcoinJS());
            return true;
        }
        catch (e) {
            return false;
        }
    };
    BaseBitcoinjsHanlder.web = new WebRequestsQueuedProcessor();
    return BaseBitcoinjsHanlder;
}());
exports.BaseBitcoinjsHanlder = BaseBitcoinjsHanlder;
//# sourceMappingURL=BaseBitcoinjsHanlder.js.map