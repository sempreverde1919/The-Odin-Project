let operator, displayValue=0, storedValue;

const displayBottom = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top');
const numBttn = document.querySelectorAll('.number-button');
const clearBtn = document.querySelector('.clear-button');
const opBtn = document.querySelectorAll('.operator-button');

numBttn.forEach(button => button.addEventListener('click', e => numberToDisplay(e.target.value)));

clearBtn.addEventListener('click', () => {
  displayTop.textContent = "";
  displayBottom.textContent = "0";
})

opBtn.forEach(button => button.addEventListener('click', e => {
  displayValue = +(displayBottom.textContent);
  operator = e.target.value;
  if(['+','-','*','/'].includes(displayTop.textContent.slice(-1))){
    storedValue = operate(storedValue, operator, displayValue);
    displayValue = 0;
  } else{
    storedValue = displayValue;
    displayValue = 0;
  }
  displayTop.textContent = `${storedValue} ${operator}`;
  displayBottom.textContent = displayValue;
}))




function numberToDisplay(digit){
  if(displayBottom.textContent==="0"){
    if(digit==="0"){
      return
    } else{
      displayBottom.textContent = digit
    }
  } else{
    displayBottom.textContent += digit
  }
}



function operate(x, operator, y){
    switch(operator){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multipy(x,y);
        case "/":
            return divide(x,y);
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