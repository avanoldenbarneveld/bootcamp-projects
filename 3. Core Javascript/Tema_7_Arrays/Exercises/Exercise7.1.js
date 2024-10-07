/*  Cuando defines un array copiándolo con el método spread en otro array,
¿modificar el segundo modifica el primero? ¿modificar el primero
modifica el segundo? */


const array1 = [1, 2, 3];
const array2 = [...array1];

array2.push(4);

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3, 4]


/* No. Se copian los valores nominales del primer array, pero una vez copiado, los dos son independientes.
En el caso de los objetos sí se modifica, y esto debe a que son referencias y no valores.
Cuando utilizas ...spread con un objeto, copias las referencias, no los valores, por lo que si modificas uno se modifica el otro. */

const arr1 = [{a: 1}, {b: 2}];
const arr2 = [...arr1]; // Copia superficial

arr2[0].a = 100; // Cambiamos una propiedad en el objeto del segundo array

console.log(arr1); // [{a: 100}, {b: 2}]
console.log(arr2); // [{a: 100}, {b: 2}]
