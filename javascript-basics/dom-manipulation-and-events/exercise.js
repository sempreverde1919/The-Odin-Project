const container = document.querySelector('#container');

//1. a <p> with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";
container.appendChild(para);

//2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

//3. a <div> with a black border and pink background color with the following elements inside of it:
//    another <h1> that says “I’m in a div”
//    a <p> that says “ME TOO!”
//    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);
const paraInDiv = document.createElement('p');
paraInDiv.textContent = "ME TOO!";
div.appendChild(paraInDiv);
container.appendChild(div);
