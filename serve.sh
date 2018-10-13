#!/bin/bash
set -e

echo "spinning up the server..."
bundle exec jekyll serve --port 4096 --watch --incremental --trace --config _config.yml,_config-local.yml

echo "cleaning up..."
rm -Rf _site

