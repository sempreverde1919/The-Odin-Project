const container = document.querySelector(".container");
const button = document.querySelector("button");
let stepCounter;

function createGrid(squaresPerRow) {
  container.innerHTML = "";
  stepCounter = 0;
  for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-element");
    newDiv.style.width = `${640 / squaresPerRow}px`;
    newDiv.style.height = `${640 / squaresPerRow}px`;
    newDiv.addEventListener("mouseenter", (e) => {
      stepCounter++;
      e.target.style.backgroundColor = getRandomColor(stepCounter);
    });
    container.appendChild(newDiv);
  }
}

function getRandomColor(steps) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  console.log(steps);
  let correction = 255 * 0.1 * steps;
  return `rgba(${red - correction},${green - correction},${blue - correction})`;
}

function inputGrid() {
  let input = prompt("Enter the number of squares per row!");
  if (input <= 100) {
    return input;
  } else {
    return 100;
  }
}

createGrid(16);

button.addEventListener("click", () => {
  createGrid(inputGrid());
});
