#!/bin/bash

# Obtener el token JWT
TOKEN=$(curl -s -X POST http://localhost:3000/api/token -H "Content-Type: application/json" -d '{"username":"admin@example.com","password":"admin123"}' | jq -r '.token')

if [ -z "$TOKEN" ]; then
  echo "Error: No se pudo obtener el token."
  exit 1
fi

echo "Token obtenido: $TOKEN"

# Solicitar la lista de usuarios
curl -X GET http://localhost:3000/api/users -H "Authorization: Bearer $TOKEN"

# Crear un nuevo usuario
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"email":"testuser@example.com","password":"password123","type":"user","active":true}'

# Actualizar un usuario existente
curl -X PUT http://localhost:3000/api/users/1 -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"email":"updateduser@example.com","type":"admin"}'

# Intentar eliminar un usuario asociado a un profesor
curl -X DELETE http://localhost:3000/api/users/2 -H "Authorization: Bearer $TOKEN"

# Listar los estudiantes de un profesor
curl -X GET http://localhost:3000/api/teachers/1/students -H "Authorization: Bearer $TOKEN"

# Activar un usuario
curl -X POST http://localhost:3000/api/users/2/active -H "Authorization: Bearer $TOKEN"

# Verificar el estado activo de un usuario
curl -X GET http://localhost:3000/api/users/2/active -H "Authorization: Bearer $TOKEN"

