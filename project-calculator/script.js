const prevOutput = document.querySelector(".previous");
const currentOutput = document.querySelector(".current");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const allClearButton = document.querySelector("#allclear");
const deleteButton = document.querySelector("#delete");
const plusMinusButton = document.querySelector("#plusminus");

let prevValue = "",
  currentValue = "",
  operator = "";

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  if (operator === "/" && b === 0) {
    return "ERROR";
  }
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "ERROR";
  }
}

//append the pushed number at the end of the current value
function appendNumber(number) {
  if (number === "." && currentValue.includes(".")) return; //no duplicate floating point
  if (currentValue.length >= 9) return; //fit to screen
  currentValue += number;
}

//add the minus sign (or remove it) before the value
function appendMinus() {
  if (currentValue.length > 8) return; //fit to screen
  if (currentValue.includes("-")) {
    currentValue = currentValue.slice(1); //removes the minus sign
  } else {
    currentValue = `-${currentValue}`;
  }
}

//handle the operator buttons
function chooseOperator(op) {
  !prevValue
    ? (prevValue = currentValue) //if an operator button was pushed for the first time
    : (prevValue = operate(prevValue, operator, currentValue)); //if an operator button was not pushed for the first time - do the calculation
  currentValue = "";
  operator = op; //set the operator pushed lastly
}

//handle the equal button - do the math
function equals() {
  if (prevValue && currentValue) {
    currentValue = operate(prevValue, operator, currentValue);
    prevValue = "";
    operator = "";
  }
}

//handle the AC button - empty every value
function clearAll() {
  currentValue = "";
  prevValue = "";
  operator = "";
}

//handle the DEL button - remove one character from the end of the value
function deleteOneBack() {
  currentValue = currentValue.slice(0, -1);
}

//update the values presented on the screen
function updateDisplay() {
  prevOutput.innerText = `${prevValue} ${operator}`;
  currentOutput.innerText = currentValue;
}

//if the user is pushing the keyboard key
function handleKeyboard(key) {
  if (+key >= 0 || key === ".") {
    appendNumber(key);
  }
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    chooseOperator(key);
  }
  if (key === "Enter") {
    equals();
  }
  if (key === "Backspace") {
    deleteOneBack();
  }
  if (key === "Delete") {
    clearAll();
  }
}

//------------------------------------------

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  })
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    chooseOperator(button.innerText);
    updateDisplay();
  })
);

equalButton.addEventListener("click", () => {
  equals();
  updateDisplay();
});

allClearButton.addEventListener("click", () => {
  clearAll();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  deleteOneBack();
  updateDisplay();
});

plusMinusButton.addEventListener("click", () => {
  appendMinus();
  updateDisplay();
});

document.addEventListener("keyup", (e) => {
  handleKeyboard(e.key);
  updateDisplay();
});
