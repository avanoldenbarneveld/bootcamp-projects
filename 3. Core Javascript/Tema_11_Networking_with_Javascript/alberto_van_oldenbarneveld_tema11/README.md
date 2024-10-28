
# Proyecto: fetchAllArticles y fetchArticleById

Este proyecto contiene dos funciones principales para obtener artículos de una API:
1. **`fetchAllArticles`**: Obtiene y muestra todos los artículos, incluyendo el total y una tabla con títulos y contenidos.
2. **`fetchArticleById`**: Obtiene un artículo específico por su ID y muestra el estado, título y contenido.

## Instalación

1. Descomprime la carpeta del proyecto.
2. Ejecuta este comando para instalar las dependencias necesarias:
   ```bash
   npm install
   ```

## Ejecución de Pruebas

Para ejecutar las pruebas y obtener el reporte de cobertura, utiliza el siguiente comando:
```bash
jest . -- --coverage
```

## Cobertura de Pruebas

Las pruebas alcanzan una cobertura del 100% en todas las categorías:
- Declaraciones (Statements): 100%
- Ramas (Branches): 100%
- Funciones (Functions): 100%
- Líneas (Lines): 100%

### Captura de Pantalla del Reporte de Cobertura
![Reporte de Cobertura de Pruebas](./screenshot.png)

## Librerías Utilizadas

Los tests se ejecutan correctamente en una carpeta independiente, siempre que Jest esté instalado de manera global o en una carpeta superior. No obstante, he incluido Jest como una devDependency en el archivo package.json para asegurar que funcione correctamente sin necesidad de configuraciones adicionales.
