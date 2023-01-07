#!/usr/bin/env bash

set -eEuxo pipefail

# make root folder
d="/root/jeroen.life"

## copy folders with code
scp -r pages "jeroen:$d"
scp -r src "jeroen:$d"
scp -r public "jeroen:$d"
scp -r styles "jeroen:$d"
for FILE in *; do
  if [[ -f "$FILE" ]]; then
    scp $FILE "jeroen:$d/$FILE"
  fi
done

## install python requirements
ssh jeroen <<EOF
  cd $d
  yarn install
  yarn build
EOF

## start next server
scp -r remote "jeroen:$d"
scp remote/nextjs.service jeroen:/etc/systemd/system
ssh jeroen 'chmod 664 /etc/systemd/system/nextjs.service'
ssh jeroen nginx -t
ssh jeroen "chmod +x $d/remote/start.sh"
ssh jeroen 'systemctl daemon-reload'
ssh jeroen 'systemctl restart nextjs'
ssh jeroen 'systemctl status nextjs'
