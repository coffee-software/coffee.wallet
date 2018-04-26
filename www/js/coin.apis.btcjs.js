'use strict'

var BtcTestHandler = {
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
    newPrivateKey: function() {
      return btcjs.newPrivKey(btcjs.networks.test);
    },
    addrFromPrivateKey: function(priv) {
      return btcjs.addrFromPriv(btcjs.networks.test, priv);
    },
    getBalance: function(addr, callback) {
      return btcjs.getBalance(btcjs.networks.test, addr, function (balance, pending) {callback((balance + pending) * 0.00000001)});
    },
    sendPayment: function(priv, receiver, amount, fee) {
      var that = this;
      return btcjs.sendPayment(btcjs.networks.test, priv, receiver, Math.round(amount * 100000000), fee[2],
        function(response) {
          app.alertSuccess('Successfully sent transaction. TXN: ' + response, that.code);
        }, function(error, data){
          app.alertError(error, that.code);
        });
    },
    validateAddress: function(addr) {
      return btcjs.validateAddress(btcjs.networks.test, addr);
    },
    getFees: function() {
      //TODO
      //key 0 - fee, 1 - estimated time, >1 internal coinparameters
      return [
        [0.0001, 5,  10000],
        [0.0003, 3.5,  30000],
        [0.0005, 2,  50000],
        [0.00075, 1.5,  75000],
        [0.0010, 1, 100000]
      ];
    }
}

var BtcHandler = {
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
    newPrivateKey: function() {
      return btcjs.newPrivKey(btcjs.networks.btc);
    },
    addrFromPrivateKey: function(priv) {
      return btcjs.addrFromPriv(btcjs.networks.btc, priv);
    },
    getBalance: function(addr, callback) {
      return btcjs.getBalance(btcjs.networks.btc, addr, function (balance, pending) {callback((balance + pending) * 0.00000001)});
    },
    sendPayment: function(priv, receiver, amount, fee) {
      var that = this;
      return btcjs.sendPayment(btcjs.networks.btc, priv, receiver, Math.round(amount * 100000000), fee[2],
        function(response) {
          app.alertSuccess('Successfully sent transaction. TXN: ' + response, that.code);
        }, function(error, data){
          app.alertError(error, that.code);
        });
    },
    validateAddress: function(addr) {
      return btcjs.validateAddress(btcjs.networks.btc, addr);
    },
    getFees: function() {
      //TODO
      //key 0 - fee, 1 - estimated time, >1 internal coinparameters
      return [
        [0.00002, 20,  2000],
        [0.00004, 10,  4000],
        [0.0001,  5,  10000],
        [0.0002, 3,   20000],
        [0.0004, 1,   40000]
      ];
    }
}

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

var LtcHandler = {
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
    __disabled__newPrivateKey: function() {
      return btcjs.newPrivKey(btcjs.networks.ltc);
    },
    __disabled__addrFromPrivateKey: function(priv) {
      return btcjs.addrFromPriv(btcjs.networks.ltc, priv);
    },
    getBalance: function(addr, callback) {
      return btcjs.getBalance(btcjs.networks.ltc, addr, function (balance, pending) {callback((balance + pending) * 0.00000001)});
    }
}
