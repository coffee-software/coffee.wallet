<?php

$json = json_decode(file_get_contents('https://api.coinmarketcap.com/v1/ticker/?limit=100'), true);

$list = array();

foreach($json as $coin) {
$list[]= <<<EOT
{
    name: "{$coin['id']}",
    code: "{$coin['symbol']}",
    longname: "{$coin['name']}",
    description: "{$coin['name']} coin",
    links: {
      "CoinMarketCap" : "https://coinmarketcap.com/currencies/{$coin['id']}/"
    }
}
EOT;

//shell_exec('wget https://files.coinmarketcap.com/static/img/coins/128x128/' . $coin['id'] . '.png');

}


echo implode(',', $list);

