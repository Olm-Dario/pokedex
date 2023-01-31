import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import PokemonCard from './PokemonCard';
PokemonCard

const PokemoList = ({ pokemons, loadPokemons, isNext }) => {

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flastListContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size='large'
            style={styles.spinner}
            color='#AEAEAE'
          />
        )
      }
    />
  )
};

const styles = StyleSheet.create({
  flastListContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
});

export default PokemoList;