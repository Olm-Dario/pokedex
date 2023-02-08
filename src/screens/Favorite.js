import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonFavoriteApi } from '../api/favorite';

const Favorite = () => {

  const checkFavorite = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title='Obtener Favoritos' onPress={checkFavorite} />
    </SafeAreaView>
  );
}

export default Favorite;