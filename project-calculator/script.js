let num1, num2, operator, displayValue;

const display = document.querySelector('.display');
const numBttn = document.querySelectorAll('.number-button');
const clearBtn = document.querySelector('.clear-button');

numBttn.forEach(button => button.addEventListener('click', e => numberToDisplay(e.target.value)));

clearBtn.addEventListener('click', () => {
  display.textContent = "0";
})

function numberToDisplay(digit){
  if(display.textContent==="0"){
    if(digit==="0"){
      return
    } else{
      display.textContent = digit
    }
  } else{
    display.textContent += digit
  }
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