let num1, num2, operator, displayValue;

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => populateDisplay(e.target.value)));

function populateDisplay(digit){
  display.textContent += digit;
  displayValue = display.textContent;
}

function operate(x, operator, y){
    switch(operator){
        case "+":
            add(x,y);
            break;
        case "-":
            subtract(x,y);
            break;
        case "*":
            multipy(x,y);
            break;
        case "/":
            divide(x,y);
            break;
    }
}

function add(x,y){
    return x + y
}

function subtract(x,y){
    return x - y
}

function multipy(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}