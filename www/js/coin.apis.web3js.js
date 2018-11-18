'use strict'


var Web3JsBaseHandler = {
  feeCoin: null,
  getMainnetProvider: function(){
    if (typeof this.provider == 'undefined') {
      return new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/" + config.infuraKey));
    }
    return this.provider;
  },
  getTestnetProvider: function(){
    if (typeof this.provider == 'undefined') {
      return new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + config.infuraKey));
    }
    return this.provider;
  },
  newRandomPrivateKey: function() {
    return this._getProvider().eth.accounts.create().privateKey;
  },
  newPrivateKey: function() {
    var keyPair = btcjs.derivePathFromSeedHash(btcjs.networks.eth, app.data.wallets.bip39.seedHex, "m/44'/60'/0'/0/0");
    var ret = keyPair.d.toString(16);
    while (ret.length < 64) ret = "0" + ret;
    return "0x" + ret;
  },

  systemValuesDiff: function(v1, v2) {
    var bnv1 = new (this._getProvider().utils.BN)(v1);
    var bnv2 = new (this._getProvider().utils.BN)(v2);
    return bnv1.sub(bnv2).toString(10);
  },
  systemValuesCompare: function(v1, v2) {
    var bnv1 = new (this._getProvider().utils.BN)(v1);
    var bnv2 = new (this._getProvider().utils.BN)(v2);
    return bnv1.cmp(bnv2);
  },
  systemValueToDisplayValue: function(s){
    //TODO make this smarter
    return parseFloat(this._getProvider().utils.fromWei(s, 'ether')).toFixed(8);;
  },
  systemValueToFloatValue: function(s){
    return parseFloat(this._getProvider().utils.fromWei(s, 'ether'));
  },
  floatValueToSystemValue: function(f){
    return this._getProvider().utils.toWei("" + f, 'ether');
  },
  validateAddress: function(addr) {
    return this._getProvider().utils.isAddress(addr);
  },
  addrToIdenticonSeed: function(addr) {
    return parseInt(addr.slice(2, 10), 16);
  },

  addrFromPrivateKey: function(priv) {
    return this._getProvider().eth.accounts.privateKeyToAccount(priv).address;
  },
  getBalance: function(addr, callback) {
    var that = this;
    try {
      this._getProvider().eth.getBalance(addr).then(function(val){
        //console.log(val);
        //TODO consider unconfirmed?
        callback(val, '0');
      });
    } catch (err) {
      app.alertError(err.message, that.code);
      callback('0', '0');
    }
  },
  _getTransaction: function(account, receiver, amount, fee) {
    return {
      to: receiver,
      value: amount,
      gasPrice: fee[0],
      gas: 21000
    };
  },

  estimateFeeFloat: function(fee) {
    var f = new (this._getProvider().utils.BN)(fee[0]);
    var gas = new (this._getProvider().utils.BN)(21000);
    return this._getProvider().utils.fromWei(f.mul(gas), 'ether');
  },

  getFeeDisplay: function(fee) {
    return this.estimateFeeFloat(fee) + ' ' + this.feeCoin;
  },

  getFees: function(callback) {
    var provider = this._getProvider();
    provider.eth.getGasPrice().then(function(avgGas){
      var f = provider.utils.fromWei(avgGas, 'gwei');

      callback([
        [provider.utils.toWei("" +(f * 0.5), 'gwei'), 8.77],
        [provider.utils.toWei("" +(f * 0.75), 'gwei'), 2.86],
        [provider.utils.toWei("" +(f), 'gwei'), 2.43],
        [provider.utils.toWei("" +(f * 1.5), 'gwei'), 0.62],
        [provider.utils.toWei("" + (f * 2), 'gwei'), 0.6]
      ]);
    });
  },
  sendPayment: function(priv, receiver, amount, fee) {
    var that = this;
    app.alertInfo('signing transaction...', that.code);
    var account = this._getProvider().eth.accounts.privateKeyToAccount(priv);
    account.signTransaction(this._getTransaction(account, receiver, amount, fee)).then(function(signedData){
      app.alertInfo('sending transaction to network...', that.code);
      that._getProvider().eth.sendSignedTransaction(signedData.rawTransaction, function(err, response){
        if (err !== null) {
          app.alertError(err, that.code);
        } else {
          app.alertSuccess('Successfully sent transaction. TXN: <u>' + response + '</u>', that.code);
        }
      });
    });
  }
};

