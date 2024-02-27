import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apple",
      color: "red",
    },
    {
      id: 3,
      name: "Strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "Grapes",
      color: "green",
    },
    {
      id: 5,
      name: "Peach",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
