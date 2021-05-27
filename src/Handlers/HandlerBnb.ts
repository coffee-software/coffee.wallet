import {BaseERC20Handler, BaseEthersHanlder} from "./BaseEthersHanlder";
import {BaseProvider} from "@ethersproject/providers/src.ts/base-provider";
import {ethers} from "ethers";
import {Keychain} from "../Keychain";
import * as bip32 from "bip32";

export class HandlerBnb extends BaseEthersHanlder {

    networkName = ''
    getProvider(): BaseProvider {
        return new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.defibit.io/', {
            name: 'Smart Chain',
            chainId: 56,
        });
    }

    testCoin = false
    ticker = "BNB"
    code = "BNB.2"
    name = "Binance Coin"
    icon = "bnb.bep20"
    description = "Launched in July 2017, Binance is one of the biggest cryptocurrency exchanges globally. " +
        "By aiming to bring cryptocurrency exchanges to the forefront of financial activity globally. " +
        "The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance.";

    links = {
        "binance.com" : "https://binance.com/"
    };
    coinGeckoId = 'binance-coin';
    coinMarketCapId = 'binance-coin';
    coinPaprikaId = 'bnb-binance-coin';

    explorerLinkAddr(address: string): string {
        return 'https://bscscan.com/address/' + address;
    }
    explorerLinkTx(txid: string): string {
        return 'https://bscscan.com/tx/' + txid;
    }

    getPrivateKey(keychain: Keychain): bip32.BIP32Interface {
        return keychain.derivePath("m/44'/60'/1'/0/0");
    }
}

/*
export class BEP20Handler extends BaseERC20Handler {

    ticker: string
    code: string
    name: string
    icon: string
    description: string
    links: { [key: string]: string; };
    ethContractAddr: string;

    testCoin = false
    feeHandlerCode = 'ETH'
    networkName = 'homestead';

    coinGeckoId = '';
    coinMarketCapId = '';
    coinPaprikaId = '';

    constructor(
        engine: Engine,
        ticker: string,
        name: string,
        icon: string,
        ethContractAddr: string,
        decimals: number,
        description: string = "",
        website: string = "",
        coinPaprikaId: string = "",
        coinGeckoId: string = "",
        coinMarketCapId: string = ""
    ) {
        super(engine)
        this.ticker = ticker;
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = this.name + " is an ERC20 token. " + description
        this.ethContractAddr = ethContractAddr
        this.decimals = decimals
        this.links = {}
        this.coinGeckoId = coinGeckoId
        this.coinMarketCapId = coinMarketCapId
        this.coinPaprikaId = coinPaprikaId
        if (website.length) {
            this.links[(new URL(website)).host] = website
        }
        this.links["etherscan.io"] = "https://etherscan.io/token/" + this.ethContractAddr
    }

}*/