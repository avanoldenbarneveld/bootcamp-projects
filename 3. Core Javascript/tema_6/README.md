# JavaScript Exercises

## 📌 Description
This folder contains multiple JavaScript exercises focused on **problem-solving, functional programming, and testing with Jest**.

## 🚀 Exercises Included
### **1️⃣ FizzBuzz (exercise1.js)**
- Classic FizzBuzz implementation.
- Returns **"fizz"** for numbers divisible by 3.
- Returns **"buzz"** for numbers divisible by 5.
- Returns **"fizzbuzz"** for numbers divisible by both.
- Includes input validation.
- **Tested with Jest** to cover various cases.

### **2️⃣ Map with Callback (exercise2.js)**
- Implements a custom `map` function that takes an array and a callback function.
- Applies the callback to each element of the array.
- Handles errors if invalid input is provided.
- **Tested with Jest** to verify correctness and performance.

### **3️⃣ Counting Digit Occurrences (exercise5.js)**
- Prompts the user for a **single digit** and a **number**.
- Counts how many times the digit appears within the number.
- Displays the result in an alert message.

### **4️⃣ Number Reversal (exercise9.js)**
- Prompts the user for a number.
- Reverses the digits and displays the result.
- Handles input validation.

## 🛠️ Technologies Used
- **JavaScript** → Functional programming, input handling, validation, and logic.
- **Jest** → Unit testing framework for automated testing.
- **ESLint** → Code linting and best practices enforcement.
- **HTML** → Used for user interaction in browser-based exercises.

## 🖥️ Usage
### **Run JavaScript Exercises in the Browser**
1. **Open the respective `.js` file in a browser.**
2. **Follow the prompts to enter the required values.**
3. **View the result in an alert message.**
4. **Repeat or exit** when prompted.

### **Run Tests with Jest**
1. Install dependencies (if needed):
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```
3. Check the console for test results.

## 📌 Notes
- Ensures only **valid numeric inputs** are accepted.
- Uses `prompt()`, `alert()`, and `confirm()` for user interaction.
- Input validation prevents incorrect entries.
- FizzBuzz and Map with Callback are **fully tested** with Jest.