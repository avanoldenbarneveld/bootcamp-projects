function generateMultiples(size, multiplier) {
    return Array.from({ length: size }, (_, i) => multiplier * (i + 1));
}

function promptUser() {
    const size = parseInt(prompt("Enter the size of the array:"));
    const multiplier = parseInt(prompt("Enter the number to calculate multiples:"));

    const result = generateMultiples(size, multiplier);

    alert(`Generated multiples: [${result.join(', ')}]`);
}

// promptUser();

module.exports = generateMultiples;

