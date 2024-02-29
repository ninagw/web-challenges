import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0); // beginne mit dem Zählen bei 0

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${count}` // der aktuelle count wird hier als Pagination in der URL angezeigt
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [count]); // sobald ein Button gedrückt und sich count verringert/erhöht, wird die useEffect()-function erneut ausgeführt

  return (
    <main>
      <button
        type="button"
        onClick={() => setCount(count - 20)}
        disabled={count === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setCount(count + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
