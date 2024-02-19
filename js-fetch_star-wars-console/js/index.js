console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");

  const data = await response.json();

  console.log(response);
  console.log(data);

  // complete array of objects
  console.log(data.results);

  // one star wars character by using its index (object of R2-D2)
  console.log(data.results[2]);

  // log eye color of R2-D2:
  console.log(data.results[2].eye_color);
  const foundCharacter = json.results.find(({ name }) => name == "R2-D2"); // without knowing the array position!

  return data;
}

fetchData();
