
var testMode = true;

var BtcTestHandler = {
    name: "bitcoin-test",
    code: "BTC.TEST",
    longname: "Bitcoin Testnet",
    newPrivateKey: function() {
      return btcjs.newPrivKey(btcjs.networks.test);
    },
    addrFromPrivateKey: function(priv) {
      return btcjs.addrFromPriv(btcjs.networks.test, priv);
    },
    getBalance: function(addr, callback) {
      return btcjs.getBalance(btcjs.networks.test, addr, function (balance, pending) {callback((balance + pending) * 0.00000001)});
    },
    getLocalAddr: function() {
      return btcjs.addrFromPriv(btcjs.networks.test, getBtcPrivateKey());
    }
}

var BtcHandler = {
    name: "bitcoin",
    code: "BTC",
    longname: "Bitcoin",
    getBalance: function(addr, callback) {
      return btcjs.getBalance(btcjs.networks.test, addr, function (balance, pending) {callback((balance + pending) * 0.00000001)});
    },
    getLocalAddr: function() {
      return btcjs.addrFromPriv(btcjs.networks.test, getBtcPrivateKey());
    }
}

function getBtcPrivateKey() {
  var storage = window.localStorage;
  var value = storage.getItem('btcTestnetPrivKey');
  if (!value) {
    value = btcjs.newPrivKey(btcjs.networks.test);
    storage.setItem('btcTestnetPrivKey', value);
  }
  return value;
}

var LtcHandler = {
    name: "litecoin",
    code: "LTC",
    longname: "Litecoin"
}

var XrpHandler = {
    name: "ripple",
    code: "XRP",
    longname: "Ripple"
}

var LskHandler = {
    name: "lisk",
    code: "LSK",
    longname: "Lisk"
}

var PartHandler = {
    name: "particl",
    code: "PART",
    longname: "Particl"
}

var NeblHandler = {
    name: "neblio",
    code: "NEBL",
    longname: "Neblio"
}

var BchHandler = {
    name: "bitcoin-cash",
    code: "BCH",
    longname: "Bitcoin Cash"
}

web3 = new Web3(
  new Web3.providers.HttpProvider(
    testMode ? "https://ropsten.infura.io/O7OJXaza9lovtjycsQWS" : "https://mainnet.infura.io/O7OJXaza9lovtjycsQWS"
  )
);

var EthTestHandler = {
    name: "ethereum-test",
    code: "ETH.TEST",
    longname: "Ethereum Testnet",
};

var EthHandler = {
    name: "ethereum",
    code: "ETH",
    longname: "Ethereum",
    getBalance: function(addr, callback){
      web3.eth.getBalance(addr).then(function(val){
        callback(val == 0 ? 0.0 : parseFloat(web3.utils.fromWei(val, 'ether')));
      });
    },

    getLocalAddr: function(){
      return web3.eth.accounts.privateKeyToAccount(getEtherPrivateKey()).address;
    },

    sendAmountTo: function(addr, amount){

      app.alertMessage('signing transaction...');
      var account = web3.eth.accounts.privateKeyToAccount(getEtherPrivateKey());
      account.signTransaction({
        to: addr,
        value: web3.utils.toWei(parseFloat(amount).toString()),
        gas: 100000
      }).then(function(signedData){
        app.alertMessage('sending to network...');
        web3.eth.sendSignedTransaction(signedData.rawTransaction, function(err, response){
          if (err !== null) {
            app.alertMessage(err, 'error');
          } else {
            app.alertMessage('SENT TXN: ' + response, 'success');
          }
        });
      });
    }
}

function getEtherPrivateKey() {
  var storage = window.localStorage;
  var value = storage.getItem('ethPrivKey');
  if (!value) {
    value = web3.eth.accounts.create().privateKey;
    storage.setItem('ethPrivKey', value);
  }
  return value;
}

var PayHandler = {
    //https://etherscan.io/token/TenXPay?a=0xab22ee7d5f3d2bb9416ea2b71b822f3097419d0a
    name: "tenx",
    code: "PAY",
    longname: "TenX",
    ethContractAddr: '0xB97048628DB6B661D4C2aA833e95Dbe1A905B280',
    ethAbi: [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"startTrading","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tradingStarted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    getBalance: function(addr, callback){
      //TODO find PAY on testnet
      if (testMode) { callback(0); return; }

      var contract = new web3.eth.Contract(this.ethAbi, this.ethContractAddr);
      contract.methods.balanceOf(addr).call().then(function(val){
        callback(val == 0 ? 0.0 : parseFloat(web3.utils.fromWei(val, 'ether')));
      });
      /*, function(err, ok){
        console.log("TENX");
        console.log(ok);
      }));*/
    },
    getLocalAddr: function(){
      return web3.eth.accounts.privateKeyToAccount(getEtherPrivateKey()).address;
      //console.log(web3.eth.accounts.create());
    },
    sendAmountTo: function(addr, amount){
      var contract = new web3.eth.Contract(this.ethAbi, this.ethContractAddr);

      var account = web3.eth.accounts.privateKeyToAccount(getEtherPrivateKey());
      console.log(web3.utils.toWei(parseFloat(amount).toString()));

      var transaction = {
          value: '0x0',
          from: account.address,
          to: contract._address,
          data: contract.methods.transfer(addr, web3.utils.toWei(parseFloat(amount).toString())).encodeABI(),
          gas: 100000
      };
      //console.log(transaction);
      account.signTransaction(transaction).then(function(signedData){
        //console.log(signedData);
        app.alertMessage('sending to network...');
        web3.eth.sendSignedTransaction(signedData.rawTransaction, function(err, response){
          console.log(err);
          console.log(response);
          if (err !== null) {
            app.alertMessage(err, 'error');
          } else {
            app.alertMessage('SENT TXN: ' + response, 'success');
          }
        });
      });
    }
}


var allCoinApis = {
  'BTC.TEST': BtcTestHandler,
  'BTC': BtcHandler,
  'BCH': BchHandler,
  'ETH': EthHandler,
  'ETH.TEST': EthTestHandler,
  'PAY': PayHandler,
  'LTC': LtcHandler,
  'LSK': LskHandler,
  'NEBL': NeblHandler,
  'PART': PartHandler
};
