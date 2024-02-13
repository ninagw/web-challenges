console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target.elements;
  const tosCheck = formElement.tos.checked;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(tosCheck);

  if (tosCheck === false) {
    return showTosError();
  }

  alert("Form submitted");
});

tosCheckbox.addEventListener("input", (event) => {
  const checkBox = event.target.checked;

  console.log(checkBox);

  if (checkBox) {
    hideTosError();
  } else {
    showTosError();
  }
});
