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
var Keychain_1 = require("./Keychain");
var AllCoinHandlers_1 = require("./AllCoinHandlers");
var Wallet_1 = require("./Wallet");
var PortfolioItem_1 = require("./PortfolioItem");
var CoinGeckoProvider_1 = require("./PriceProviders/CoinGeckoProvider");
var CoinPaprikaProvider_1 = require("./PriceProviders/CoinPaprikaProvider");
var CoinMarketCapProvider_1 = require("./PriceProviders/CoinMarketCapProvider");
var jazzicons = require('@metamask/jazzicon');
var CacheWrapper = (function () {
    function CacheWrapper(cache) {
        this.cache = cache;
    }
    CacheWrapper.prototype.set = function (key, value) {
        this.cache.setItem('c_' + key, JSON.stringify(value));
    };
    CacheWrapper.prototype.get = function (key, defaultValue) {
        var ret = this.cache.getItem('c_' + key);
        return ret == null ? defaultValue : JSON.parse(ret);
    };
    CacheWrapper.prototype.getCached = function (key, lifetime, getCallback) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                cache = this.cache;
                return [2, new Promise(function (resolve, reject) {
                        var ret = cache.getItem('c_' + key);
                        var now = (+new Date()) / 1000;
                        var updated = cache.getItem('c_' + key + '_lastUpdate');
                        if ((ret == null) || (updated == null) || (now - updated > lifetime)) {
                            getCallback(function (value) {
                                cache.setItem('c_' + key + '_lastUpdate', now);
                                cache.setItem('c_' + key, JSON.stringify(value));
                                resolve(value);
                            });
                        }
                        else {
                            resolve(JSON.parse(ret));
                        }
                    })];
            });
        });
    };
    return CacheWrapper;
}());
exports.CacheWrapper = CacheWrapper;
var Engine = (function () {
    function Engine(storage, log, cache) {
        this.wallets = {};
        this.storage = storage;
        this.log = log;
        this.cache = new CacheWrapper(cache);
    }
    Engine.prototype.init = function (callback) {
        console.log("INITIALISING");
        this.allCoinHandlers = AllCoinHandlers_1.createAllCoinHandlers(this.log, this.cache);
        this.allPriceProviders = [
            new CoinPaprikaProvider_1.CoinPaprikaProvider(this.cache),
            new CoinGeckoProvider_1.CoinGeckoProvider(this.cache),
            new CoinMarketCapProvider_1.CoinMarketCapProvider(this.cache)
        ];
        this.allExchangeProviders = [];
        this.priceProvider = this.allPriceProviders[this.cache.get('priceProvider', 0)];
        this.priceProvider.unit = this.cache.get(this.priceProvider.name + '_priceUnit', this.priceProvider.defaultUnit);
        this.initAsync().then(callback);
    };
    Engine.prototype.getFiatValue = function (balance) {
        return balance.totalFloat() * this.priceProvider.getPrice(balance.handler);
    };
    Engine.prototype.getFiatValueString = function (balance) {
        return this.priceProvider.convert(balance.total().toFloat(balance.handler.decimals), balance.handler);
    };
    Engine.prototype.getValueString = function (balance) {
        return balance.total().toFloat(balance.handler.decimals) + ' ' + balance.handler.ticker;
    };
    Engine.prototype.getSetting = function (key, dafaultValue) {
        return this.cache.get(key, dafaultValue);
    };
    Engine.prototype.setSetting = function (key, value) {
        return this.cache.set(key, value);
    };
    Engine.prototype.getCache = function (key, dafaultValue) {
        return this.cache.get(key, dafaultValue);
    };
    Engine.prototype.setCache = function (key, value) {
        return this.cache.set(key, value);
    };
    Engine.prototype.setPriceProvider = function (index, unit) {
        this.priceProvider = this.allPriceProviders[index];
        this.cache.set('priceProvider', index);
        this.priceProvider.unit = unit;
        this.cache.set(this.priceProvider.name + '_priceUnit', unit);
    };
    Engine.prototype.addWallet = function (code, portfolio) {
        if (!(code in this.allCoinHandlers)) {
            this.log.error('coin ' + code + ' is no longer supported. It will be disabled.');
        }
        else {
            var wallet = new Wallet_1.Wallet(this, code, this.allCoinHandlers[code], this.keychain);
            wallet.portfolio = this.loadPortfolio(wallet.handler, portfolio);
            this.wallets[code] = wallet;
        }
    };
    Engine.prototype.initAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallets, code, mnemonic, code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.storageGet('wallets')];
                    case 1:
                        wallets = _a.sent();
                        if (!('bip39' in wallets)) return [3, 3];
                        console.log('migrating legacy data...');
                        this.keychain = new Keychain_1.Keychain(wallets.bip39.mnemonic);
                        for (code in wallets) {
                            if (wallets.hasOwnProperty(code) && code != 'bip39') {
                                if (wallets[code].enabled) {
                                    this.addWallet(code, wallets[code].offlineWallets);
                                }
                            }
                        }
                        console.log('saving...');
                        return [4, this.saveData()];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3: return [4, this.storageGet('mnemonic')];
                    case 4:
                        mnemonic = _a.sent();
                        if (mnemonic) {
                            this.keychain = new Keychain_1.Keychain(mnemonic);
                            for (code in wallets) {
                                if (wallets.hasOwnProperty(code)) {
                                    this.addWallet(code, wallets[code].portfolio);
                                }
                            }
                        }
                        _a.label = 5;
                    case 5:
                        console.log(this.keychain);
                        console.log(this.wallets);
                        return [2];
                }
            });
        });
    };
    Engine.prototype.saveData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallets, code, portfolio, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("SAVING DATA");
                        return [4, this.storageSet('mnemonic', this.keychain.mnemonic)];
                    case 1:
                        _a.sent();
                        wallets = {};
                        for (code in this.wallets) {
                            console.log(code);
                            portfolio = [];
                            for (i = 0; i < this.wallets[code].portfolio.length; i++) {
                                portfolio.push(this.wallets[code].portfolio[i].getData());
                            }
                            wallets[code] = {
                                portfolio: portfolio
                            };
                        }
                        return [4, this.storageSet('wallets', wallets)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Engine.prototype.loadPortfolio = function (handler, data) {
        var portfolio = [];
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            var item = void 0;
            if (PortfolioItem_1.isPortfolioLegacyItemData(row)) {
                if (row.addr) {
                    item = new PortfolioItem_1.PortfolioAddress(row.comment, row.addr, row.balance);
                }
                else {
                    item = new PortfolioItem_1.PortfolioBalance(row.comment, row.balance);
                }
            }
            else if (PortfolioItem_1.isPortfolioItemData(row)) {
                if (row.address) {
                    item = new PortfolioItem_1.PortfolioAddress(row.label, row.address, row.balance);
                }
                else {
                    item = new PortfolioItem_1.PortfolioBalance(row.label, row.balance);
                }
            }
            portfolio.push(item);
        }
        return portfolio;
    };
    Engine.prototype.validateMnemonic = function (mnemonic) {
        return Keychain_1.Keychain.validateMnemonic(mnemonic);
    };
    Engine.prototype.recoverKeychain = function (mnemonic) {
        this.keychain = new Keychain_1.Keychain(mnemonic);
    };
    Engine.prototype.createNewKeychain = function () {
        this.keychain = new Keychain_1.Keychain(Keychain_1.Keychain.newMnemonic());
    };
    Engine.prototype.keychainCreated = function () {
        return (this.keychain != null);
    };
    Engine.prototype.storageGet = function (key) {
        var engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.getItem(key, resolve, reject);
        });
    };
    Engine.prototype.storageSet = function (key, value) {
        var engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.setItem(key, value, resolve, reject);
        });
    };
    Engine.prototype.updatePrices = function (callback) {
        this.priceProvider.updatePrices(this.allCoinHandlers).then(callback);
    };
    Engine.prototype.shortAmount = function (floatValue, unit, maxchars) {
        maxchars = maxchars - unit.length - 1;
        return floatValue.toString().substring(0, maxchars - 2) + '..&nbsp;' + unit;
    };
    Engine.prototype.shortAddr = function (address, maxchars) {
        if (address.length > maxchars) {
            var half = (maxchars - 3) / 2;
            return address.substring(0, half) + '...' + address.substring(address.length - half, address.length);
        }
        else {
            return address;
        }
    };
    Engine.prototype.getCoinAddrIcon = function (handler, address) {
        if (address && AllCoinHandlers_1.isOnlineCoinHanlder(handler)) {
            var addrSvg = jazzicons.generateIdenticon(100, handler.getIdenticonSeed(address)).children[0];
            addrSvg.setAttribute("viewBox", "0 0 100 100");
            addrSvg.removeAttribute("width");
            addrSvg.removeAttribute("height");
            addrSvg.style.borderRadius = '50%';
            return addrSvg;
        }
        else {
            var emptyImg = document.createElement('img');
            emptyImg.setAttribute("class", "coinIcon");
            emptyImg.setAttribute("src", "coins/noicon.svg");
            return emptyImg;
        }
    };
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map