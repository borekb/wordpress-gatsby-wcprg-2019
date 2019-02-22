#!/usr/bin/env bash

VP_FILE="https://github.com/versionpress/versionpress/releases/download/4.0-beta/versionpress-4.0-beta-177-gf208351.zip"

if [[ ! -d versionpress ]]; then
  mkdir -p versionpress
  curl -L "$VP_FILE" > versionpress.zip
  unzip versionpress.zip
fi

docker-compose up
