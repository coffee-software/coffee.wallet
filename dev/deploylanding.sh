#!/bin/bash
set -e

#make sure app code is up to date
cp www/vendor/web3.min.js landing_page/appwww/vendor/web3.min.js
cp www/vendor/btcjs.js landing_page/appwww/vendor/btcjs.js
cp www/js/core.js landing_page/appwww/js/core.js
cp www/js/coin.apis.btcjs.js landing_page/appwww/js/coin.apis.btcjs.js
cp www/js/coin.apis.web3js.js landing_page/appwww/js/coin.apis.web3js.js

#deploy website
rsync -avzph landing_page/ coffee:wallet.coffee/

echo "DONE."
