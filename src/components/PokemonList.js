import { View, Text, FlatList, StyleSheet } from 'react-native';


const PokemoList = ({pokemons}) => {

  

  return(
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <Text>{item.name}</Text>}
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