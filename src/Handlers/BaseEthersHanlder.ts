import { ethers } from "ethers"
import {Balance, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../Core/BigNum";
import {Keychain} from "../Keychain";
import {JsonRpcProvider} from "@ethersproject/providers/src.ts/json-rpc-provider";
import {TransactionRequest} from "@ethersproject/abstract-provider/src.ts";
import {Wallet} from "@ethersproject/wallet/src.ts";
import * as bip32 from "bip32";
import {CacheWrapper, LogInterface} from "../Engine";
import {Config} from "../../src/Config";

class EthTransaction implements NewTransaction {
    handler: BaseEthersHanlder
    data : TransactionRequest
    signed: string
    receiverAddr: string
    amount: BigNum

    constructor(handler: BaseEthersHanlder, data : TransactionRequest, signed: string, receiverAddr: string, amount: BigNum) {
        this.data = data
        this.handler = handler
        this.signed = signed
        this.receiverAddr = receiverAddr
        this.amount = amount
    }

    getAmountDisplay() : string {
        return this.amount.toString(); //app.engine.shortAmount(displayAmount, coin, 13)
    }

    getRecipientDisplay() : string {
        return this.receiverAddr;
    }

    getBalanceAfter(): string {
        return "";
    }

    getFeeDisplay(): string {
        console.log(this.data.gasLimit.toString());
        console.log(this.data.gasPrice.toString());

        let ret = new BigNum(this.data.gasLimit.toString())
        ret = ret.mul(new BigNum(this.data.gasPrice.toString()))
        return ret.toFloat(18).toFixed(7) + (this.handler.testCoin ? ' ETH.TST' : ' ETH');
    }

    getFeeETA(): string {
        return "~ 1min";
    }

    getSummary(): { [code: string] : string } {
        return {
            "recipient": this.receiverAddr,
            "amount": this.amount.toString(10),
            "value": this.amount.toFloat(this.handler.decimals).toString(),
            "fee" : this.getFeeDisplay(),
            "ETA" : this.getFeeETA()
        };
    }

    async send(): Promise<string> {
        var response = await this.handler.getProvider().sendTransaction(this.signed);
        return response.hash;
    }
}

export abstract class BaseEthersHanlder implements OnlineCoinHandler {

    onlineCoin = true;
    abstract testCoin: boolean;
    abstract ticker: string;
    abstract name: string;
    abstract code: string;
    abstract icon: string;
    abstract description: string;
    abstract links: { [p: string]: string };
    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    log: LogInterface
    cache: CacheWrapper

    constructor(log: LogInterface, cache: CacheWrapper) {
        this.log = log
        this.cache = cache
    }

    abstract networkName: string;

    getProvider(): JsonRpcProvider {
        return new ethers.providers.InfuraProvider(this.networkName, Config.infuraKey);
    }

    async getBalance(addr: string): Promise<Balance> {
        let ret = await this.getProvider().getBalance(addr);
        return new Balance(this, new BigNum(ret.toString()), new BigNum("0"));
    }

    async getOwnBalance(keychain: Keychain): Promise<Balance> {
        return await this.getBalance(this.getReceiveAddr(keychain));
    }

    decimals = 18

    getDescription(): string {
        return "";
    }

    async getFeeOptions(): Promise<number[]> {
        let gasPrice = await this.getProvider().getGasPrice();
        let price = gasPrice.toNumber();
        return [
            Math.round(price * 0.7),
            Math.round(price * 0.85),
            price,
            Math.round(price * 1.15),
            Math.round(price * 1.3)
        ];
    }

    getIcon(): string {
        return "";
    }

    getIdenticonSeed(addr: string): number {
        return parseInt(addr.slice(2, 10), 16);
    }

    getLinks(): { [p: string]: string } {
        return {};
    }

    getName(): string {
        return "";
    }

    getWallet(keychain: Keychain): Wallet {
        return new ethers.Wallet(this.getPrivateKeyAsHex(keychain), this.getProvider());
    }

    getPrivateKeyAsHex(keychain: Keychain) : string {
        var bip32 = this.getPrivateKey(keychain);
        var ret = bip32.privateKey.toString('hex');
        while (ret.length < 64) ret = "0" + ret;
        return "0x" + ret;
    }

    getPrivateKey(keychain: Keychain): bip32.BIP32Interface {
        return keychain.derivePath("m/44'/60'/0'/0/0");
    }

    getReceiveAddr(keychain: Keychain): string {
        return this.getWallet(keychain).address;
    }

    getTicker(): string {
        return "";
    }

    protected async getTransactionRequest(keychain: Keychain, receiverAddr: string, amount: BigNum): Promise<TransactionRequest> {
        return {
            to: receiverAddr,
            value: "0x" + amount.toString(16),
            gasLimit: 21000
        };
    }

    async prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        let from = this.getReceiveAddr(keychain);
        let tx : TransactionRequest = await this.getTransactionRequest(keychain, receiverAddr, amount)
        tx.gasPrice = fee
        tx.nonce = "0x" + (await this.getProvider().getTransactionCount(from)).toString(16);

        let signed = await this.getWallet(keychain).signTransaction(tx);
        return new EthTransaction(this, tx, signed, receiverAddr, amount);
    }

    validateAddress(addr: string): boolean {
        return ethers.utils.isAddress(addr);
    }

    canSendViaMessage(): boolean {
        return true;
    }

    newRandomPrivateKey() : string {
        let wallet = ethers.Wallet.createRandom();
        return wallet.privateKey;
    }

    addressFromPrivateKey(pk: string) : string {
        return (new ethers.Wallet(pk)).address;
    }
}

export abstract class BaseERC20Handler extends BaseEthersHanlder {

    abstract ethContractAddr: string
    ethAbi: ethers.ContractInterface = [
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
                    "name":"to",
                    "type":"address"
                },
                {
                    "name":"tokens",
                    "type":"uint256"
                }
            ],
            "name":"transfer",
            "outputs": [
                {
                    "name":"success",
                    "type":"bool"
                }
            ],
            "payable":false,
            "stateMutability":"nonpayable",
            "type":"function"
        }
    ]
    //feeCoin: EthTestHandler,
    //gasLimit: 200000,

    private getContract(keychain: Keychain = null) : ethers.Contract {
        return new ethers.Contract(this.ethContractAddr, this.ethAbi, keychain ? this.getWallet(keychain) : this.getProvider());
    }

    async getBalance(addr: string): Promise<Balance> {
        let contract = this.getContract();
        let ret = await contract.balanceOf(addr);
        return new Balance(this, new BigNum(ret.toString()), new BigNum("0"));
    }

    private async _getContractDecimals() {
        var contract = this.getContract();
        await contract.decimals();
    }

    protected async getTransactionRequest(keychain: Keychain, receiverAddr: string, amount: BigNum): Promise<TransactionRequest> {
        var contract = this.getContract(keychain);
        let unsignedTx = await contract.populateTransaction.transfer(receiverAddr, "0x" + amount.toString(16));
        unsignedTx.gasLimit = await contract.estimateGas.transfer(receiverAddr, "0x" + amount.toString(16));
        return unsignedTx;
    }

    explorerLinkAddr(address : string) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        } else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        }
    }
    explorerLinkTx(tx: string) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/tx/' + tx;
        } else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/tx/' + tx;
        }
    }

    canSendViaMessage(): boolean {
        return false;
    }
}