import {BaseERC20Handler, BaseEthersHanlder} from "./BaseEthersHanlder";
import {CacheWrapper, LogInterface} from "../Engine";

export class HandlerEth extends BaseEthersHanlder {

    testCoin = false
    ticker = "ETH"
    code = "ETH"
    name = "Ethereum"
    icon = "eth"
    description = "via Wikipedia: Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. " +
        "Along with Bitcoin, Ethereum is considered to be one of the pioneer platforms in distributed ledger and blockchain technology.";
    links = {
        "ethereum.org" : "https://ethereum.org/",
        "Wikpedia" : "https://en.wikipedia.org/wiki/Ethereum"
    };

    networkName = 'homestead'

    explorerLinkAddr(address: string): string {
        return 'https://etherscan.io/address/' + address;
    }
    explorerLinkTx(txid: string): string {
        return 'https://etherscan.io/tx/' + txid;
    }

}

export class ERC20Handler extends BaseERC20Handler {

    testCoin = false
    ticker: string
    code: string
    name: string
    icon: string
    description: string
    links: { [key: string]: string; };

    ethContractAddr: string;
    networkName = 'ropsten';

    constructor(
        log: LogInterface,
        cache: CacheWrapper,
        ticker: string,
        name: string,
        icon: string,
        ethContractAddr: string,
        decimals: number,
        description: string = "",
        links: {[key:string] : string} = {}
    ) {
        super(log, cache)
        this.ticker = ticker;
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = this.name + " is an ERC20 token. " + description
        this.ethContractAddr = ethContractAddr
        this.decimals = decimals
        this.links = {
            ...links,
            "etherscan.io": "https://etherscan.io/token/" + this.ethContractAddr
        }
    }

}