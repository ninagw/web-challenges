import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  // const [data, setData] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results); // fügt neue Pokemons hinzu
      } catch (error) {
        console.log(error); // log error, wenn API nicht erreichbar oder anderer Fehler auftritt
      }
    }

    loadPokemon(); // calls the loadPokemon function and fetches the data from the API
  }, []);

  return (
    <main>
      {/* <button type="button" onClick={loadPokemon}>
        Load Pokémon
      </button> */}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
