import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

const Pokemon = () => {
  
  useEffect(() => {
    ( async () => {
      await logPokemon();
    })()
  }, []);
  
  const logPokemon = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
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