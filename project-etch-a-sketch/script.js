const container = document.querySelector('.container');

for(let i=1; i<=16*16; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseover', e=>hoverChange(e))
}

function hoverChange(square){
  let random = `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
  square.target.style.backgroundColor = random;
}

