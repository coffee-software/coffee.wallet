#!/bin/bash
set -e

function generate_service_worker {
  cd platforms/browser/www/
  echo "const CACHE_KEY = 'VER_$version';";
  echo "const CACHE_URLS = [";
  find . -type f ! -name 'index.html' -print | awk '{ print "\""$0"\","}'
  echo "\"./\"";
  echo "];";
  cd ../../../
  sed -n '/^\/\*\ END/,$p' www/sw.js
}

version=$(git describe --tags)

echo "BUILDING PWA VERSION $version"

cordova build browser --prod
generate_service_worker > platforms/browser/www/sw.js

echo "BUILT INTO platforms/browser/www/"

