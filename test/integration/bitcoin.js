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
var assert_1 = require("assert");
var Keychain_1 = require("../../src/Keychain");
var BigNum_1 = require("../../src/BigNum");
var HandlerBtcTest_1 = require("../../src/Handlers/HandlerBtcTest");
var config = require('../../config');
describe('Bitcoin Integration Test', function () {
    describe('integration', function () {
        it('sending transaction', function () {
            return __awaiter(this, void 0, void 0, function () {
                var handler, integration1Keychain, integration2Keychain, balance1, balance2, fees, tx, txid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            handler = new HandlerBtcTest_1.HandlerBtcTest();
                            integration1Keychain = new Keychain_1.Keychain(config.integrationMnemonic1);
                            integration2Keychain = new Keychain_1.Keychain(config.integrationMnemonic2);
                            return [4, handler.getOwnBalance(integration1Keychain)];
                        case 1:
                            balance1 = _a.sent();
                            return [4, handler.getOwnBalance(integration2Keychain)];
                        case 2:
                            balance2 = _a.sent();
                            return [4, handler.getFeeOptions()];
                        case 3:
                            fees = _a.sent();
                            assert_1.notStrictEqual(balance1.total().toString(), "0");
                            assert_1.notStrictEqual(balance2.total().toString(), "0");
                            if (!(balance1.total().cmp(balance2.total()) === 1)) return [3, 5];
                            return [4, handler.prepareTransaction(integration1Keychain, handler.getReceiveAddr(integration2Keychain), balance1.total().div(new BigNum_1.BigNum("2")), fees[Math.min(2, fees.length - 1)])];
                        case 4:
                            tx = _a.sent();
                            return [3, 7];
                        case 5: return [4, handler.prepareTransaction(integration2Keychain, handler.getReceiveAddr(integration1Keychain), balance2.total().div(new BigNum_1.BigNum("2")), fees[Math.min(2, fees.length - 1)])];
                        case 6:
                            tx = _a.sent();
                            _a.label = 7;
                        case 7: return [4, tx.send()];
                        case 8:
                            txid = _a.sent();
                            assert_1.strictEqual(txid.length, 64);
                            return [2];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=bitcoin.js.map