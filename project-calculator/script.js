let operator="", displayValue=0, storedValue;

const displayBottom = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top');
const screen = document.querySelector('.screen');
const numBtn = document.querySelectorAll('.number-button');
const clearBtn = document.querySelector('.clear-button');
const opBtn = document.querySelectorAll('.operator-button');
const equalBtn = document.querySelector('.equal-button');

numBtn.forEach(button => button.addEventListener('click', e => {
  handleNumbers(e.target.value, screen.textContent);
  /*if(displayBottom.textContent==="0"){
      if(e.target.value!=="0") displayBottom.textContent = e.target.value
   } else{
    displayBottom.textContent += e.target.value
  }
  displayValue = +(displayBottom.textContent);*/
}));
  
clearBtn.addEventListener('click', () => {
  storedValue = 0;
  displayValue = 0;
  displayTop.textContent = "";
  displayBottom.textContent = displayValue;
  screen.textContent = "0";
  operator="";
})

opBtn.forEach(button => button.addEventListener('click', e => {
  handleOperators(e.target.value, screen.textContent);
  /*displayValue = +(displayBottom.textContent);
  let lastChar = displayTop.textContent.slice(-1);
  if(['+','-','*','/'].includes(lastChar)){
    operator = lastChar;
    storedValue = operate(storedValue, operator, displayValue);
  } else{
    storedValue = displayValue;
  } 
  operator = e.target.value;
  displayTop.textContent = `${storedValue} ${operator}`;
  displayValue = 0;
  displayBottom.textContent = displayValue;
  */
}))

equalBtn.addEventListener('click', () => {
  if(storedValue && operator){
        displayTop.textContent = `${storedValue} ${operator} ${displayValue} =`;
    displayValue = operate(storedValue, operator, displayValue);
    displayBottom.textContent = displayValue;
  }
})


function operate(x, operator, y){
    switch(operator){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}

function add(x, y){
  return Math.round((x+y)*1000)/1000;
}
function subtract(x, y){
  return Math.round((x-y)*1000)/1000;
}
function multiply(x, y){
  return Math.round((x*y)*1000)/1000;
}
function divide(x, y){
  return Math.round((x/y)*1000)/1000;
}

function handleNumbers(digit, screenText){
  if(digit==="." && screenText.includes(".")) return;
  if(screenText==="0") {
    digit==="." ? screenText = "0." : screenText = digit
  } else {
    screenText += digit;
  }
  refreshScreen(screenText);
}

function handleOperators(digit, screenText){
  displayValue = +screenText;
  operator = digit;
  resetScreen();
  console.log(displayValue);

  
}


function resetScreen(){
  screen.textContent = "0";
}

function refreshScreen(text){
  screen.textContent = text;
}