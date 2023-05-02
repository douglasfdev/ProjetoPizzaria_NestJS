#!/bin/bash

echo "Qual é o nome da migration?"

read migrationName

migrationFolder="$PWD/src/migrations/$migrationName"

npx typeorm migration:create $migrationFolder
