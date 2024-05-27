let name = prompt("What's your name?");
let firstLetter = name.slice(0, 1);
let lastLetters = name.slice(1, name.length);
alert("Hello, " + firstLetter.toUpperCase() + lastLetters.toLowerCase());
