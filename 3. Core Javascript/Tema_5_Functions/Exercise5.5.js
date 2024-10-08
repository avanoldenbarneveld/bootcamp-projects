// Ask the user to enter a digit and a number, then call a function that counts how many times the digit appears in the number

const countDigit = (digit, number) => {
    let count = 0;
    for (let char of number) {
        if (char === digit) {
            count++;
        }
    }
    return count;
};


