#!/bin/bash

# Generates './static/version.json'

VERSION=$(node -p -e "require('./package.json').version")
COMMIT=$(git rev-parse HEAD)
DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

cat <<EOF > ./static/version.json
{
  "version": "$VERSION",
  "commit": "$COMMIT",
  "date": "$DATE"
}
EOF
