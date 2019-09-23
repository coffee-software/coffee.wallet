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

console.log('<div>');
console.log('<div id="supported">\n');
console.log('<p>This coins have a full wallet support. You can generate an address for this coins, send and receive them in Coffee Wallet.</p>\n');
Object.keys(allCoinApis).forEach(function(c) {
  if (('newPrivateKey' in allCoinApis[c]) && (!('testCoin' in allCoinApis[c]) || (!allCoinApis[c].testCoin))) {

  //csv
    /*
  document.write(allCoinApis[c].code+ ',');
  document.write(allCoinApis[c].name+ ',');
  document.write('"' + allCoinApis[c].longname + '",');
  document.write('https://wallet.coffee//appwww/coins/' + allCoinApis[c].icon + '.svg'+ ',');
  document.write('"' + allCoinApis[c].description.replace(/"/g, '""') + '"\n<br/>');
  */
  //end


    console.log('<div class="coin">\n');
    console.log('<img src="appwww/coins/' + allCoinApis[c].icon + '.svg"/>\n');
    console.log('<h4>' + allCoinApis[c].longname + ' (<strong>' + allCoinApis[c].code + '</strong>)</h4>\n');
    console.log('<div class="details">\n');
    console.log(allCoinApis[c].description + '\n');
    console.log('<ul class="links">\n');
    for (var n in allCoinApis[c].links) {
      console.log('<li><a href="' + allCoinApis[c].links[n] + '" target="_blank">' + n + '</a></li>\n');
    }
    console.log('</ul>\n');
    console.log('</div>\n');
    console.log('</div>\n');
  }
});


console.log('</div>\n');
console.log('<div id="others">\n');
console.log('<h2>Other Coins (alphabetical order)</h2>\n');
console.log('<p>You can track those coins portfolio using Coffee Wallet</p>\n');
console.log('<ul>\n');
Object.keys(allCoinApis).sort().forEach(function(c) {
  if (!('newPrivateKey' in allCoinApis[c])) {
    var url = allCoinApis[c].links[Object.keys(allCoinApis[c].links)[0]];

    console.log('<li><a href="' + url + '" target="_blank">' + allCoinApis[c].longname + ' (<strong>' + allCoinApis[c].code + '</strong>)</a></li>\n');
  }
});
console.log('</ul>\n');
console.log('</div>\n');
console.log('</div>\n');
