console.clear();

// Task 1 – Write a function called generateEmail that accepts
// an object as the only parameter, and returns <firstName>.<lastName>@example.com, all in lowercase.
function generateEmail(newUser) {
  const name = newUser.firstName;
  const sirname = newUser.lastName;
  return name + "." + sirname + "@example.com";
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

const email = generateEmail(newUser);
console.log(email.toLowerCase());

// Task 2 – Write a function that takes a string as parameter,
// and returns an object with firstName and lastName keys, guessed by the email.
function getUserFromEmail() {
  // if the email does not contain a @, return null
  // if it does, split the email at @ and take the first entry in consideration
  // if such part does not have a ., return null
  // if it does, you know what you have to do!
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));

// Task 3
