/* Crea un timer que cada dos segundos vaya mostrando por pantalla una
lista de animales. */

const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra'];

setInterval(() => {
  console.log(animals);
}, 2000); // Runs every 2 seconds
