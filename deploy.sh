#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "rennierab@gmail.com"

git checkout master
git add dist/anything.js
git add dist/anything.min.js
git commit -m "Update dist [ci skip]"

git push "https://${GITHUB_SECRET_TOKEN}@${GH_REF}" master > /dev/null 2>&1
