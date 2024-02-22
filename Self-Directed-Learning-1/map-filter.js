const data = [
  {
    id: 1,
    first_name: "George",
    last_name: "Bluth",
    age: 30,
  },
  {
    id: 2,
    first_name: "Janet",
    last_name: "Weaver",
    age: 30,
  },
  {
    id: 3,
    first_name: "Emma",
    last_name: "Wong",
    age: 25,
  },
  {
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    age: 47,
  },
  {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    age: 34,
  },
  {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    age: 52,
  },
];

// TASK 1 – Write a function called getFullNames that:
// takes an array of users;
// returns an array of their full names (e.g. ['John Doe', 'Jane Doe']).

function getFullNames(users) {
  //users ist einfach ein parameter, der frei gewählt werden kann
  return users.map((user) => `${user.first_name} ${user.last_name}`);
}
// console.log(getFullNames(data));

// TASK 2 – Write a function called getUsersOlderThan that:
// takes an array of users and a number;
// returns an array of users older than the passed number.

function getUsersOlderThan(users, number) {
  return users.filter((user) => user.age > number); // warum hier filter() und nicht map()?
}
// console.log(getUsersOlderThan(data, 40));

// TASK 3 – Write a function called getNamesOlderThan that:
// takes an array of users and a number;
// returns an array with the first names of the users older than the passed number.

function getNamesOlderThan(users, number) {
  return getUsersOlderThan(users, number).map((user) => user.first_name);
  //   return getUsersOlderThan(users, number).users.map((user) => user.first_name); // could I use function in function? ja Zeile 64
  // DIEGO's LÖSUNG:
  //   return users
  //     .filter((user) => user.age > number)
  //     .map((user) => user.first_name);
}

console.log(getNamesOlderThan(data, 40));
