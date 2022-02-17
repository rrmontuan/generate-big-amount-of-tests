#!/bin/bash

set -e

TEMPLATE="${1:-envvar}"
NUM_FILES=${2:-10}

for ((counter=1; counter<=NUM_FILES; counter++)); do 
  TEST_FILE="./src/tests/test_$counter.test.js"
  FIRST=$((counter*1))
  SECOND=$((counter*2))
  THIRD=$((counter*3))
  FOURTH=$((counter*4))
  FIFTH=$((counter*5))

  cp "./src/tests/templates/$TEMPLATE.template.js" "$TEST_FILE"
  sed -i "s/{FIRST}/${FIRST}/g" "$TEST_FILE"
  sed -i "s/{SECOND}/${SECOND}/g" "$TEST_FILE"
  sed -i "s/{THIRD}/${THIRD}/g" "$TEST_FILE"
  sed -i "s/{FOURTH}/${FOURTH}/g" "$TEST_FILE"
  sed -i "s/{FIFTH}/${FIFTH}/g" "$TEST_FILE"
done