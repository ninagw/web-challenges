console.clear();

// Task 1 –
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
