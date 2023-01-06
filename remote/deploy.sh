#!/usr/bin/env bash

set -eEuxo pipefail

# make root folder
d="/root/jeroen.life"
ssh bday mkdir -p "$d"

## copy folders with code
scp -r pages "bday:$d"
scp -r src "bday:$d"
scp -r public "bday:$d"
scp -r styles "bday:$d"
for FILE in *; do
  if [[ -f "$FILE" ]]; then
    scp $FILE "bday:$d/$FILE"
  fi
done

## install python requirements
ssh bday <<EOF
  cd $d
  yarn install
  yarn build
EOF

## start next server
scp -r remote "bday:$d"
scp remote/nextjs.service bday:/etc/systemd/system
ssh bday 'chmod 664 /etc/systemd/system/nextjs.service'
ssh bday "chmod +x $d/remote/start.sh"
ssh bday 'systemctl daemon-reload'
ssh bday 'systemctl restart nextjs'
ssh bday 'systemctl status nextjs'

## nginx
scp remote/nextjs.conf.d bday:/etc/nginx/conf.d/jeroenlife.conf
ssh bday 'systemctl restart nginx'
