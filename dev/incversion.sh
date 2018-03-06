#!/bin/bash
set -e

git diff-files --quiet || { echo "git state not clean. please commit or stash"; exit 1; }

#get current version
currentVersion=$(git describe --tags)

if [ -z "$1" ]; then
    #increment version
    nextVersion=$(echo $currentVersion | perl -pe 's/^((\d+\.)*)(\d+)(.*)$/$1.($3+1)/e')
else
    nextVersion="${1}"
fi

echo "will update $currentVersion => $nextVersion"
read -p "is that OK? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

#update version in commit
sed -i -e 's/class=\"VERSION\">.*<\/span>/class=\"VERSION\">'$nextVersion'<\/span>/g' www/index.html
sed -i -e 's/class=\"VERSION\">.*<\/span>/class=\"VERSION\">'$nextVersion'<\/span>/g' landing_page/index.html
sed -i -e 's/ version=".*" xmlns="http/ version="'$nextVersion'" xmlns="http/g' config.xml
git add www/index.html landing_page/index.html config.xml
git commit -m 'update version'

git tag $nextVersion

echo "DONE. dont forget to run git push --tags"
