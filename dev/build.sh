#!/bin/bash
set -e

#build zip
rm -rf build.zip
zip -qr build.zip hooks node_modules plugins res www LICENSE.txt package.json config.xml ACKNOWLEDGEMENTS.md

echo "DONE."
