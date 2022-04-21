# coffee.wallet

Coffee is an open source blockchain portfolio and a wallet.

Whether you use a hardware, paper or a third-party wallet, you can keep track of your funds. Just add addresses or fixed amounts and You will see live value of all your tokens in your selected fiat currency.

Selected tokens can be stored in a local wallet and they can be easily sent or received. Signed transactions are sent to third party providers. Private keys never leave your device. This makes the wallet secured and light.

https://wallet.coffee

# desktop version

You can also run [Coffee Wallet on Desktop](https://github.com/fsw/coffee.wallet/wiki/Coffee-Wallet-on-Desktop).

# issues

Please use [github issue tracker](https://github.com/fsw/coffee.wallet/issues) to report any issues or feature requests.

# development

## running tests

to run unit and integration tests:

```bash
npm run build
npm run test
npm run test-integration
```

## building

Coffee Wallet is built with [Apache Cordova](https://cordova.apache.org/).
To build and run:

```bash
npm run build
./browserify.sh
cordova platform add browser
cordova run
```

To build for specific platform, please refer to Cordova docs.
