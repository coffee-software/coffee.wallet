"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ethers_1 = require("ethers");
var BaseCoinHandler_1 = require("./BaseCoinHandler");
var BigNum_1 = require("../BigNum");
var config = require('../../config');
var EthTransaction = (function () {
    function EthTransaction(handler, data, signed) {
        this.data = data;
        this.handler = handler;
        this.signed = signed;
    }
    EthTransaction.prototype.getBalanceAfter = function () {
        return "";
    };
    EthTransaction.prototype.getFeeDisplay = function () {
        return "TODO";
    };
    EthTransaction.prototype.getFeeETA = function () {
        return "TODO";
    };
    EthTransaction.prototype.getSummaryTable = function () {
        return "TODO";
    };
    EthTransaction.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.handler.getProvider().sendTransaction(this.signed)];
                    case 1:
                        response = _a.sent();
                        return [2, response.hash];
                }
            });
        });
    };
    return EthTransaction;
}());
var BaseEthersHanlder = (function () {
    function BaseEthersHanlder(log, cache) {
        this.onlineCoin = true;
        this.decimals = 18;
        this.log = log;
        this.cache = cache;
    }
    BaseEthersHanlder.prototype.getProvider = function () {
        return new ethers_1.ethers.providers.InfuraProvider(this.networkName, config.infuraKey);
    };
    BaseEthersHanlder.prototype.getBalance = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getProvider().getBalance(addr)];
                    case 1:
                        ret = _a.sent();
                        return [2, new BaseCoinHandler_1.Balance(this, new BigNum_1.BigNum(ret.toString()), new BigNum_1.BigNum("0"))];
                }
            });
        });
    };
    BaseEthersHanlder.prototype.getOwnBalance = function (keychain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getBalance(this.getReceiveAddr(keychain))];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    BaseEthersHanlder.prototype.getDescription = function () {
        return "";
    };
    BaseEthersHanlder.prototype.getFeeOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getProvider().getGasPrice()];
                    case 1:
                        gasPrice = _a.sent();
                        return [2, [
                                gasPrice.toNumber()
                            ]];
                }
            });
        });
    };
    BaseEthersHanlder.prototype.getIcon = function () {
        return "";
    };
    BaseEthersHanlder.prototype.getIdenticonSeed = function (addr) {
        return 0;
    };
    BaseEthersHanlder.prototype.getLinks = function () {
        return {};
    };
    BaseEthersHanlder.prototype.getName = function () {
        return "";
    };
    BaseEthersHanlder.prototype.getWallet = function (keychain) {
        return new ethers_1.ethers.Wallet(this.getPrivateKeyAsHex(keychain), this.getProvider());
    };
    BaseEthersHanlder.prototype.getPrivateKeyAsHex = function (keychain) {
        var bip32 = this.getPrivateKey(keychain);
        var ret = bip32.privateKey.toString('hex');
        while (ret.length < 64)
            ret = "0" + ret;
        return "0x" + ret;
    };
    BaseEthersHanlder.prototype.getPrivateKey = function (keychain) {
        return keychain.derivePath("m/44'/60'/0'/0/0");
    };
    BaseEthersHanlder.prototype.getReceiveAddr = function (keychain) {
        return this.getWallet(keychain).address;
    };
    BaseEthersHanlder.prototype.getTicker = function () {
        return "";
    };
    BaseEthersHanlder.prototype.getTransactionRequest = function (keychain, receiverAddr, amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, {
                        to: receiverAddr,
                        value: "0x" + amount.toString(16),
                        gasLimit: 21000
                    }];
            });
        });
    };
    BaseEthersHanlder.prototype.prepareTransaction = function (keychain, receiverAddr, amount, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var from, tx, _a, _b, signed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        from = this.getReceiveAddr(keychain);
                        return [4, this.getTransactionRequest(keychain, receiverAddr, amount)];
                    case 1:
                        tx = _c.sent();
                        tx.gasPrice = fee;
                        _a = tx;
                        _b = "0x";
                        return [4, this.getProvider().getTransactionCount(from)];
                    case 2:
                        _a.nonce = _b + (_c.sent()).toString(16);
                        return [4, this.getWallet(keychain).signTransaction(tx)];
                    case 3:
                        signed = _c.sent();
                        return [2, new EthTransaction(this, tx, signed)];
                }
            });
        });
    };
    BaseEthersHanlder.prototype.validateAddress = function (addr) {
        return ethers_1.ethers.utils.isAddress(addr);
    };
    BaseEthersHanlder.prototype.canSendViaMessage = function () {
        return true;
    };
    return BaseEthersHanlder;
}());
exports.BaseEthersHanlder = BaseEthersHanlder;
var BaseERC20Handler = (function (_super) {
    __extends(BaseERC20Handler, _super);
    function BaseERC20Handler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ethAbi = [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        return _this;
    }
    BaseERC20Handler.prototype.getContract = function (keychain) {
        if (keychain === void 0) { keychain = null; }
        return new ethers_1.ethers.Contract(this.ethContractAddr, this.ethAbi, keychain ? this.getWallet(keychain) : this.getProvider());
    };
    BaseERC20Handler.prototype.getBalance = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = this.getContract();
                        return [4, contract.balanceOf(addr)];
                    case 1:
                        ret = _a.sent();
                        return [2, new BaseCoinHandler_1.Balance(this, new BigNum_1.BigNum(ret.toString()), new BigNum_1.BigNum("0"))];
                }
            });
        });
    };
    BaseERC20Handler.prototype._getContractDecimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = this.getContract();
                        return [4, contract.decimals()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    BaseERC20Handler.prototype.getTransactionRequest = function (keychain, receiverAddr, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var contract, unsignedTx, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contract = this.getContract(keychain);
                        return [4, contract.populateTransaction.transfer(receiverAddr, "0x" + amount.toString(16))];
                    case 1:
                        unsignedTx = _b.sent();
                        _a = unsignedTx;
                        return [4, contract.estimateGas.transfer(receiverAddr, "0x" + amount.toString(16))];
                    case 2:
                        _a.gasLimit = _b.sent();
                        return [2, unsignedTx];
                }
            });
        });
    };
    BaseERC20Handler.prototype.explorerLinkAddr = function (address) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        }
        else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        }
    };
    BaseERC20Handler.prototype.explorerLinkTx = function (tx) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/tx/' + tx;
        }
        else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/tx/' + tx;
        }
    };
    BaseERC20Handler.prototype.canSendViaMessage = function () {
        return false;
    };
    return BaseERC20Handler;
}(BaseEthersHanlder));
exports.BaseERC20Handler = BaseERC20Handler;
//# sourceMappingURL=BaseEthersHanlder.js.map