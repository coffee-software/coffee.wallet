#!/bin/sh

browserify test/browser/browser.js --standalone browser > test/browser/index.js
#browserify test/browser/browser.js > test/browser/index.js
browserify src/App.js --standalone coffee \
 --exclude=node_modules/bip39/src/wordlists/korean.json \
 --exclude=node_modules/bip39/src/wordlists/japanese.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_simplified.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_traditional.json \
 --exclude=node_modules/bip39/src/wordlists/czech.json \
 --exclude=node_modules/bip39/src/wordlists/french.json \
 --exclude=node_modules/bip39/src/wordlists/italian.json \
 --exclude=node_modules/bip39/src/wordlists/spanish.json \
  > www/app.js

browserify src/Engine.js --standalone coffee \
 --exclude=node_modules/bip39/src/wordlists/korean.json \
 --exclude=node_modules/bip39/src/wordlists/japanese.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_simplified.json \
 --exclude=node_modules/bip39/src/wordlists/chinese_traditional.json \
 --exclude=node_modules/bip39/src/wordlists/czech.json \
 --exclude=node_modules/bip39/src/wordlists/french.json \
 --exclude=node_modules/bip39/src/wordlists/italian.json \
 --exclude=node_modules/bip39/src/wordlists/spanish.json \
  > ../coffee.wallet.priv/website/engine.js