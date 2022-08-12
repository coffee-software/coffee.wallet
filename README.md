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

## building

Coffee Wallet is built with [Apache Cordova](https://cordova.apache.org/).

### required packages

To build Coffee Wallet you will need `nodejs` with packages installed:
```
typescript browserify cordova uglify-js
```

### building to browser

First you need to copy config from template:

```bash
cp config.tpl.js www/config.js
```
Config file contains keys for integration with various API providers.
Application will run with empty values, some parts integrated with external services will not work.
To build and run on browser platform:

```bash
npm run build
./browserify.sh full
cordova platform add browser
cordova run
```

## running tests

to run unit and integration tests:

```bash
npm run build
npm run test
cp config.tpl.js test/config.js
npm run test-integration
```

### building android apk

If you have Android SDK installed you can run cordova build locally:
```bash
cordova platform add android
cordova build android --release --
```

You can also use provided Docker container to build APK in a container:

```bash
DOCKER_BUILDKIT=1 docker build -f build/Dockerfile -o . .
```

### building for other platforms

To build for specific platform, please refer to Cordova docs.
