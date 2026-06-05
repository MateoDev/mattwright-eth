#!/bin/bash
JWT="$1"
TEMP_FILE=$(mktemp)

find . -type f | sort | while read f; do
  echo "-F file=@${f#./};filename=dist/${f#./}"
done | xargs curl -s --request POST \
  --url https://uploads.pinata.cloud/v3/files \
  --header "Authorization: Bearer $JWT" \
  -F "network=public" \
  -F "name=mattwright-eth-$(date +%Y%m%d-%H%M)" > "$TEMP_FILE"

cat "$TEMP_FILE"
python3 -c "
import json, sys
try:
    with open('$TEMP_FILE') as f:
        data = json.load(f)
    print('CID:', data['data']['cid'])
except Exception as e:
    print('Error:', e)
"
rm -f "$TEMP_FILE"
