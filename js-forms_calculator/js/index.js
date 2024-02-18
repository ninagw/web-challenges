console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const inputNumberA = formElements.numberA.value;
  const inputNumberB = formElements.numberB.value;
  const checkboxOperator = formElements.operator;
  // const checkboxAddition = formElements.operator.addition;

  if (checkboxOperator.value === "addition") {
    return add(inputNumberA, inputNumberB);
  } else if (checkboxOperator.value === "subtraction") {
    return subtract(inputNumberA, inputNumberB);
  } else if (checkboxOperator.value === "multiplication") {
    return multiply(inputNumberA, inputNumberB);
  } else {
    return divide(inputNumberA, inputNumberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
