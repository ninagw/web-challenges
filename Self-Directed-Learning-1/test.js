// Task1 – arrays
function getAtPosition(array, number) {
  return array[number];
}
// erst Erwartungshaltung meiner function aufschreiben/testen und dann mit ausgeführten function abgleichen
console.log(getAtPosition([2, 25, 3, 40], 2)); // 3
console.log(getAtPosition([2, 25, 3, 40], 3)); // 40

//Task2
function createTodo(text, isUrgent) {}

//Task 3: Rewrite getLast and getFirst by recycling getAtPosition :
function getAtPosition(array, number) {
  return array[number];
}

function getFirst(array) {
  return getAtPosition(array, 0);
  // instead of return array[0];
}

function getLast(array) {
  return getAtPosition(array, array.length - 1);
  // instead of return array[array.length - 1];
}

console.log(getFirst(["a", "b", "c"])); // 'a'
console.log(getLast(["a", "b", "c"])); // 'c'
// This process is called Partial Function Application.
// You take a function with N parameters, and write a function with N-1 parameters that uses the original function internally.
// It’s a fun story to tell at parties!
