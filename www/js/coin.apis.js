'use strict'

var allCoinApis = {
  'BTC.TST': BtcTestHandler,
  'ETH.TST': EthTestHandler,
  'ETH.TST2': EthKovanTestHandler,
  'LTC': LtcHandler,
  'DOGE': DogeHandler,
  'BTC': BtcHandler,
  //'BCH': BchHandler,
  'ETH': EthHandler

};

for (var k in ERC20Tokens){
  allCoinApis[k] = ERC20Tokens[k];
}

//those will be added regarding of no value and no rank:
var forcedCoins = Object.keys(allCoinApis);
var allCoinApisByRank = new Array();

for (var i=0; i<otherCoins.length;i++) {
  if (!(otherCoins[i].code in allCoinApis)) {
    allCoinApis[otherCoins[i].code] = otherCoins[i];
  }

  allCoinApisByRank.push([allCoinApis[otherCoins[i].code], otherCoins[i].rank]);

  var forcedCoinsIndex = forcedCoins.indexOf(otherCoins[i].code);
  if (forcedCoinsIndex !== -1) {
      forcedCoins.splice(forcedCoinsIndex, 1);
  }
}

for (var i=0; i< forcedCoins.length; i++) {
  allCoinApisByRank.push([allCoinApis[forcedCoins[i]], 30000]);
}

allCoinApisByRank.sort(function(a, b) {
    return a[1] - b[1];
});

for (var i in allCoinApisByRank) {
  allCoinApisByRank[i] = allCoinApisByRank[i][0];
}
