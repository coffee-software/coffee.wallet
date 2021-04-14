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
var BasePriceProvider = (function () {
    function BasePriceProvider(cache, unit) {
        if (unit === void 0) { unit = null; }
        this.prices = null;
        this.cache = cache;
        this.unit = unit;
    }
    BasePriceProvider.prototype.init = function () {
        if (this.unit == null) {
            this.unit = this.defaultUnit;
        }
        if (this.prices == null) {
            this.prices = this.cache.get(this.name + '_prices_' + this.unit, {});
        }
    };
    BasePriceProvider.prototype.updatePrices = function (handlers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.init();
                        return [4, this.fetchPrices(handlers)];
                    case 1:
                        _a.sent();
                        this.cache.set(this.name + '_prices_' + this.unit, this.prices);
                        return [2];
                }
            });
        });
    };
    BasePriceProvider.prototype.getPrice = function (handler) {
        this.init();
        if (this.availableUnits.indexOf(this.unit) < 0) {
            throw new Error('Unknown unit ' + this.unit);
        }
        if (handler.ticker in this.prices) {
            return this.prices[handler.ticker];
        }
        else {
            return 0;
        }
    };
    BasePriceProvider.prototype.formatMoney = function (value, unit, decimals) {
        if (unit === void 0) { unit = null; }
        if (decimals === void 0) { decimals = 2; }
        if (unit == null) {
            unit = this.unit;
        }
        return value.toFixed(decimals).replace(/./g, function (c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > decimals) ? '&nbsp;' + c : c;
        }) + '&nbsp;' + unit;
    };
    BasePriceProvider.prototype.convert = function (amount, handler) {
        this.init();
        if (handler.ticker in this.prices) {
            return this.formatMoney(amount * this.getPrice(handler), this.unit);
        }
        else {
            return '? ' + this.unit;
        }
    };
    return BasePriceProvider;
}());
exports.BasePriceProvider = BasePriceProvider;
//# sourceMappingURL=BasePriceProvider.js.map