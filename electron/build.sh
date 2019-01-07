#!/bin/bash 
set -e

cd "$(dirname "$0")"

VERSION=$(jq --raw-output '.version' package.json)


for PLATFORM in "darwin-x64" "linux-x64" "win32-x64"; do

	PREBUILD="electron-v3.0.13-$PLATFORM"
	TARGET="coffee-v$VERSION-$PLATFORM"

	case "$PLATFORM" in
		darwin-x64)
			APPPATH="Electron.app/Contents/Resources/app/"
			;;
		linux-x64)
			APPPATH="resources/app/"
			;;
		win32-x64)
			APPPATH="resources/app/"
			;;
	esac

	echo "$PREBUILD => $TARGET ($APPPATH)"

	rm -rf out/$PREBUILD
	unzip -q out/$PREBUILD.zip -d out/$PREBUILD

	
	mkdir out/$PREBUILD/$APPPATH
	cp -r node_modules out/$PREBUILD/$APPPATH
	cp -r src out/$PREBUILD/$APPPATH
	cp -r icon.png out/$PREBUILD/$APPPATH
	cp -r build out/$PREBUILD/$APPPATH
	cp -rL www out/$PREBUILD/$APPPATH
	cp -r package.json out/$PREBUILD/$APPPATH
	
	case "$PLATFORM" in
		darwin-x64)
			#TODO
			#mv out/$PREBUILD/Electron.app out/$PREBUILD/Coffee.app
			;;
		linux-x64)
			mv out/$PREBUILD/electron out/$PREBUILD/coffeewallet
			;;
		win32-x64)
			mv out/$PREBUILD/electron.exe out/$PREBUILD/coffeewallet.exe
			;;
	esac



	cd out
	rm $TARGET.zip
	zip -q -r -y $TARGET.zip $PREBUILD
	cd ..

done
