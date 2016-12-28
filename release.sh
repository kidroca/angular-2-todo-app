#!/usr/bin/env bash

RELEASE_AS=${1:-patch}

./node_modules/.bin/standard-version --release-as ${RELEASE_AS}
