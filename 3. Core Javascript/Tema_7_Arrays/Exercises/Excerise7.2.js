// Cuando defines un array de tamaño 4, ¿puedes asignar un valor al índice 26?

const arr = [1, 2, 3, 4];
arr[26] = 100;

console.log(arr); 
// Resultado: [1, 2, 3, 4, <22 empty items>, 100]


/* Sí, se puede asignar un valor a un índice que no existe.
El array cambiará de tamaño hasta llegar a ese valor.
El resto de los valores del índice serán undefined. */