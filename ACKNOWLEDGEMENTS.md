Acknowledgements
----------------

Coffee Wallet uses Open Source code from the following libraries

 * [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) for signing BTC, LTC and DOGE transactions; MIT License
 * [web3.js](https://github.com/ethereum/web3.js/) for signing and sending ETH and ETH-tokens transactions; LGPL License
 * [qrcode.js](https://davidshimjs.github.io/qrcodejs/) to generate QR codes; MIT License
 * [rangeSlider](https://github.com/Stryzhevskyi/rangeSlider/) ui element; MIT License
 * [New Age](http://startbootstrap.com/template-overviews/new-age/) as landing page template base; MIT License
 * [Cryptocurrency Icons](https://github.com/cjdowner/cryptocurrency-icons); Creative Commons Zero (CC0) license

User interface is built using [cordova platform](https://cordova.apache.org/). Following plugins are used:

 * [phonegap-plugin-barcodescanner](https://www.npmjs.com/package/phonegap-plugin-barcodescanner) to scan payment requests/addresses
 * [cordova-plugin-dialogs](https://www.npmjs.com/package/cordova-plugin-dialogs) for user dialogs
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

To broadcast signed transaction and save it in blockchain, Coffee uses third party providers:

 * [BlockCypher](https://www.blockcypher.com/) for bitcoin, litecoins and dogecoin transactions.
 * [Infura](https://infura.io/) for accessing Ethereum network (ETH and ERC20 tokens)
