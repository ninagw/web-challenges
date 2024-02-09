console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize2 = pizzaInput2.value;
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  // const radius1 = diameter1 / 2;
  // const radius2 = diameter2 / 2;
  // const area1 = Math.PI * (radius1 ** 2);
  // const area2 = Math.PI * (radius2 ** 2);

  const area1 = (Math.PI * diameter1 * diameter1) / 4;
  const area2 = (Math.PI * diameter2 * diameter2) / 4;
  const gain = ((area2 - area1) / area1) * 100;
  console.log(Math.round(gain));
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(newValue) {
  output.textContent = newValue;
}

// Task 3
// define the function updateOutputColor here
