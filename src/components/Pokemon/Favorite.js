import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addPokemonFavoriteApi, getPokemonFavoriteApi } from '../../api/favorite';


const Favorite = ({ id }) => {

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  )
};


export default Favorite;