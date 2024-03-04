const container = document.querySelector('.container');
const button = document.querySelector('button');
let size = 16;
button.addEventListener('click', changeGrid);

function initialize(){
  container.textContent="";
  for(let i=1; i<=size*size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = `${100/size}%`;
    container.appendChild(square);
    square.addEventListener('mouseover', e=>hoverChange(e))
  }
}

function hoverChange(square){
  let random = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
  square.target.style.backgroundColor = random;
}

function changeGrid(){
  do{
    size = prompt("Add the size of the grid:");
  } while(isNaN(+size) || +size>100);
  initialize();
}

initialize();