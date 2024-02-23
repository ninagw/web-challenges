import "./styles.css";

export default function App() {
  return <Greeting name="Marc" />;
}

function Greeting({ name }) {
  // return <h1>Hello, {name}!</h1>;
  return <h1>Hello {name == "Marc" ? "Coach!" : name}</h1>;
}
