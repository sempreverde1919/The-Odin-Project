let num1, num2, operator, displayValue;

const numBtns = document.querySelectorAll(".number");
const display = document.querySelector(".display");

function add(num1, num2){
    return num1+num2
};

function subtract(num1, num2){
    return num1-num2
};

function multiply(num1, num2){
    return num1*num2
};

function divide(num1, num2) {
    return num1/num2
}

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            console.log("No such oparation")
    }
}

numBtns.forEach(btn => btn.addEventListener("click", (e)=>{
    display.textContent += e.target.value.toString();
    displayValue = display.textContent;
}));