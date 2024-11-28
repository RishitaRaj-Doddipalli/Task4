// script.js

// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    let displayValue = document.getElementById('display').value;
    
    try {
        // Using eval() to calculate the expression
        // Warning: eval() can be dangerous with user input, use with caution in real-world applications
        let result = eval(displayValue);
        
        // Display the result
        document.getElementById('display').value = result;
    } catch (error) {
        // If the expression is invalid, show an error
        document.getElementById('display').value = 'Error';
    }
}
