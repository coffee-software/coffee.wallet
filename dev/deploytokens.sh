#!/bin/bash
set -e

#deploy website
rsync -avzphL tokens_page/ qnap:/home/capps/tokens.coffee/

echo "DONE."
