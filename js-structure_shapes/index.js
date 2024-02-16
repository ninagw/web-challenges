// import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

// ---------------circle element---------------

const circleElement = Circle();
root.append(circleElement);

// ---------------square element---------------

const squareElement = Square();
root.append(squareElement);

// ---------------pentagon element---------------

const pentagonElement = Pentagon();
root.append(pentagonElement);
// -------------------------------------------------

root.append(circle, square, pentagon);
