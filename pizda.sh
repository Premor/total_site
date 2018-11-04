#!/bin/bash
# our comment is here
com=''
git add .
echo -n "comment?"
read com
git commit -m $com
git push
