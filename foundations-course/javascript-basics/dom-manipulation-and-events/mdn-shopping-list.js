//2. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

//3. Create a function that will run in response to the button being clicked.
button.addEventListener('click', addItem);

//4. Inside the function body, start off by storing the current value of the input element in a variable.
//5. Next, empty the input element by setting its value to an empty string — ''.
//6. Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
//7. Append the span and the button as children of the list item.
//8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
//9. Append the list item as a child of the list.
// 10. Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
//11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

function addItem(){ //--> 3.
  let inputValue = input.value; //--> 4.
  input.value = ''; //--> 5.
  const li = document.createElement('li'); //--> 6.
  const span = document.createElement('span'); //--> 6.
  const delBtn = document.createElement('button'); //--> 6.
  li.appendChild(span); //--> 7.
  li.appendChild(delBtn); //--> 7.
  span.textContent = inputValue; //--> 8.
  delBtn.textContent = "Delete"; //--> 8.
  delBtn.addEventListener('click', () => ul.removeChild(delBtn.parentNode)); //--> 10.
  ul.appendChild(li); //--> 9.
  input.focus(); //--> 11.
};

