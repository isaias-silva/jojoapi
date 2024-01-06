#!/bin/bash

# Copia o arquivo SQL para o contêiner MySQL
docker cp ./sql/inserts.sql jojoapi_jojo-mysql_1:./inserts.sql

# Executa os inserts dentro do contêiner MySQL
docker exec -it jojoapi_jojo-mysql_1 mysql -u root -p  --execute 'source ./inserts.sql';

