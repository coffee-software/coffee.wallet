#!/bin/bash
set -e

git diff-files --quiet || echo "git state not clean. please commit or stash" && exit 1

#get current version
currentVersion=$(git describe --tags)

#increment version
nextVersion=$(echo $currentVersion | perl -pe 's/^((\d+\.)*)(\d+)(.*)$/$1.($3+1)/e')
echo "update $currentVersion => $nextVersion"

#replace versions
sed -i -e 's/class=\"VERSION\">.*<\/span>/class=\"VERSION\">'$nextVersion'<\/span>/g' www/index.html
sed -i -e 's/class=\"VERSION\">.*<\/span>/class=\"VERSION\">'$nextVersion'<\/span>/g' landing_page/index.html

#git commit
git commit -m 'update version'
git tag $nextVersion

git push --tags

#build zip
rm -rf build.zip
zip -qr build.zip hooks node_modules platforms plugins res www LICENSE.txt package.json config.xml ACKNOWLEDGEMENTS.md

#deploy website
#rsync -avzph landing_page/ coffee:wallet.coffee/
