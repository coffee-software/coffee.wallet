'use strict'

var BitcoinJsBaseHandler = {
    network: null,
    keyPath: null,
    newRandomPrivateKey: function() {
      return btcjs.newPrivKey(this.network);
    },
    newPrivateKey: function() {
      return btcjs.derivePathFromSeedHash(this.network, app.data.wallets.bip39.seedHex, this.keyPath).toWIF();
    },
    addrFromPrivateKey: function(priv) {
      return btcjs.addrFromPriv(this.network, priv);
    },
    systemValueToDisplayValue: function(s){
      return (s * Math.pow(10, -8)).toFixed(8);
    },
    systemValueToFloatValue: function(s){
      return (s * Math.pow(10, -8));
    },
    floatValueToSystemValue: function(f){
      return Math.round(f * Math.pow(10, 8));
    },
    getBalance: function(addr, callback) {
      var that = this;
      return btcjs.getBalance(this.network, addr, function (balance, pending) {callback(balance + pending, pending)}, function (error){app.alertError(error, that.code);});
    },
    sendPayment: function(priv, receiver, amount, fee) {
      var that = this;
      return btcjs.sendPayment(this.network, priv, receiver, amount, fee[0],
        function(response) {
          app.alertSuccess('Successfully sent transaction. TXN: <u>' + response + '</u>', that.code);
        }, function(error, data){
          app.alertError(error, that.code);
        });
    },
    validateAddress: function(addr) {
      return btcjs.validateAddress(this.network, addr);
    },

    estimateFeeFloat: function(fee) {
      return this.systemValueToFloatValue(fee[0]);
    },

    getFeeDisplay: function(fee) {
      return this.systemValueToDisplayValue(fee[0]) + ' ' + this.code;
    },

    getFees: function(callback) {
      var that = this;
      app.settings.getCached('coin-' + this.name + '-fees2', 15 * 60, function(callback){
        btcjs.getFees(that.network, callback);
      }, callback);
    }
};

var BtcTestHandler = ExtendObject(BitcoinJsBaseHandler, {
    network: btcjs.networks.test,
    keyPath: "m/44'/1'/0'/0/0",
    name: "bitcoin-test",
    code: "BTC.TST",
    icon: "btc.test",
    longname: "Bitcoin TestNet",
    description:
      "via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. " +
      "Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. " +
      "This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.",
    links: {
      "Bitcoin Wiki" : "https://en.bitcoin.it/wiki/Testnet",
      "Request TestNet coins" : "https://testnet.manu.backend.hamburg/faucet"
    },
    explorerLinkAddr: function(addr) {
      return 'https://testnet.blockchain.info/address/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://testnet.blockchain.info/tx/' + tx;
    }
})

var BtcHandler = ExtendObject(BitcoinJsBaseHandler, {
    network: btcjs.networks.btc,
    keyPath: "m/44'/0'/0'/0/0",
    name: "bitcoin",
    code: "BTC",
    icon: "btc",
    longname: "Bitcoin",
    description: "via Wikpedia: Bitcoin is a cryptocurrency and worldwide payment system. " +
      "It is the first decentralized digital currency, as the system works without a central bank or single administrator. " +
      "The network is peer-to-peer and transactions take place between users directly, without an intermediary. " +
      "These transactions are verified by network nodes through the use of cryptography and recorded in a public distributed ledger called a blockchain. " +
      "Bitcoin was invented by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009. ",
    links: {
      'bitcoin.org' : 'https://bitcoin.org/'
    },
    explorerLinkAddr: function(addr) {
      return 'https://www.blockchain.com/btc/address/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://www.blockchain.com/btc/tx/' + tx;
    }
});

var BchHandler = {
    name: "bitcoin-cash",
    code: "BCH",
    icon: "bch",
    longname: "Bitcoin Cash",
    description: "via bitcoin.com: Bitcoin Cash (BCH) is a peer-to-peer electronic cash system. " +
    "It is a consensus network that enables a new type of payment method and a completely digital form of money. " +
    "It is a decentralized peer-to-peer payment network that is powered by its users with no central authority or middlemen.",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/bitcoin-cash/",
      'bitcoin.com' : 'https://bitcoin.com/'
    }
}

var LtcHandler = ExtendObject(BitcoinJsBaseHandler, {
    network: btcjs.networks.ltc,
    keyPath: "m/44'/2'/0'/0/0",
    name: "litecoin",
    code: "LTC",
    icon: "ltc",
    longname: "Litecoin",
    description: "via litecoin.org: Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. " +
      "Litecoin is an open source, global payment network that is fully decentralized without any central authorities. " +
      "Mathematics secures the network and empowers individuals to control their own finances. " +
      "Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. " +
      "With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.",
    links: {
      'litecoin.org' : 'https://litecoin.org/'
    },
    explorerLinkAddr: function(addr) {
      return 'https://bchain.info/LTC/addr/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://bchain.info/LTC/tx/' + tx;
    }
});

var DogeHandler = ExtendObject(BitcoinJsBaseHandler, {
    network: btcjs.networks.doge,
    keyPath: "m/44'/3'/0'/0/0",
    name: "dogecoin",
    code: "DOGE",
    icon: "doge",
    longname: "Dogecoin",
    description:
      "Dogecoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. " +
      "Think of it as \"the internet currency.\"",
    links: {
      'dogecoin.com' : 'https://cogecoin.com/',
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/dogecoin/"
    },
    explorerLinkAddr: function(addr) {
      return 'https://dogechain.info/address/' + addr;
    },
    explorerLinkTx: function(tx) {
      return 'https://dogechain.info/tx/' + tx;
    }
});
