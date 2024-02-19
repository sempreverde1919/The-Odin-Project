let operator, displayValue=0, storedValue;

const displayBottom = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top');
const numBttn = document.querySelectorAll('.number-button');
const clearBtn = document.querySelector('.clear-button');
const opBtn = document.querySelectorAll('.operator-button');
const equalBtn = document.querySelector('.equal-button');

numBttn.forEach(button => button.addEventListener('click', e => {
  if(displayBottom.textContent==="0"){
      if(e.target.value!=="0") displayBottom.textContent = e.target.value
   } else{
    displayBottom.textContent += e.target.value
  }
  displayValue = +(displayBottom.textContent);
}));
  
clearBtn.addEventListener('click', () => {
  storedValue = 0;
  displayValue = 0;
  displayTop.textContent = "";
  displayBottom.textContent = displayValue;
})

opBtn.forEach(button => button.addEventListener('click', e => {
  displayValue = +(displayBottom.textContent);
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
            return x + y ;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
    }
}