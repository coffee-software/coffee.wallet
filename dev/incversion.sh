#!/bin/bash
set -e

git diff-files --quiet || { echo "git state not clean. please commit or stash"; exit 1; }

#get current version
#currentVersion=$(git describe --tags)
currentVersion=$(cat www/version.json | jq -r '.version')

if [ -z "$1" ]; then
    #increment version
    nextVersion=$(echo $currentVersion | perl -pe 's/^((\d+\.)*)(\d+)(.*)$/$1.($3+1)/e')
else
    nextVersion="${1}"
    echo "warning: please remember to add changelog for major version update"
fi

echo "will update $currentVersion => $nextVersion"
read -p "is that OK? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

#update version in commit
sed -i -e 's/class=\"VERSION\">.*<\/span>/class=\"VERSION\">'$nextVersion'<\/span>/g' landing_page/index.html
sed -i -e 's/ version=".*" xmlns="http/ version="'$nextVersion'" xmlns="http/g' config.xml
sed -i -e 's/window\.version = ".*"/window\.version = "'$nextVersion'"/g' www/js/changelog.js
sed -i -e 's/"version": ".*"/"version": "'$nextVersion'"/g' www/version.json
git add www/index.html landing_page/index.html config.xml www/js/changelog.js www/version.json
git commit -m 'update version'

git tag $nextVersion

echo "DONE. dont forget to run git push --tags"
