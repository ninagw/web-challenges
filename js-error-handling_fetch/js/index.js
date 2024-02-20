console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    // testet, ob die response ok oder ein 400 / 500 status code ausgegeben wird
    errorElement.textContent = "Network Error"; // gibt Text im Falle eines Errors an Stelle des p-elements im html Code aus
    return null;
  }
  try {
    const json = await response.json(); // testet, ob JSON Daten korrekt empfangen und ausgegeben werden können
    return json.data;
  } catch (error) {
    errorElement.textContent = "Error parsing JSON"; // gibt error.message aus
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    errorElement.textContent = "";
  })
);
