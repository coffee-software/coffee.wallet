#!/bin/bash

nodejs dev/doc-supportedcsv.js > landing_page/supported-coins.csv




nodejs dev/doc-supported.js > .tmp.html
sed -e '/\[BODY\]/ {' -e 'r .tmp.html' -e 'd' -e '}' -e "s/\[TITLE\]/Supported Cryptocurrencies/" dev/template.html > landing_page/supported-coins.html

nodejs dev/doc-changelog.js > .tmp.html
sed -e '/\[BODY\]/ {' -e 'r .tmp.html' -e 'd' -e '}' -e "s/\[TITLE\]/Changelog/" dev/template.html > landing_page/changelog.html
