const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const listOfAstronauts = document.querySelector(
  '[data-js="list-of-astronauts"]'
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
}

getDataFromAPI();

// create li-element for each astronaut
const allAstronauts = people;
allAstronauts.forEach((astronaut) => {
  const listElement = document.createElement("li");
  listElement.appendChild(listOfAstronauts);
  listElement.textContent = `${people.name}`;
});

// peopleInSpace.forEach((astronaut) => {
//   const listElement = document.createElement("li");
//   listElement.appendChild(listOfAstronauts);
//   listElement.textContent = data.people.name;
// });
