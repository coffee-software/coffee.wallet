import {BaseExchangeProvider} from "./BaseExchangeProvider";
import {NewTransaction, NewTransactionWrapper, OnlineCoinHandler} from "../Handlers/BaseCoinHandler";
import {BaseERC20Handler, BaseEthersHanlder, EthTransaction, isBaseERC20Handler} from "../Handlers/BaseEthersHanlder";
import {ethers} from "ethers";
import {BigNum} from "../Core/BigNum";
import {TransactionRequest} from "@ethersproject/abstract-provider/src.ts/index";
import {ERC20Handler} from "../Handlers/HandlerEth";

class UniswapTransactionWrapper extends NewTransactionWrapper {

    constructor(tx: EthTransaction) {
        super(tx);
    }

}

abstract class UniswapProvider extends BaseExchangeProvider {
    primaryCoin : string
    testNet : boolean
    shortDescription = "Uniswap is a decentralised Ethereum and ERC20 tokens exchange. It uses smart contracts allowing you to trade safely. Please refer to Uniswap website for more details:"
    url = "uniswap.org"
    wethContractAddr : string
    routerContractAddr : string
    routerAbi = [
        {"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
        {"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
        {"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},
        {"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},
        {"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},
        {"stateMutability":"payable","type":"receive"}
        ]

    private async getRouterTransaction(from: string, to: string, amount: BigNum, minOut: number, deadline: number) : Promise<TransactionRequest> {
        var router = this.getRouter();
        let minOutStr : string = "0x" + BigNum.fromFloat(minOut, this.getHandler(to).decimals).toString(16)
        let amountStr : string = "0x" + amount.toString(16)
        if (from === this.primaryCoin) {
            //function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts);
            let ret = await router.populateTransaction.swapExactETHForTokens(
                minOutStr,
                this.getTradePath(from, to),
                this.getHandler(to).getReceiveAddr(this.engine.keychain),
                deadline
            );
            ret.value = ethers.BigNumber.from(amountStr)
            return ret
        } else if (to === this.primaryCoin) {
            //function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
            return await router.populateTransaction.swapExactTokensForETH(
                amountStr,
                minOutStr,
                this.getTradePath(from, to),
                this.getHandler(to).getReceiveAddr(this.engine.keychain),
                deadline
            )
        } else {
            //function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
            return await router.populateTransaction.swapExactTokensForTokens(
                amountStr,
                minOutStr,
                this.getTradePath(from, to),
                this.getHandler(to).getReceiveAddr(this.engine.keychain),
                deadline
            )
        }
    }


    private getPrimaryHandler() : BaseEthersHanlder {
        if (!(this.primaryCoin in this.engine.wallets)) {
            throw new Error(this.primaryCoin + ' needs to be enabled');
        }
        return this.engine.wallets[this.primaryCoin].handler as BaseEthersHanlder
    }

    private getRouter() : ethers.Contract {
        return new ethers.Contract(this.routerContractAddr, this.routerAbi, this.getPrimaryHandler().getWallet(this.engine.keychain));
    }

    private getTokenHandler(coin: string) : BaseERC20Handler {
        let handler = this.engine.wallets[coin].handler;
        if (isBaseERC20Handler(handler)) {
            return handler;
        } else {
            throw new Error(coin + ' is not ERC20')
        }
    }

    private getHandler(coin: string) : BaseEthersHanlder {
        return (coin == this.primaryCoin) ? this.getPrimaryHandler() : this.getTokenHandler(coin);
    }

    private getTradePath(from: string, to: string) {
        let path = [];
        if (from == this.primaryCoin) {
            path.push(this.wethContractAddr);
        } else {
            path.push(this.getTokenHandler(from).ethContractAddr);
        }
        if ((from != this.primaryCoin) && (to != this.primaryCoin)) {
            path.push(this.wethContractAddr);
        }
        if (to == this.primaryCoin) {
            path.push(this.wethContractAddr);
        } else {
            path.push(this.getTokenHandler(to).ethContractAddr);
        }
        return path;
    }

    async getCurrencies() : Promise<string[]> {
        var tokens = [];
        tokens.push(this.primaryCoin);
        for (var k in this.engine.wallets){
            let handler = this.engine.allCoinHandlers[k];
            if ((handler.testCoin == this.testNet) && (isBaseERC20Handler(handler))) {
                tokens.push(k);
            }
        }
        return tokens;
    }

    async estimateExchangeAmount(from: string, to: string, amount: number): Promise<number> {
        var router = this.getRouter();
        var fromHandler = this.getHandler(from);
        var toHandler = this.getHandler(to);
        let result = await router.getAmountsOut(
            '0x' + BigNum.fromFloat(amount, fromHandler.decimals).toString(16),
            this.getTradePath(from, to)
        );
        return (new BigNum(result[result.length -1].toString())).toFloat(toHandler.decimals)
    }

    getMinAmount(from: string, to: string): Promise<number> {
        return Promise.resolve(0.0);
    }


    async createTransaction(from: string, to: string, amount: number, returnTo: string): Promise<NewTransaction> {

        let block = await this.getPrimaryHandler().getProvider().getBlock('latest');
        var deadline = block.timestamp + 300; // transaction expires in 300 seconds (5 minutes)
        let estimatedOut = await this.estimateExchangeAmount(from, to, amount);
        var minOut = estimatedOut * 0.97; // allow max 3% loss compared to estimate (TODO configurable)
        //let avgGas = (await this.getPrimaryHandler().getProvider().getGasPrice()).toNumber();
        let systemAmount = BigNum.fromFloat(amount, this.getHandler(from).decimals);

        var transaction = await this.getRouterTransaction(from, to, systemAmount, minOut, deadline);
        let fromHandler = this.getHandler(from);
        if (from != this.primaryCoin) {
            let fromContract = (fromHandler as ERC20Handler).getContract(this.engine.keychain);
            let currentAloowance = await fromContract.allowance(fromHandler.getReceiveAddr(this.engine.keychain), this.routerContractAddr);
            //TODO
            let currentAllowance = new BigNum(currentAloowance.toString());

            if (systemAmount.cmp(currentAllowance) == 1) {
                console.log("MORE ALLOWANCE REQUIRED");
                let allowTransaction = await fromContract.populateTransaction.approve(
                    this.routerContractAddr,
                    '0x' + systemAmount.toString(16)
                );
                return new UniswapTransactionWrapper(await fromHandler.prepareCustomTransaction(
                    this.engine.keychain,
                    allowTransaction
                ));
            }
        }

        return new UniswapTransactionWrapper(await fromHandler.prepareCustomTransaction(
            this.engine.keychain,
            transaction
        ));
    }

    private _testAddLiquidity() {
        /*
        var handler = app.wallets['ETH.TST'].handler;
        var transaction = {
            value: handler.floatValueToSystemValue(0.1), //'0x0
            from: account.address,
            to: router._address,
            data: router.methods.addLiquidityETH(
              tokenAddr,
              handler.floatValueToSystemValue(10),
              handler.floatValueToSystemValue(5),
              handler.floatValueToSystemValue(0.05),
              account.address,
              deadline
            ).encodeABI(),
            gasPrice: avgGas,
            gas: that._gasLimit
        };*/
    }
}

export class UniswapTestProvider extends UniswapProvider {
    key = "uniswap.test"
    name = "Uniswap Test"
    shortDescription = "This is a Uniswap version that uses Ropsten testnet. You can trade test coins here. Advanced use only."
    wethContractAddr = '0xc778417e063141139fce010982780140aa0cd5ab'
    routerContractAddr = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    primaryCoin = 'ETH.TST'
    testNet = true
}

export class UniswapProdProvider extends UniswapProvider {
    key = "uniswap"
    name = "Uniswap"
    wethContractAddr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    routerContractAddr = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    primaryCoin = 'ETH'
    testNet = false
}

