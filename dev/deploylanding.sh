#!/bin/bash
set -e

#deploy website
rsync -avzphL landing_page/ coffee:wallet.coffee/

echo "DONE."
