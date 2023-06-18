#!/usr/bin/env bash
echo '/* eslint-disable @typescript-eslint/naming-convention */'
echo '// This file is generated. Do not modify.'
echo 'export namespace Result {'
for i in error info style warning; do
    upper_first="${i:0:1}"
    upper_first="${upper_first^^}"
    echo "  export type ${upper_first}${i:1} ="
    IFS=$'\n' mapfile -t arr < <(grep -hEr 'class.*results\..*:$' \
        "$(python -c 'import pkgcheck, os.path, inspect; print(os.path.dirname(inspect.getfile(pkgcheck)))')" |
        grep -F ".${upper_first}${i:1}" |
        awk '{print $2 }' |
        grep -Ev '^_' |
        cut '-d(' -f1 |
        sort -u |
        sed -re "s/(.*)/    | { _${i}: { \1: string } }/")
    arr[-1]="${arr[-1]};"
    for item in "${arr[@]}"; do
        echo "$item"
    done
done
echo '}'
