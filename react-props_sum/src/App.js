import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={400} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return sum;
}

// oder:

// function Sum({ valueA, valueB }) {
//   return (
//     <h1>
//       {valueA} + {valueB} = {valueA + valueB}
//     </h1>
//   );
// }
