#!/usr/bin/env bash

set -eEuxo pipefail

# make root folder
d="/root/jeroen.life"
ssh jeroen mkdir -p $d

ngin

ssh jeroen <<EOF
    if ! command -v npm &>/dev/null; then
        apt-get update
        apt-get -y install nodejs npm nginx
        npm install -g yarn
    fi
EOF

# enable firewall & open for ssh
# https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-20-04
# https://www.digitalocean.com/community/questions/how-do-i-configure-my-firewall-to-allow-ssh-traffic-for-new-the-remote-console-recovery-console
ssh jeroen ufw allow 'Nginx Full'
ssh jeroen ufw enable
ssh jeroen ufw status
ssh jeroen ufw allow http
ssh jeroen ufw allow https
ssh jeroen iptables -A INPUT -p tcp -s 0.0.0.0/0 --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
ssh jeroen iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT

# configure nginx & ssl certs
ssh jeroen rm -f /etc/nginx/sites-enabled/default
ssh jeroen rm -f /etc/nginx/sites-available/default
scp remote/jeroen.life.conf "jeroen:/etc/nginx/sites-enabled/jeroen.life"
scp remote/nginx.conf "jeroen:/etc/nginx/nginx.conf"
scp remote/cert.pem "jeroen:/etc/ssl/cert.pem"
scp remote/key.pem "jeroen:/etc/ssl/key.pem"
scp remote/cloudflare.crt "jeroen:/etc/ssl/cloudflare.crt"
