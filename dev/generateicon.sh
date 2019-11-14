#!/bin/bash

code=$1
codeuc=$(echo $code | awk '{print toupper($0)}')
path1="dev/custom_coins/$code.svg"
path="../cryptocurrency-icons/svg/white/$code.svg"

if [ -f $path1 ]; then
	cp $path1 www/coins/$code.svg
	echo "using custom"
elif [ -f $path ]; then
	#sed '0,/\<path/{s/<path/<path fill="#766054"/}' $path > tmp.svg
	#sed -i 's/"#1.1.1."/"#766054"/g' tmp.svg
	#sed -i 's/"#0.0.0."/"#766054"/g' tmp.svg
	#sed -i 's/"#000"/"#766054"/g' tmp.svg
	sed 's/"#fff"/"#766054"/g' $path > tmp.svg
	sed -i 's/"#FFF"/"#766054"/g' tmp.svg
	sed -i 's/"#FFFFFF"/"#766054"/g' tmp.svg
	#convert -density 1200 -resize 256x256 -background none tmp.svg www/coins/$code.png

	mv tmp.svg www/coins/$code.svg
	echo "www/coins/$code.svg"
else
	echo "no icon found. using template"

	cp dev/template.svg tmp.svg
	sed -i 's/"#000000"/"#766054"/g' tmp.svg
	sed -i "s/>CODE</>${codeuc}</g" tmp.svg
	#convert -density 1200 -resize 256x256 -background none tmp.svg www/coins/$code.png
	mv tmp.svg www/coins/$code.svg
	echo "www/coins/$code.svg"
fi
