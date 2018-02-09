
var EthFunctions = {
  getMainnetProvider: function(){
    if (typeof this.provider == 'undefined') {
      return new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/O7OJXaza9lovtjycsQWS"));
    }
    return this.provider;
  },
  getTestnetProvider: function(){
    if (typeof this.provider == 'undefined') {
      return new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/O7OJXaza9lovtjycsQWS"));
    }
    return this.provider;
  },
  newPrivateKey: function() {
    return this._getProvider().eth.accounts.create().privateKey
  },
  addrFromPrivateKey: function(priv) {
    return this._getProvider().eth.accounts.privateKeyToAccount(priv).address;
  },
  getBalance: function(addr, callback) {
    var that = this;
    this._getProvider().eth.getBalance(addr).then(function(val){
      console.log(val);
      callback(val == 0 ? 0.0 : parseFloat(that._getProvider().utils.fromWei(val, 'ether')));
    });
  },
  _getTransaction: function(account, receiver, amount, fee) {
    return {
      to: receiver,
      value: this._getProvider().utils.toWei(parseFloat(amount).toString()),
      gasPrice: fee[2],
      gas: 21000 //TODO!
    };
  },
  getFees: function() {
    //TODO: https://ethgasstation.info/json/ethgasAPI.json
    //key 0 - fee, 1 - estimated time, >1 internal coinparameters
    return [
      [0.00002, 8.77, '1000000000'],
      [0.00004, 2.86, '2000000000'],
      [0.00006, 2.43, '3000000000'],
      [0.00008, 0.62, '4000000000'],
      [0.00011, 0.6, '5000000000']
    ];
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
    code: "ETH.TEST",
    longname: "Ethereum Testnet",
    description:
    "Robsten is an ethereum testing network.",
    links: {
      "Request Test Eth" : "http://faucet.ropsten.be:3001/"
    },
    _getProvider: EthFunctions.getTestnetProvider,
    newPrivateKey: EthFunctions.newPrivateKey,
    getFees: EthFunctions.getFees,
    addrFromPrivateKey: EthFunctions.addrFromPrivateKey,
    getBalance: EthFunctions.getBalance,
    _getTransaction: EthFunctions._getTransaction,
    sendPayment: EthFunctions.sendPayment
};

var EthHandler = {
    name: "ethereum",
    code: "ETH",
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
    getFees: EthFunctions.getFees,
    addrFromPrivateKey: EthFunctions.addrFromPrivateKey,
    getBalance: EthFunctions.getBalance,
    _getTransaction: EthFunctions._getTransaction,
    sendPayment: EthFunctions.sendPayment
}

var PayHandler = {
    //https://etherscan.io/token/TenXPay?a=0xab22ee7d5f3d2bb9416ea2b71b822f3097419d0a
    name: "tenx",
    code: "PAY",
    longname: "TenX",
    ethContractAddr: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
    ethAbi: [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],

    _getProvider: EthFunctions.getMainnetProvider,
    newPrivateKey: EthHandler,
    addrFromPrivateKey: EthFunctions.addrFromPrivateKey,

    getBalance: function(addr, callback){
      var c = this._getProvider().eth.Contract;
      var contract = new c(this.ethAbi, this.ethContractAddr);
      var that = this;
      contract.methods.balanceOf(addr).call().then(function(val){
        callback(val == 0 ? 0.0 : parseFloat(that._getProvider().utils.fromWei(val, 'ether')));
      });
    },

    _getTransaction: function(account, receiver, amount, fee) {
      var c = this._getProvider().eth.Contract;
      var contract = new c(this.ethAbi, this.ethContractAddr);
      return {
          value: '0x0',
          from: account.address,
          to: contract._address,
          data: contract.methods.transfer(receiver, this._getProvider().utils.toWei(parseFloat(amount).toString())).encodeABI(),
          gas: 100000
      };
    },

    sendPayment: EthFunctions.sendPayment
}
