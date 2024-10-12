function runExercise() {
    const singleDigitRegex = /^\d$/,
          numberRegex = /^\d+$/;

    function promptUserForInput(message, regex, errorMessage) {
        let input;
        while (true) {
            input = prompt(message);
            if (input === null) return null;
            input = input.trim();
            if (regex.test(input)) return input;
            alert(errorMessage);
        }
    }

    while (true) {
        const singleDigit = promptUserForInput(
            "Enter a single digit (or press Cancel to exit):", 
            singleDigitRegex,
            "Invalid input. Please enter exactly one digit."
        );
        if (singleDigit === null) return;

        const number = promptUserForInput(
            "Enter a number (or press Cancel to exit):", 
            numberRegex,
            "Invalid input. Please enter a valid number."
        );
        if (number === null) return;

        let digitCount = 0;
        for (let i = 0; i < number.length; i++) {
            if (number[i] === singleDigit) digitCount++;
        }

        alert(`The digit ${singleDigit} appears ${digitCount} times in the number ${number}.`);

        if (!confirm("Do you want to try again?")) break;
    }
}