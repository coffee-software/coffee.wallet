import {BaseEthersHanlder} from "./BaseEthersHanlder";

export class HandlerEthTest extends BaseEthersHanlder {

    testCoin = true
    ticker = "ETH.TST";
    name = "Test Ethereum";
    icon = "eth.test";
    description = "Robsten is an ethereum testing network.";
    links = {
        "Request Test Eth" : "http://faucet.ropsten.be:3001/"
    }
    networkName = 'ropsten'

    explorerLinkAddr(address: string): string {
        return 'https://ropsten.etherscan.io/address/' + address;
    }
    explorerLinkTx(txid: string): string {
        return 'https://ropsten.etherscan.io/tx/' + txid;
    }

}