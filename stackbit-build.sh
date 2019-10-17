#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5da8ee1ec9b47c0019bbb628/webhook/build/pull > /dev/null
if [[ -z "${STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5da8ee1ec9b47c0019bbb628 
fi
curl -s -X POST https://api.stackbit.com/project/5da8ee1ec9b47c0019bbb628/webhook/build/ssgbuild > /dev/null
gatsby build
./inject-netlify-identity-widget.js public
curl -s -X POST https://api.stackbit.com/project/5da8ee1ec9b47c0019bbb628/webhook/build/publish > /dev/null
