<?php
/**
* Simple script to pull missing coins from coin market cap.
*/

$addCount = 600;
$newCoins = [];
system('{ cat www/js/coin.apis.cmc.js; echo "require(\'fs\').writeFileSync(\'.tmp.json\', JSON.stringify(otherCoins));"; } | nodejs');
$oldCoins = json_decode(file_get_contents('.tmp.json'), true);
unlink('.tmp.json');


foreach ($oldCoins as $coin) {
  $newCoins[$coin['code']] = [
    'id' => $coin['name'],
    'symbol' => $coin['code'],
    'name' => $coin['longname'],
    'rank' => $coin['rank'] + $addCount
  ];
}

$oldCount = count($newCoins);
echo "old coins: " . $oldCount . "\n";
$cmc_rank = 0;
for ($p=0; $p<$addCount; $p+=100) {
  $json = json_decode(file_get_contents('https://api.coinmarketcap.com/v1/ticker/?limit=100&start='.$p), true);
  $uniqueSymbols = [];
  if($json){
    foreach ($json as $coin) {

      $cmc_rank++;
      $suffix = 0;
      $symbol = $coin['symbol'];
      while (!empty($uniqueSymbols[$coin['symbol']])) {
        $symbol = $coin['symbol'] = $symbol . '-' . (++$suffix);
        echo "repeated $symbol\n";
      }
      $uniqueSymbols[$coin['symbol']] = true;
      $newCoins[$symbol] = $coin;
      $newCoins[$symbol]['rank'] = $cmc_rank;
    }
    for ($x=0; $x<20; $x++) { sleep(1); echo "."; }
  }
  echo "new coins: " . count($newCoins) . "\n";
}

//$rank = 0;


//$names = array_column($newCoins, 'id');
//array_multisort($names, SORT_ASC, $newCoins);
usort($newCoins, function ($item1, $item2) {
    return $item1['id'] <=> $item2['id'];
});

$lines = array();

$head = <<<EOT
'use strict'

//automatic list from coinmarketcap api

var otherCoins = [
EOT;


foreach($newCoins as $coin) {
  echo ".";
  //echo "$coin[name]\n";
  //$rank ++;
  //$icon = file_exists('www/coins/' . strtolower($coin['symbol']) . '.png') ? strtolower($coin['symbol']) : 'noicon';

  $icon = strtolower($coin['symbol']);
  shell_exec('dev/generateicon.sh ' . escapeshellarg($icon));
  $lines[]= <<<EOT
{
    name: "{$coin['id']}",
    code: "{$coin['symbol']}",
    icon: "{$icon}",
    longname: "{$coin['name']}",
    description: "{$coin['name']} coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/{$coin['id']}/"
    },
    rank: "{$coin['rank']}"
}
EOT;

}
echo "\n";

$foot = "];";

echo "DONE. saving coins file..\n";
//echo implode(',', $lines);
file_put_contents('www/js/coin.apis.cmc.js', $head . implode(',', $lines) . $foot);
