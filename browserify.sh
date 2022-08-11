#!/bin/bash

if [ "$1" == "full" ]; then
	echo "full minify mode"
else
	echo "quick mode"
fi

browserify test/browser/browser.js --standalone browser > test/browser/index.js

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

if [ "$1" == "full" ]; then
	uglifyjs --compress --mangle --output www/app.min.js -- www/app.js
	rm www/app.js
else
	mv www/app.js www/app.min.js
fi
