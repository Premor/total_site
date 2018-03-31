#!/bin/sh
cd {path_to_gitdir}
git checkout {branch}
git pull
cp -rf {path_to_gitdir}/* {path_to_workdir}
help.sh