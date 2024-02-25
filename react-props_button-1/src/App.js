import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Hurray, you clicked me!");
  }
  return (
    <Button
      color="red"
      disabled={false}
      text="I am a button – click me!"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button disabled={disabled} style={{ color }} onClick={onClick}>
      {text}
    </button>
  );
}
