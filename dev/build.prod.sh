#!/bin/bash
set -e

git diff-files --quiet || { echo "git state not clean. please commit or stash"; exit 1; }

#PhoneGap build helper

rm -rf build.prod.zip

zip -qr build.prod.zip hooks node_modules plugins res www LICENSE.txt package.json config.xml ACKNOWLEDGEMENTS.md

#TODO:
#curl -u XX -X PUT -d 'data={"pull":"true"}' https://build.phonegap.com/api/v1/apps/3139044

echo "DONE."
