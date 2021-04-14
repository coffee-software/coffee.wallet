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
var BaseCoinHandler_1 = require("./Handlers/BaseCoinHandler");
var PortfolioItem_1 = require("./PortfolioItem");
var AllCoinHandlers_1 = require("./AllCoinHandlers");
var BigNum_1 = require("./BigNum");
var Wallet = (function () {
    function Wallet(engine, code, handler, keychain) {
        this.portfolio = [];
        this.engine = engine;
        this.code = code;
        this.handler = handler;
        this.keychain = keychain;
    }
    Wallet.prototype.isOnline = function () {
        return AllCoinHandlers_1.isOnlineCoinHanlder(this.handler);
    };
    Wallet.prototype.getReceiveAddress = function () {
        if (AllCoinHandlers_1.isOnlineCoinHanlder(this.handler)) {
            return this.handler.getReceiveAddr(this.keychain);
        }
    };
    Wallet.prototype.getRawCachedBalance = function (key) {
        var cached = this.engine.getCache('wallet.' + this.code + '.' + key, null);
        if (cached !== null) {
            return new BaseCoinHandler_1.Balance(this.handler, new BigNum_1.BigNum(cached.confirmed), new BigNum_1.BigNum(cached.unconfirmed));
        }
        else {
            return this.getZeroBalance();
        }
    };
    Wallet.prototype.setRawCachedBalance = function (key, balance) {
        this.engine.setCache('wallet.' + this.code + '.' + key, {
            confirmed: balance.amount.toString(),
            unconfirmed: balance.unconfirmed.toString()
        });
    };
    Wallet.prototype.getCachedPortfolioTotal = function () {
        return this.getRawCachedBalance('CachedPortfolioTotal');
    };
    Wallet.prototype.getPortfolioTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var total, _a, _b, _i, i, item, itemBalance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        total = new BaseCoinHandler_1.Balance(this.handler, new BigNum_1.BigNum("0"), new BigNum_1.BigNum("0"));
                        _a = [];
                        for (_b in this.portfolio)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 5];
                        i = _a[_i];
                        item = this.portfolio[i];
                        if (!(PortfolioItem_1.PortfolioItem.isBalance(item) && AllCoinHandlers_1.isOnlineCoinHanlder(this.handler))) return [3, 2];
                        total.amount.add(BigNum_1.BigNum.fromFloat(item.balance, this.handler.decimals));
                        return [3, 4];
                    case 2:
                        if (!(PortfolioItem_1.PortfolioItem.isAddress(item) && AllCoinHandlers_1.isOnlineCoinHanlder(this.handler))) return [3, 4];
                        return [4, this.handler.getBalance(item.address)];
                    case 3:
                        itemBalance = _c.sent();
                        total.amount = total.amount.add(itemBalance.amount);
                        total.unconfirmed = total.unconfirmed.add(itemBalance.unconfirmed);
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5: return [2, total];
                }
            });
        });
    };
    Wallet.prototype.getZeroBalance = function () {
        return new BaseCoinHandler_1.Balance(this.handler, new BigNum_1.BigNum("0"), new BigNum_1.BigNum("0"));
    };
    Wallet.prototype.getCachedBalance = function () {
        return this.getRawCachedBalance('CachedBalance');
    };
    Wallet.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cached, balance, diff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!AllCoinHandlers_1.isOnlineCoinHanlder(this.handler)) return [3, 2];
                        cached = this.getCachedBalance();
                        return [4, this.handler.getOwnBalance(this.keychain)];
                    case 1:
                        balance = _a.sent();
                        console.log(balance);
                        console.log(cached);
                        if (!balance.equals(cached)) {
                            this.setRawCachedBalance('CachedBalance', balance);
                            diff = balance.total().sub(cached.total());
                            this.engine.log.info(diff.toString(), this.code);
                        }
                        return [2, balance];
                    case 2: return [2, this.getZeroBalance()];
                }
            });
        });
    };
    return Wallet;
}());
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map