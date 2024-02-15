let num1, num2, operator;


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