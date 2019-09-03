<?php

system('{ cat www/js/coin.apis.cmc.js; echo "require(\'fs\').writeFileSync(\'.tmp.json\', JSON.stringify(otherCoins));"; } | nodejs');
$coins = json_decode(file_get_contents('.tmp.json'), true);
unlink('.tmp.json');

foreach ($coins as $coin) {
  echo ".";
  $icon = strtolower($coin['symbol']);
  shell_exec('dev/generateicon.sh ' . escapeshellarg($icon));
}
echo "\n";

echo "DONE.";
