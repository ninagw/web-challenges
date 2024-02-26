import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        I am the <strong>first</strong> button
      </Button>
      <Button>
        I am the <strong>second</strong> button
      </Button>
      <Button>
        I am the <strong>third</strong> button
      </Button>
      <Button>
        I am the <strong>fourth</strong> button
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
