const display = document.querySelector('.calculator-row');

let expression = ""; 

function calculate(symbol) {
    expression += symbol;

    display.textContent = expression;
}

function getRes() {
    
    if (expression === "") return;
    
    try {
       
        expression = eval(expression).toString(); 
        display.textContent = expression;
    } catch (error) {
        display.textContent = "Error";
        expression = "";
    }
}

function clearDisplay() {
    expression = "";
    display.textContent = expression;
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.textContent = expression;
}