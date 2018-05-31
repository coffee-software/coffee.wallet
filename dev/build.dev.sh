#!/bin/bash
set -e

#PhoneGap build helper

rm -rf build.zip

xmlstarlet edit --inplace --update '/_:widget/_:name' --value 'Coffee DEV' config.xml
xmlstarlet edit --inplace --update '/_:widget/@version' --value "$(git describe --tags)" config.xml
xmlstarlet edit --inplace --update '/_:widget/@id' --value "io.cadosolutions.coffeewallet.dev" config.xml

zip -qr build.zip hooks node_modules plugins res www LICENSE.txt package.json config.xml ACKNOWLEDGEMENTS.md

#TODO:
#curl -u XX -X PUT -d 'data={"pull":"true"}' https://build.phonegap.com/api/v1/apps/3139044

echo "DONE."
