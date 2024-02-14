console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement("li"); // create new list-element
  toastContainer.append(newToastMessage); // position new list-element in ol-element which we declared to the const toastContainer

  newToastMessage.classList.add("toast-container__message"); // style new list-element with css-class .toast-container__message

  newToastMessage.textContent = "I am a new message!"; // add text to new list-element
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
