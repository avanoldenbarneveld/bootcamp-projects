#!/bin/bash

echo "Deteniendo y limpiando contenedores existentes..."
docker compose -f docker-compose.services.yml down -v

echo "Levantando contenedor de PostgreSQL..."
docker compose -f docker-compose.services.yml up -d

echo "Instalando dependencias..."
npm install

echo "Ejecutando migraciones..."
npx sequelize-cli db:migrate

echo "Ejecutando seeders..."
npx sequelize-cli db:seed:all

echo "Iniciando el servidor..."
npm start &

echo "Proyecto listo. La API está disponible en http://localhost:3000"
