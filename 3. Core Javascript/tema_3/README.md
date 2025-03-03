# Wheel Size Evaluation

## 📌 Description
This exercise asks the user for the **diameter and thickness** of a wheel and determines whether it is **large, medium, or small**. It also checks if the thickness is appropriate for the wheel size.

## 🚀 How It Works
1. The user is prompted to enter:
   - **Diameter** (e.g., 1.2 meters)
   - **Thickness** (e.g., 0.3 meters)
2. Based on the entered diameter:
   - **> 1.4m** → Large wheel *(recommended thickness ≥ 0.4m)*
   - **0.8m - 1.4m** → Medium wheel *(recommended thickness ≥ 0.25m)*
   - **< 0.8m** → Small wheel
3. A message is displayed with the wheel type and whether the thickness is appropriate.
4. A button is included to **reset the process**.

## 🛠️ Technologies Used
- **HTML** → Page structure.
- **JavaScript** → Data input handling, validation, and evaluation logic.

## 🖥️ Usage
1. **Open the `Exercise3.4.html` file in a browser.**
2. **Enter the required values** when prompted.
3. **Read the pop-up message with the evaluation.**
4. **Use the button** to reset and try different values.

## 📌 Notes
- Only accepts **positive numerical values**.
- Uses `prompt()` and `alert()` for user interaction.