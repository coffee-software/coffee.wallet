<?php
/**
* Simple script to pull missing coins from coin market cap.
*/

$json = json_decode(file_get_contents('https://api.coinmarketcap.com/v1/ticker/?limit=1000'), true);

$lines = array();

$head = <<<EOT
'use strict'

//automatic list from coinmarketcap api

var otherCoins = [
EOT;

foreach($json as $coin) {
  echo "$coin[name]\n";
  $icon = file_exists('www/coins/' . strtolower($coin['symbol']) . '.png') ? strtolower($coin['symbol']) : 'noicon';
  $lines[]= <<<EOT
{
    name: "{$coin['id']}",
    code: "{$coin['symbol']}",
    icon: "{$icon}",
    longname: "{$coin['name']}",
    description: "{$coin['name']} coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/{$coin['id']}/"
    }
}
EOT;

}
$foot = "];";

echo "DONE. saving coins file..\n";

file_put_contents('www/js/coin.apis.cmc.js', $head . implode(',', $lines) . $foot);
