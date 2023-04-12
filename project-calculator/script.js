let num1, num2, operator, solution, displayValue;

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#equal");
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
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            console.log("No such oparation")
    }
}

numBtns.forEach(btn => btn.addEventListener("click", (e)=>{
    display.textContent += e.target.value.toString();
    displayValue = display.textContent;
}));

opBtns.forEach(btn=> btn.addEventListener("click", (e)=>{
    num1 = displayValue;
    operator = e.target.value;
    display.textContent = "";
    displayValue = display.textContent;
}));

equalBtn.addEventListener("click", (e)=>{
    num2 = displayValue;
    console.log(num1);
    console.log(num2);
    console.log(operator);
    
    solution = operate(num1, operator, num2);
    console.log(solution);
    display.textContent = solution;
})