var EthTestHandler = ExtendObject(Web3JsBaseHandler, {

    _getProvider: Web3JsBaseHandler.getTestnetProvider,
    name: "ethereum-test",
    code: "ETH.TST",
    feeCoin: "ETH.TST",
    icon: "eth.test",
    longname: "Ethereum Testnet",
    description:
    "Robsten is an ethereum testing network.",
    links: {
      "Request Test Eth" : "http://faucet.ropsten.be:3001/"
    },
    explorerLinkAddr: function(addr) {
      return 'https://ropsten.etherscan.io/address/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://ropsten.etherscan.io/tx/' + tx;
    }
});

var EthHandler = ExtendObject(Web3JsBaseHandler, {
    _getProvider: Web3JsBaseHandler.getMainnetProvider,
    name: "ethereum",
    code: "ETH",
    feeCoin: "ETH",
    icon: "eth",
    longname: "Ethereum",
    description:
      "via Wikipedia: Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. " +
      "Along with Bitcoin, Ethereum is considered to be one of the pioneer platforms in distributed ledger and blockchain technology.",
    links: {
      "ethereum.org" : "https://ethereum.org/",
      "Wikpedia" : "https://en.wikipedia.org/wiki/Ethereum"
    },
    explorerLinkAddr: function(addr) {
      return 'https://etherscan.io/address/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://etherscan.io/tx/' + tx;
    }
});

//
var ERC20TestHandler = ExtendObject(Web3JsBaseHandler, {
  ethContractAddr: null,
  ethAbi: null,
  _getProvider: Web3JsBaseHandler.getTestnetProvider,
  feeCoin: "ETH.TST",
  newPrivateKey: EthHandler,

  getBalance: function(addr, callback){
    var c = this._getProvider().eth.Contract;
    var contract = new c(this.ethAbi, this.ethContractAddr);
    var that = this;
    contract.methods.balanceOf(addr).call().then(function(val){
      callback(val, '0');
    });
  },
  _getTransaction: function(account, receiver, amount, fee) {
    var c = this._getProvider().eth.Contract;
    var contract = new c(this.ethAbi, this.ethContractAddr);
    return {
        value: '0x0',
        from: account.address,
        to: contract._address,
        data: contract.methods.transfer(receiver, amount).encodeABI(),
        gasPrice: fee[0],
        gas: 200000 //TODO
    };
  },
  explorerLinkAddr: function(addr) {
    return 'https://ropsten.etherscan.io/token/' + this.ethContractAddr + '?a=' + addr;
  },
  explorerLinkTx: function(tx) {
    return 'https://ropsten.etherscan.io/tx/' + tx;
  }
});

var ERC20MainHandler = ExtendObject(ERC20TestHandler, {
    feeCoin: "ETH",
    _getProvider: Web3JsBaseHandler.getMainnetProvider,
    newPrivateKey: EthTestHandler,
    explorerLinkAddr: function(addr) {
      return 'https://etherscan.io/token/' + this.ethContractAddr + '?a=' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://etherscan.io/tx/' + tx;
    }
});

var ERC20Tokens = {
    'PAY' : ExtendObject(ERC20MainHandler, {
      name: "tenx",
      code: "PAY",
      icon: "pay",
      longname: "TenX",
      ethContractAddr: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
      description: "",
      links: {},
      ethAbi: [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    }),
    'CFT' : ExtendObject(ERC20MainHandler, {
      name: "coffeetoken",
      code: "CFT",
      icon: "cft",
      longname: "Coffee Token",
      ethContractAddr: '0x5bf2390a68ab7db7d27ae81894c4e22e669af236',
      description: "Coffee Token",
      links: {},
      ethAbi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}],
    }),
    'ERC20.TST' : ExtendObject(ERC20TestHandler, {
      name: "erc20-test",
      code: "ERC20.TST",
      icon: "erc20.tst",
      longname: "ERC20 Test Tokens",
      description: "simple ERC20 token published in Ropsten network",
      links: {},
      ethContractAddr: '0x251735ff853720582345c64cdb4eb44bd02e61a2',
      ethAbi:
      [{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    })
}
