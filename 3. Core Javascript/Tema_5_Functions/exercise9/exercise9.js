function titulo(text) {
    return text.toLowerCase().replace(/(^\w|\s\w)/g, match => match.toUpperCase());
}

const regEx = /^[a-zA-Z\s.]+$/;

function capitalizeText() {
    const inputText = prompt("Enter a text to convert (letters, spaces, and points only):");
    
    if (inputText === null) return;
    
    const trimmedText = inputText.trim();
    
    if (!trimmedText || !regEx.test(trimmedText)) {
        const invalidChars = trimmedText.replace(/[a-zA-Z\s.]/g, "");
        alert(`Invalid input: ${invalidChars ? `detected invalid characters: ${invalidChars}` : "input is empty"}. Please enter only letters, spaces, and points.`);
        return capitalizeText();
    }
    
    const capitalizedText = titulo(trimmedText);
    alert(`Capitalized Text: ${capitalizedText}`);
    
    if (confirm("Do you want to convert another text?")) capitalizeText();
}

window.onload = capitalizeText;