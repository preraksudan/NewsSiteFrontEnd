#!/bin/bash

# URL to fetch // can be handled in code itself using js fetch
URL="https://newsapi.org/v2/everything?q=bitcoin&apiKey=APIKEY"

# File to save data
OUTPUT_FILE="./response.json"

# Use curl to fetch and pipe through jq for pretty-print
curl -s "$URL" | jq . > "$OUTPUT_FILE"

echo "Data saved and prettified in $OUTPUT_FILE"

# Why save in random output file (to avoid requests to api endpoint , will implement cashing later)