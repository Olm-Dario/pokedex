import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi, getPokemonDatailsByUrlApi } from "../api/pokemon";

const Pokemon = () => {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    ( async () => {
      await logPokemon();
    })()
  }, []);
  
  const logPokemon = async () => {
    try {
      const response = await getPokemonsApi();
      
      const pokemonArray = [];
      for await (const pokemon of response.results){
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
      console.log(pokemons)

    } catch (error) {
      console.log(error);
    }
  };


  return(
    <View>
      <Text>Estamos en un Pokemon</Text>
    </View>
  )
};

export default Pokemon;