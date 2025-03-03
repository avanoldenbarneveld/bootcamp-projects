# Get Values in Range

## 📌 Description
This project implements a function `getValuesInRange(set, lowerBound, upperBound)` that extracts numerical values within a specified range from a **Set**. The function ensures type safety and excludes non-numeric values.

Includes **unit tests with Jest** to validate functionality and error handling.

## 🚀 Features
- **Extracts numbers** from a given set within the defined range.
- **Ignores non-numeric values** in the input set.
- **Throws errors** for incorrect data types:
  - Ensures the first argument is a `Set`.
  - Ensures bounds are valid numbers.
- **Includes Jest tests** covering multiple edge cases.

## 🛠️ Technologies Used
- **JavaScript** → Functional programming with array and set operations.
- **Jest** → Unit testing framework.
- **ESLint** → Enforces code style best practices.

## 📥 Installation
1. Extract the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Usage
### **Run the Script**
```bash
node exercise12.js
```

### **Run Tests with Jest**
```bash
npm test
```

### **Generate Coverage Report**
```bash
npm run coverage
```

## 📌 Notes
- Uses `Set` operations and array filtering for efficiency.
- Ensures robust **type validation** to prevent runtime errors.
- Jest tests cover various cases, including:
  - Valid number ranges
  - Empty sets
  - Non-numeric values
  - Boundary conditions.

