const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const namesOfAstronauts = document.querySelector(
  '[data-js="names-of-astronauts"]'
);

const people = [
  {
    name: "Sergey Prokopyev",
    craft: "ISS",
  },
  {
    name: "Dmitry Petelin",
    craft: "ISS",
  },
  {
    name: "Frank Rubio",
    craft: "ISS",
  },
  {
    name: "Stephen Bowen",
    craft: "ISS",
  },
  {
    name: "Warren Hoburg",
    craft: "ISS",
  },
  {
    name: "Sultan Alneyadi",
    craft: "ISS",
  },
  {
    name: "Andrey Fedyaev",
    craft: "ISS",
  },
  {
    name: "Jing Haiping",
    craft: "Tiangong",
  },
  {
    name: "Gui Haichow",
    craft: "Tiangong",
  },
  {
    name: "Zhu Yangzhu",
    craft: "Tiangong",
  },
];

// const peopleOnIss = people.filter((person) => person.craft === "ISS");

async function getDataFromAPI() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log(data);
  peopleInSpace.textContent = data.number;

  // create li-element for each astronaut
  const allAstronauts = data.people;
  allAstronauts.forEach((astronaut) => {
    const listElement = document.createElement("li");
    listElement.appendChild(namesOfAstronauts);
    listElement.textContent = data.people.name;
  });
}

getDataFromAPI();

peopleInSpace.forEach((astronaut) => {
  const listElement = document.createElement("li");
  listElement.appendChild(namesOfAstronauts);
  listElement.textContent = data.people.name;
});
