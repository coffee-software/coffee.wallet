Acknowledgements
----------------

Coffee Wallet uses Open Source code from the following libraries

 * [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) for signing BTC, LTC and DOGE transactions; MIT License
 * [ethers.js](https://github.com/ethers-io/ethers.js/) for signing and sending ETH and ETH-tokens transactions; MIT License
 * [web3.js](https://github.com/ethereum/web3.js/) for signing and sending ETH and ETH-tokens transactions; LGPL License
 * [qrcode.js](https://davidshimjs.github.io/qrcodejs/) to generate QR codes; MIT License
 * [jazzicon](https://github.com/MetaMask/jazzicon/) to generate Jazzy Identicons; ISC License
 * [rangeSlider](https://github.com/Stryzhevskyi/rangeSlider/) ui element; MIT License
 * [New Age](http://startbootstrap.com/template-overviews/new-age/) as landing page template base; MIT License
 * [Cryptocurrency Icons](https://github.com/cjdowner/cryptocurrency-icons); Creative Commons Zero (CC0) license
 * [jsPDF](https://parall.ax/products/jspdf) to generate PDF in PWA and electron versions; MIT License 
   
User interface is built using [cordova platform](https://cordova.apache.org/). Following plugins are used:

 * [phonegap-plugin-barcodescanner](https://www.npmjs.com/package/phonegap-plugin-barcodescanner) to scan payment requests/addresses
 * [cordova-plugin-inappbrowser](https://www.npmjs.com/package/cordova-plugin-inappbrowser) to open external links
 * [cordova-plugin-nativestorage](https://www.npmjs.com/package/cordova-plugin-nativestorage) to store data
 * [cordova-plugin-statusbar](https://www.npmjs.com/package/cordova-plugin-statusbar) to customize status bar
 * [cordova-plugin-splashscreen](https://www.npmjs.com/package/cordova-plugin-splashscreen)
 * [cordova-clipboard](https://www.npmjs.com/package/cordova-clipboard) for 'copy to clipboard' feature
 * [cordova-plugin-customurlscheme](https://www.npmjs.com/package/cordova-plugin-customurlscheme) to open 'send via message' links
 * [cordova-plugin-x-socialsharing](https://www.npmjs.com/package/cordova-plugin-x-socialsharing) for 'send via message' feature
 * [cordova-plugin-device](https://www.npmjs.com/package/cordova-plugin-device) for conditional, per platform behaviour
 * [cordova-plugin-pdf-generator](https://www.npmjs.com/package/cordova-plugin-pdf-generator) to generate printable paper wallets
 * [cordova-plugin-touch-id](https://www.npmjs.com/package/cordova-plugin-touch-id) to authenticate user before important operations
 * [cordova-plugin-android-fingerprint-auth](https://www.npmjs.com/package/cordova-plugin-android-fingerprint-auth) to authenticate user before important operations

To broadcast signed transaction and save it in blockchains, Coffee uses APIs of third party providers:

 * [BlockCypher](https://www.blockcypher.com/) for bitcoin, litecoins and dogecoin transactions.
 * [Infura](https://infura.io/) for accessing Ethereum network (ETH and ERC20 tokens)
 * [Binance](https://binance.org/) for accessing Binance Smart Chain (BNB and BEP20 tokens)
 * [bitcoin.com](https://bitcoin.com/) for accessing BCH network.

To provide other functionalities Coffee Wallet uses APIs of:

* [CoinMarketCap](https://coinmarketcap.com/) for fetching price data.
* [CoinGecko](https://www.coingecko.com/) for fetching price data.
* [coinpaprika](https://coinpaprika.com/) for fetching price data.
* [Changelly](https://changelly.com/) to provide Quick Exchange functionality.
* [ChangeNow](https://changenow.io/) to provide Quick Exchange functionality.
