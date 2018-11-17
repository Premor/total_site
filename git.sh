#!/bin/bash
git add .
echo -n "Add commit comment:"
read comment
git commit -m "$comment"
git push