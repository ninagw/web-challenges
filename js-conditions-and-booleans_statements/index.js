console.clear();

// Part 1: Password
let SUPER_SECRET_PASSWORD = "h4x0r1337";

let receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
// - for a given `numberOfHotdogs` a person buys, log the respective price that the person has to pay:
// - for less than 5 hotdogs: 2 euro per hotdog
// - for more than 5 but less than 100 hotdogs: 1.50 euro per hotdog
// - for more than 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
// - for more than 1 000 000 hotdogs: 0.10 euro per hotdog
// - change the `numberOfHotdogs` to see if your code works properly
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1);
} else if (numberOfHotdogs > 1000000) {
  console.log(numberOfHotdogs * 0.1);
}

// Part 4: Daytime
// - use a ternary operator to define the `statement` variable as follows:
// - if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
// - if the currentHour is greater or equal to 17 it should equal "Partytime!!!"
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
// - use a ternary operator inside the round brackets to complete the `greeting` as follows.
// - if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
// - otherwise the string saved in `name` should be used instead, e.g.:
//   ```js
//   const name = "Archibald";
//   // logs "Hello Archibald!"
//   ```
// - change the value of `name` to check if the ternary operator works properly.
const name = "Marc";

// const greeting = "Hello " + name + "!";

const greeting = "Hallo " + (name === "Marc" ? "Coach" : name) + "!";

console.log(greeting);
