# Capitalize Last Name

## 📌 Description
This function takes a **full name (two words)** and transforms it so that the **first name is capitalized normally**, while the **last name is fully uppercase**. It also includes **input validation** and error handling.

## 🚀 Features
- Ensures input is a **string**.
- Splits the input into **exactly two words** (first and last name).
- Capitalizes the **first letter of the first name**.
- Converts the **entire last name to uppercase**.
- Handles **unexpected whitespace**.
- **Throws custom errors** if input is invalid.

## 🛠️ Technologies Used
- **JavaScript** → String manipulation and error handling.
- **Jest** → Unit testing framework.
- **ESLint** → Code linting for best practices.

## 🖥️ Usage
### **Run the Script**
```bash
node exercise.js
```
### **Run Tests with Jest**
```bash
npm test
```

## 📌 Notes
- If input is **not a string**, it throws a `TypeError`.
- If input does **not contain exactly two words**, it throws a `ValueError`.
- Includes **unit tests** covering various cases (valid inputs, errors, whitespace handling).

