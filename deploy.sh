#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "rennierab@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add dist/anything.js
git add dist/anything.min.js
git commit -m "Update dist"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push "https://${GITHUB_SECRET_TOKEN}@${GH_REF}" master > /dev/null 2>&1
