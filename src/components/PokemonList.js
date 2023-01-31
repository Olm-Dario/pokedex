import { View, Text, FlatList, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';
PokemonCard

const PokemoList = ({pokemons}) => {

  

  return(
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flastListContainer} 
    />  
  )
};

const styles = StyleSheet.create({
  flastListContainer: {
    paddingHorizontal: 5
  }
});

export default PokemoList;