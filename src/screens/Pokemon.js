import { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { getPokemonDetailsApi } from '../api/pokemon';


const Pokemon = ({ navigation, route: { params } }) => {

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>Estamos en un Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  )
};

export default Pokemon;