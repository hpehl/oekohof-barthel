#!/bin/bash

# Generates './static/version.json'

VERSION=$(node -p -e "require('./package.json').version")
COMMIT=$(git rev-parse HEAD)
DATE=$(date +"%Y-%m-%dT%H:%M:%S%:%z")

cat <<EOF > ./static/version.json
{
  "version": "$VERSION",
  "commit": "$COMMIT",
  "date": "$DATE"
}
EOF
