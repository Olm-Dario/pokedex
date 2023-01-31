import { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonDatailsByUrlApi } from "../api/pokemon";
import PokemoList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })()
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDatailsByUrlApi(pokemon.url);

        pokemonArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonArray])

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemoList
        pokemons={pokemons}
        loadPokemons={loadPokemon}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

export default Pokedex;