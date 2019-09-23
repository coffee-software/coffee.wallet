#!/usr/bin/nodejs

var fs = require('fs');
var btcjs = {networks: {}}

//eval(fs.readFileSync('./www/vendor/web3.min.js')+'');
//eval(fs.readFileSync('./www/vendor/btcjs.js')+'');
eval((fs.readFileSync('./www/js/core.js')+'').replace('\'use strict\'',''));
eval((fs.readFileSync('./www/js/coin.apis.btcjs.js')+'').replace('\'use strict\'',''));
eval((fs.readFileSync('./www/js/coin.apis.web3js.js')+'').replace('\'use strict\'',''));
eval((fs.readFileSync('./www/js/coin.apis.erc20.js')+'').replace('\'use strict\'',''));
eval((fs.readFileSync('./www/js/coin.apis.cmc.js')+'').replace('\'use strict\'',''));
eval((fs.readFileSync('./www/js/coin.apis.js')+'').replace('\'use strict\'',''));

Object.keys(allCoinApis).forEach(function(c) {
  if (('newPrivateKey' in allCoinApis[c]) && (!('testCoin' in allCoinApis[c]) || (!allCoinApis[c].testCoin))) {
    //csv
    console.log(
      allCoinApis[c].code+ ',' +
      allCoinApis[c].name+ ',' +
      '"' + allCoinApis[c].longname + '",' +
      'https://wallet.coffee//appwww/coins/' + allCoinApis[c].icon + '.svg'+ ',' +
      '"' + allCoinApis[c].description.replace(/"/g, '""') + '" '
    );
  }
});
