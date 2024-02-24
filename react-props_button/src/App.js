import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <Button
      color="blue"
      disabled={false}
      text="Click me!"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
