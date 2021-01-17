"use strict"

var exchangeUniswap = ExtendObject(exchange, {
  key: null,
  name: null,
  url: "uniswap.org",
  shortDescription: "Uniswap is a decentralised Ethereum and ERC20 tokens exchange. It uses smart contracts allowing you to trade safely. Please refer to Uniswap website for more details:",

  _getProvider: null,
  _wethContractAddr: null,
  _routerContractAddr: null,
  _primaryCoin: null,

  _routerAbi: [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
  _gasLimit: 250000,

  _getRouter: function() {
    var Contract = this._getProvider().eth.Contract;
    return new Contract(this._routerAbi, this._routerContractAddr);
  },

  _getPrimaryHandler: function() {
    return app.wallets[this._primaryCoin].handler;
  },

  _getTokenHandler: function(coin) {
    return app.wallets[coin].handler;
  },

  _getPrimaryWallet: function() {
    return app.data.wallets[this._primaryCoin];
  },
  _getPrimaryPriv: function() {
    return this._getPrimaryWallet().privateKey;
  },
  _getPrimaryAddr: function() {
    return this._getPrimaryWallet().addr;
  },
  _getTradePath: function(from, to) {
    var path = [];
    if (from == this._primaryCoin) {
        path.push(this._wethContractAddr);
    } else {
        path.push(app.wallets[from].handler.ethContractAddr);
    }
    if ((from != this._primaryCoin) && (to != this._primaryCoin)) {
        path.push(this._wethContractAddr);
    }
    if (to == this._primaryCoin) {
        path.push(this._wethContractAddr);
    } else {
        path.push(app.wallets[to].handler.ethContractAddr);
    }
    return path;
  },

  _testAddLiquidity: function() {
        /*var handler = app.wallets['ETH.TST'].handler;
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
  },
  _approveIfRequired: function (from, amount, avgGas, callback) {
    var that = this;
    if (from != this._primaryCoin) {
      var handler = this._getTokenHandler(from);
      var contract = handler.getContract();
      contract.methods.allowance(
        this._getPrimaryAddr(),
        this._routerContractAddr
      ).call((err, result) => {
          if (err) {
              app.alertError(err, handler.code);
          } else {
              var systemAmount = handler.floatValueToSystemValue(amount);
              if (handler.systemValuesCompare(systemAmount, result) == 1) {
                    console.log('setting allowance');
                    var transaction = {
                      value: '0x0',
                      from: that._getPrimaryAddr(),
                      to: contract._address,
                      data: contract.methods.approve(that._routerContractAddr, systemAmount).encodeABI(),
                      gasPrice: avgGas,
                      gas: that._gasLimit
                    };
                    that._getPrimaryHandler().sendCustomTransaction(that._getPrimaryPriv(), transaction, function(){
                        console.log('allowance set');
                        callback();
                    });
              } else {
                console.log('alloance ok');
                callback();
              }
          }
      });
    } else {
      callback();
    }
  },
  _getRouterTransaction: function (from, to, amount, minOut, deadline, avgGas) {
    var router = this._getRouter();
    console.log(from, to, amount, minOut, deadline, avgGas);
    if (from === this._primaryCoin) {
        //function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts);
        return {
            value: this._getPrimaryHandler().floatValueToSystemValue(amount),
            from: this._getPrimaryAddr(),
            to: router._address,
            data: router.methods.swapExactETHForTokens(
                this._getTokenHandler(to).floatValueToSystemValue(minOut),
                this._getTradePath(from, to),
                this._getPrimaryAddr(),
                deadline
              ).encodeABI(),
            gasPrice: avgGas,
            gas: this._gasLimit
        };
    } else if (to === this._primaryCoin) {
        //function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
        return {
            value: '0x0',
            from: this._getPrimaryAddr(),
            to: router._address,
            data: router.methods.swapExactTokensForETH(
                this._getTokenHandler(from).floatValueToSystemValue(amount),
                this._getPrimaryHandler().floatValueToSystemValue(minOut),
                this._getTradePath(from, to),
                this._getPrimaryAddr(),
                deadline
              ).encodeABI(),
            gasPrice: avgGas,
            gas: this._gasLimit
        };
    } else {
        //function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
        return {
            value: '0x0',
            from: this._getPrimaryAddr(),
            to: router._address,
            data: router.methods.swapExactTokensForTokens(
                this._getTokenHandler(from).floatValueToSystemValue(amount),
                this._getTokenHandler(to).floatValueToSystemValue(minOut),
                this._getTradePath(from, to),
                this._getPrimaryAddr(),
                deadline
              ).encodeABI(),
            gasPrice: avgGas,
            gas: this._gasLimit
        };
    }
  },

  getCurrencies: function(callback) {
    var tokens = [];
    tokens.push(this._primaryCoin);
    for (var k in ERC20Tokens){
        if (ERC20Tokens[k].feeCoin.code == this._primaryCoin) {
            tokens.push(k);
        }
    }
    callback(tokens);
  },

  getMinAmount: function(from, to, callback) {
    return 0.0;
  },

  estimateExchangeAmount: function(from, to, amount, callback) {
    var that = this;
    var router = this._getRouter();
    var fromHandler = this._getTokenHandler(from);
    var toHandler = this._getTokenHandler(to);
    router.methods.getAmountsOut(
        fromHandler.floatValueToSystemValue(amount),
        this._getTradePath(from, to)
    ).call((err, result) => {
        if (err) {
            app.alertError(err, that._primaryCoin);
        } else {
            console.log(result);
            callback(toHandler.systemValueToFloatValue(result.pop()));
        }
    });
  },

  createTransaction: function(from, to, amount, returnTo, callback) {
    var that = this;
    this._getProvider().eth.getBlock('latest', (error, block) => {
        var deadline = block.timestamp + 300; // transaction expires in 300 seconds (5 minutes)
        that.estimateExchangeAmount(from, to, amount, function(estimatedOut) {
            var minOut = estimatedOut * 0.97; // allow max 3% loss compared to estimate (TODO configurable)
            that._getProvider().eth.getGasPrice().then(function(avgGas){
                that._approveIfRequired(from, amount, avgGas, function(){
                    var transaction = that._getRouterTransaction(from, to, amount, minOut, deadline, avgGas);
                    that._getPrimaryHandler().sendCustomTransaction(that._getPrimaryPriv(), transaction, function(){
                        console.log('EXCHANGE SENT');
                        //callback();
                    });
                });
            });
        });
    });
  },
});

var exchangeUniswapTest = ExtendObject(exchangeUniswap, {
  key: "uniswap.test",
  name: "Uniswap Test",
  testNet: true,
  shortDescription: "This is a Uniswap version that uses Ropsten testnet. You can trade test coins here. Advanced use only.",
  _getProvider: Web3JsBaseHandler.getTestnetProvider,
  _wethContractAddr: '0xc778417e063141139fce010982780140aa0cd5ab',
  _routerContractAddr: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  _primaryCoin: 'ETH.TST',

});

var exchangeUniswapProd = ExtendObject(exchangeUniswap, {
  key: "uniswap",
  name: "Uniswap",
  _getProvider: Web3JsBaseHandler.getMainnetProvider,
  _wethContractAddr: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  _routerContractAddr: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  _primaryCoin: 'ETH',
});

