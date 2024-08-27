/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

const fs = require("fs");

import inquirer from "inquirer";
// import qr-image from "qr-image";

const userInput = inquirer.readFile("./URL.txt");
console.log(userInput);

// var img = require('qr-image');

// var img_png = img.image(userInput, { type: 'png' });
// img_png.pipe(require('fs').createWriteStream(userInput));

// var png_string = qr.imageSync('I love QR!', { type: 'png' });

fs.writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved.");
});
