#!/bin/bash
set -e

#deploy website
rsync -avzphL landing_page/ qnap:/home/capps/wallet.coffee/

echo "DONE."
