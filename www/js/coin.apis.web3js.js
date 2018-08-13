'use strict'

var EthFunctions = {
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
    return "0x" + keyPair.d.toString(16);
  },
  addrFromPrivateKey: function(priv) {
    return this._getProvider().eth.accounts.privateKeyToAccount(priv).address;
  },
  validateAddress: function(addr) {
    return this._getProvider().utils.isAddress(addr);
  },
  getBalance: function(addr, callback) {
    var that = this;
    try {
      this._getProvider().eth.getBalance(addr).then(function(val){
        //console.log(val);
        //TODO consider unconfirmed?
        callback(val == 0 ? 0.0 : parseFloat(that._getProvider().utils.fromWei(val, 'ether')), 0.0);
      });
    } catch (err) {
      app.alertError(err.message, that.code);
      callback(0.0, 0.0);
    }
  },
  _getTransaction: function(account, receiver, amount, fee) {
    return {
      to: receiver,
      value: this._getProvider().utils.toWei(parseFloat(amount).toString()),
      gasPrice: fee[2],
      gas: 21000 //TODO!
    };
  },
  getFees: function(callback) {
    //TODO: https://ethgasstation.info/json/ethgasAPI.json
    //key 0 - fee, 1 - estimated time, >1 internal coinparameters
    callback([
      [0.00002, 8.77, '1000000000'],
      [0.00004, 2.86, '2000000000'],
      [0.00006, 2.43, '3000000000'],
      [0.00008, 0.62, '4000000000'],
      [0.00011, 0.6, '5000000000']
    ]);
  },
  sendPayment: function(priv, receiver, amount, fee) {
    var that = this;
    app.alertInfo('signing transaction...', that.code);
    var account = this._getProvider().eth.accounts.privateKeyToAccount(priv)
    account.signTransaction(this._getTransaction(account, receiver, amount, fee)).then(function(signedData){
      app.alertInfo('sending transaction to network...', that.code);
      that._getProvider().eth.sendSignedTransaction(signedData.rawTransaction, function(err, response){
        if (err !== null) {
          app.alertError(err, that.code);
        } else {
          app.alertSuccess('Successfully sent transaction. TXN: ' + response, that.code);
        }
      });
    });
  }
}

var EthTestHandler = {
    name: "ethereum-test",
    code: "ETH.TST",
    icon: "eth.test",
    longname: "Ethereum Testnet",
    description:
    "Robsten is an ethereum testing network.",
    links: {
      "Request Test Eth" : "http://faucet.ropsten.be:3001/"
    },
    _getProvider: EthFunctions.getTestnetProvider,
    newPrivateKey: EthFunctions.newPrivateKey,
    newRandomPrivateKey: EthFunctions.newRandomPrivateKey,
    getFees: EthFunctions.getFees,
    validateAddress: EthFunctions.validateAddress,
    addrFromPrivateKey: EthFunctions.addrFromPrivateKey,
    getBalance: EthFunctions.getBalance,
    _getTransaction: EthFunctions._getTransaction,
    sendPayment: EthFunctions.sendPayment
};

var EthHandler = {
    name: "ethereum",
    code: "ETH",
    icon: "eth",
    longname: "Ethereum",
    description:
      "via Wikipedia: Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. " +
      "Along with Bitcoin, Ethereum is considered to be one of the pioneer platforms in distributed ledger and blockchain technology.",
    links: {
      "ethereum.org" : "https://ethereum.org/",
      "Wikpedia" : "https://en.wikipedia.org/wiki/Ethereum"
    },
    _getProvider: EthFunctions.getMainnetProvider,
    newPrivateKey: EthFunctions.newPrivateKey,
    newRandomPrivateKey: EthFunctions.newRandomPrivateKey,
    getFees: EthFunctions.getFees,
    addrFromPrivateKey: EthFunctions.addrFromPrivateKey,
    getBalance: EthFunctions.getBalance,
    _getTransaction: EthFunctions._getTransaction,
    sendPayment: EthFunctions.sendPayment
}

var ERC20Tokens = {
    'PAY' : {
      name: "tenx",
      code: "PAY",
      longname: "TenX",
      network: "main",
      ethContractAddr: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
      description: "",
      links: {},
      ethAbi: [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    },
    'CFT' : {
      name: "coffeetoken",
      code: "CFT",
      longname: "Coffee Token",
      network: "main",
      ethContractAddr: '0x5bf2390a68ab7db7d27ae81894c4e22e669af236',
      description: "Coffee Token",
      links: {},
      ethAbi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}],
    },
    'ERC20.TST' : {
      name: "erc20-test",
      code: "ERC20.TST",
      longname: "ERC20 Test Tokens",
      network: "test",
      description: "simple ERC20 token published in Ropsten network",
      links: {},
      ethContractAddr: '0x251735ff853720582345c64cdb4eb44bd02e61a2',
      ethAbi:
      [{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    }
}

var ERC20Handler = function(tokenData) {
    this.name = tokenData.name;
    this.code = tokenData.code;
    this.icon = tokenData.code.toLowerCase();
    this.longname = tokenData.longname;
    this.ethContractAddr = tokenData.ethContractAddr;
    this.ethAbi = tokenData.ethAbi;
    this.description = tokenData.description;
    this.links = tokenData.links;

    this._getProvider = tokenData.network == 'main' ? EthFunctions.getMainnetProvider : EthFunctions.getTestnetProvider;
    this.newPrivateKey = tokenData.network == 'main' ? EthHandler : EthTestHandler;
    this.newRandomPrivateKey = EthFunctions.newRandomPrivateKey,
    this.addrFromPrivateKey = EthFunctions.addrFromPrivateKey;
    this.getFees = EthFunctions.getFees;
    this.validateAddress = EthFunctions.validateAddress;

    this.getBalance = function(addr, callback){
      var c = this._getProvider().eth.Contract;
      var contract = new c(this.ethAbi, this.ethContractAddr);
      var that = this;
      contract.methods.balanceOf(addr).call().then(function(val){
        callback(val == 0 ? 0.0 : parseFloat(that._getProvider().utils.fromWei(val, 'ether')), 0.0);
      });
    };

    this._getTransaction = function(account, receiver, amount, fee) {
      var c = this._getProvider().eth.Contract;
      var contract = new c(this.ethAbi, this.ethContractAddr);
      return {
          value: '0x0',
          from: account.address,
          to: contract._address,
          data: contract.methods.transfer(receiver, this._getProvider().utils.toWei(parseFloat(amount).toString())).encodeABI(),
          gasPrice: fee[2],
          gas: 200000 //TODO
      };
    };

    this.sendPayment = EthFunctions.sendPayment;

}
