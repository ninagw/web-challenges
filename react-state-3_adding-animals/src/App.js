import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal() {
    // console.log(newAnimal);
    event.preventDefault();

    const formElements = event.target.elements;
    const animalName = formElements.name.value; // speichert den Tiernamen, der neu im Formular eingegeben wurde
    const animalEmoji = formElements.emoji.value; // speichert das Emoji, das neu im Formular ausgewählt wurde

    setAnimals([
      ...animals, // erstellt Kopie aller Tiere aus meinem ursprünglichen Array "initialAnimals"
      { id: uid(), name: animalName, emoji: animalEmoji }, // erstellt neues Tier-Objekt und fügt sie mit unique ID dem kopierten Animal-Array hinzu.
    ]);

    //ALTERNATIV LÖSUNG, kürzer:
    // function handleAddAnimal(newAnimal) {
    // setAnimals([...animals, {...newAnimal, id: uid()}]);
    //}
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
