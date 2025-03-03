# String Transformer

## 📌 Description
This project defines a `StringTransformer` class that provides multiple string manipulation methods, such as reversing characters, removing vowels, and randomizing character order. It also includes **unit tests** to ensure the correctness of each method.

## 🚀 Features
- Convert a string into a **character array**.
- **Randomize** the characters of a string.
- **Reverse** characters.
- Remove **vowels** from a string.
- Remove **consonants** from a string.
- Convert a string into a **word array**.
- **Reverse** the order of words in a sentence.

## 🛠️ Technologies Used
- **JavaScript** → Object-oriented programming (OOP) and string manipulation.
- **Jest** → Unit testing framework.
- **ESLint** → Code linting for best practices.

## 🖥️ Usage
### **Run the Script**
```bash
node stringTransformer.js
```
### **Run Tests with Jest**
```bash
npm test
```

## 📌 Notes
- The class methods modify an internal `result` variable that stores the transformed string.
- The `getResult()` method retrieves the modified string or array.
- Jest tests validate all transformations, including **edge cases**.

