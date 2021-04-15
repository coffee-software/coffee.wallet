#!/bin/sh

#browserify browserify.js --standalone browserify > www/vendor/browserify.js
browserify test/widgets/widgets.js --standalone widgets > test/widgets/browser.js

browserify src/Engine.js --standalone engine \
 --exclude=node_modules/bip39/src/wordlists/korean.json \
 --exclude=node_modules/bip39/src/wordlists/japanese.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_simplified.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_traditional.json \
 --exclude=node_modules/bip39/src/wordlists/czech.json \
 --exclude=node_modules/bip39/src/wordlists/french.json \
 --exclude=node_modules/bip39/src/wordlists/italian.json \
 --exclude=node_modules/bip39/src/wordlists/spanish.json \
  > www/js/engine.js
