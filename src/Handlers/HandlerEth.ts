import {BaseEthersHanlder} from "./BaseEthersHanlder";

export class HandlerEth extends BaseEthersHanlder {

    testCoin = false
    ticker = "ETH"
    name = "Ether"
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