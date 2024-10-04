// Juguetea con las diferentes asignaciones para probar un poco los diferentes tipos.

// Object
onst car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2021,
    startEngine: function() {
        console.log('Engine started');
    }
};

console.log(car.brand); // Accessing object property
car.startEngine(); // Calling an object method

// Array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruits[0]); // Access the first element (Apple)

fruits.push('Pineapple'); // Add an element
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']

// Functions
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Alberto')); // Output: Hello, Alberto!

// Conditional Access (Optional Chaining)
const person = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

// Safely access the 'city' property, even if 'address' or 'city' is undefined
console.log(person.address?.city); // Output: New York
console.log(person.contact?.phone); // Output: undefined (no error)

// Ternary Operator
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

// Operators Summary
const result = 10 % 3; // Modulo operator gives remainder: 1
console.log(result);

// Comparison Operators
const num1 = 10;
const num2 = 20;

console.log(num1 == num2); // False
console.log(num1 != num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True

// Logical Operators
const isRaining = true;
const isSunny = false;

const weather = isRaining && isSunny; // Logical AND
console.log(weather); // Output: false


