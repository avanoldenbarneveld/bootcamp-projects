# Ejercicio 2 - Bases de Datos
Alberto van Oldenbarneveld

## 1. Creación de Tablas

### Tabla Proveedores:
```sql
CREATE TABLE proveedores (
    nif TEXT,
    nombre TEXT,
    direccion TEXT
);
```

### Tabla Productos:
```sql
CREATE TABLE productos (
    codigo INT,
    descripcion TEXT,
    nombre TEXT,
    precio NUMERIC
);

```

### Tabla clientes:
```sql
CREATE TABLE clientes (
    dni TEXT,
    nombre TEXT,
    apellidos TEXT,
    direccion TEXT
);
```

## 2. Inserción de datos

### Datos para la tabla Proveedores:
```sql
INSERT INTO proveedores (nif, nombre, direccion) VALUES
('A12345678', 'Nike España', 'Polígono Industrial Can Estella, Barcelona'),
('B98765432', 'Adidas Iberia', 'Avenida Olímpica 1, Zaragoza'),
('C54321678', 'Decathlon Logística', 'Carretera Nacional A2, Km 597, Madrid');
```
### Datos para la tabla Productos:
```sql
INSERT INTO productos (codigo, descripcion, nombre, precio_unitario) VALUES
(1, 'Zapatillas deportivas de running', 'Nike Pegasus', 120.00),
(2, 'Balón de fútbol oficial', 'Adidas Al Rihla', 150.00),
(3, 'Camiseta deportiva técnica', 'Decathlon Kalenji', 25.00);

```

### Datos para la tabla Clientes:
```sql
INSERT INTO clientes (dni, nombre, apellidos, direccion) VALUES
('12345678A', 'Lucía', 'Martínez', 'Calle Mayor 14, Pamplona'),
('87654321B', 'Carlos', 'Iriarte', 'Avenida de Bayona 35, Pamplona'),
('11223344C', 'Ana', 'Esparza', 'Rochapea 8, Pamplona');

```

## 3. Consultas SQL

### 1. Obtener la lista de proveedores:
```sql
SELECT * FROM proveedores;
```
### 2. Consultar si existe algún clinete que se llame "Mario":
```sql
SELECT * FROM clientes WHERE nombre = 'Mario';
```
### 3. Obtener el listado de productos de la tienda ordenados por precio:
```sql
SELECT * FROM productos ORDER BY precio;
```
