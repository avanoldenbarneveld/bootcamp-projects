1. Borrar los registro de las tablas creados en el ejercicio de la Clase 2:

```sql
DELETE FROM proveedor;
DELETE FROM cliente;
DELETE FROM producto;
```

2. Modificar las tablas para añadir las Primary Keys:

```sql
ALTER TABLE proveedor ADD COLUMN pk_proveedor SERIAL PRIMARY KEY;

ALTER TABLE cliente ADD COLUMN pk_cliente SERIAL PRIMARY KEY;

ALTER TABLE producto ADD COLUMN pk_producto SERIAL PRIMARY KEY;

```

3. Modificar/crear tabla si es necesario para definir la relación entre producto-proveedor
(1:N), definiendo las Foreign Keys correspondientes:

    3.1. Añadimos una columna ```fk_proveedor``` en ```producto``` para guardar el identificador del proveedor:

    ```sql
    ALTER TABLE producto ADD COLUMN fk_proveedor INTEGER;
    ```
    3.2. Relacionamos fk_proveedor con pk_proveedor:

    ```sql
    ALTER TABLE producto
    ADD CONSTRAINT fk_proveedor FOREIGN KEY (fk_proveedor) REFERENCES proveedor (pk_proveedor);
    ```

4. Modificar/crear tabla para definir la relación entre producto-cliente(N:M), definiendo
las ForeignKey correspondientes:

Dado que no se puede representar directamente con dos tablas, necesitamos crear una tabla intermedia: ```producto_cliente```

```sql
CREATE TABLE producto_cliente (
    pk_producto_cliente SERIAL PRIMARY KEY,
    fk_producto INTEGER NOT NULL,
    fk_cliente INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_producto FOREIGN KEY (fk_producto) REFERENCES producto (pk_producto),
    CONSTRAINT fk_cliente FOREIGN KEY (fk_cliente) REFERENCES cliente (pk_cliente)
);
```

5. Insertar registros y practicar con JOINs:

    5.1: Insertamos productos en la tabla ```proveedor```:

    ```sql
    INSERT INTO proveedor (direccion, nombre) VALUES
    ('Dirección Proveedor 1', 'Proveedor 1'),
    ('Dirección Proveedor 2', 'Proveedor 2');

    ```
    5.2: Insertamos datos de productos en ```producto```:

    ```sql
    INSERT INTO producto (descripcion, precio, fk_proveedor) VALUES
    ('Descripción del Producto 1', 10.99, 1),
    ('Descripción del Producto 2', 15.49, 1),
    ('Descripción del Producto 3', 8.75, 2);
    ```

    5.3: Insertamos datos en la tabla ```cliente```

    ```sql
    INSERT INTO cliente (direccion, nombre, apellidos) VALUES
    ('Dirección Cliente 1', 'Cliente 1', 'Apellido 1'),
    ('Dirección Cliente 2', 'Cliente 2', 'Apellido 2');
    ```
    5.4 insertamos datos de ejemplo en ```producto_cliente``` para simular compras de clientes:

    ```sql
    INSERT INTO producto_cliente (fk_producto, fk_cliente, cantidad) VALUES
    (1, 1, 2),  -- Cliente 1 compra 2 unidades del Producto 1
    (2, 1, 1),  -- Cliente 1 compra 1 unidad del Producto 2
    (3, 2, 5);  -- Cliente 2 compra 5 unidades del Producto 3
    ```
    5.5: Hacemos una consulta con ```JOIN```:

    ```sql
    SELECT 
        pc.fecha, 
        c.nombre AS cliente, 
        p.descripcion AS producto, 
        pc.cantidad
    FROM 
        producto_cliente pc
    JOIN cliente c ON pc.fk_cliente = c.pk_cliente
    JOIN producto p ON pc.fk_producto = p.pk_producto;
    ```