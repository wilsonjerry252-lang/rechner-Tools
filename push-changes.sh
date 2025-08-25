#!/bin/bash
echo "Pushing changes to GitHub..."
git add .
git commit -m "Remove problematic URLs: Update robots.txt and clean config"
git push --force-with-lease origin main
echo "Changes pushed successfully!"
