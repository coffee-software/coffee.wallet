#!/bin/bash
set -e

#deploy website
rsync -avzphL tokens_page/ coffee:tokens.coffee/

echo "DONE."
