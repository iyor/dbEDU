#!/usr/bin/env bash

rm -rf dist
mkdir -p dist

# Transpile code in src folder to dist folder
node node_modules/babel-cli/bin/babel.js src/ --out-dir dist/
