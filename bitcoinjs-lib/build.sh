#!/bin/sh

#npm install bitcoinjs-lib
browserify src.js --standalone btcjs > ../www/vendor/btcjs.js

