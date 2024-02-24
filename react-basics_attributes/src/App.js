import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">I am an article in JSX</h2>
      <label id="article_label"></label>
      <input htmlFor="article_input"></input>
      <a
        className="article__link"
        href="https://react.dev/learn/writing-markup-with-jsx"
      >
        Writing Markup with JSX
      </a>
    </article>
  );
}
