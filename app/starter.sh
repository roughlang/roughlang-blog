#!/bin/bash

echo "start docker";
docker-compose down;
./vendor/bin/sail build --no-cache;
./vendor/bin/sail up -d;
docker-compose down && docker-compose up -d;
docker-compose ps;
echo "htttp://localhost:8000";
echo "htttp://localhost:8000/pma/index.php";
echo "htttp://localhost:8000/ac/wp-admin/";
