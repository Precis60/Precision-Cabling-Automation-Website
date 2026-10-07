#!/bin/bash
set -e
echo "Building the marketing site..."
npm run build
echo "Publishing dist/ to GitHub Pages..."
npm run deploy
echo "Published to https://precis60.github.io/Precision-Cabling-Automation-Website/"
