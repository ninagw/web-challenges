console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(event.target.elements);

  event.target.reset();

  formElements.firstName.focus();
});
