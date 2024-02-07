console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// - query all 3 buttons with the 'data-js' attribute:

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');

// "switch to dark mode" button always adds the class "dark" to the body:

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

// "switch to light mode" button always removes the class "dark" from the body:

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// "toggle mode" button toggles the class "dark" on the body:

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
