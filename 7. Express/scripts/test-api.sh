#!/bin/bash

# Obtener el token JWT
TOKEN=$(curl -s -X POST http://localhost:3000/api/token -H "Content-Type: application/json" -d '{"username":"admin@example.com","password":"admin123"}' | jq -r '.token')

if [ -z "$TOKEN" ]; then
  echo "Error: No se pudo obtener el token."
  exit 1
fi

echo "Token obtenido: $TOKEN"

# Ejecutar solicitudes con el token
echo "Solicitando la lista de usuarios..."
curl -s -X GET http://localhost:3000/api/users -H "Authorization: Bearer $TOKEN" | jq

echo -e "\n\nCreando un nuevo usuario..."
curl -s -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"email":"testuser@example.com","password":"password123","type":"user","active":true}' | jq

echo -e "\n\nActualizando un usuario existente..."
curl -s -X PUT http://localhost:3000/api/users/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"email":"updateduser@example.com","type":"admin"}' | jq

echo -e "\n\nIntentando eliminar un usuario asociado a un profesor..."
response=$(curl -s -X DELETE http://localhost:3000/api/users/2 -H "Authorization: Bearer $TOKEN")
if echo "$response" | jq . > /dev/null 2>&1; then
  echo "$response" | jq
else
  echo "Respuesta no JSON recibida: $response"
fi

echo -e "\n\nListando los estudiantes de un profesor..."
curl -s -X GET http://localhost:3000/api/teachers/1/students -H "Authorization: Bearer $TOKEN" | jq

echo -e "\n\nActivando un usuario..."
curl -s -X POST http://localhost:3000/api/users/2/active -H "Authorization: Bearer $TOKEN" | jq

echo -e "\n\nVerificando el estado activo de un usuario..."
curl -s -X GET http://localhost:3000/api/users/2/active -H "Authorization: Bearer $TOKEN" | jq
