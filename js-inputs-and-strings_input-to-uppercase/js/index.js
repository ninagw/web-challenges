console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

let firstInput = document.querySelector('[data-js="first-input"]');
let buttonElement = document.querySelector('[data-js="button-uppercase"]');

buttonElement.addEventListener("click", () => {
  let firstValue = firstInput.value;
  let newValue = firstInput.value.toUpperCase();
  firstInput.value = newValue;

  // easier solution:
  // firstInput.value = firstInput.value.toUpperCase();
});
