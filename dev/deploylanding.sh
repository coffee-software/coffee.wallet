#!/bin/bash
set -e

#deploy website
rsync -avzph landing_page/ coffee:wallet.coffee/

echo "DONE."
