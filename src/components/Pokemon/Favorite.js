import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Favorite = ({ id }) => {

  const addFavorite = () => {
    console.log('Añadir a favorito', id);
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