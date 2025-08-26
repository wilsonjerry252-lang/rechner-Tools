#!/bin/bash
echo "Pushing changes to GitHub..."
git add .
git commit -m "Fix internal links to problematic URLs"
git push --force-with-lease origin main
echo "Changes pushed successfully!"
