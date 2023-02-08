import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';


const Favorite = ({ id }) => {

  const [isFavorite, setIsFavorite] = useState(undefined);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, isFavorite]);


  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const removeFavorite = () => {
    console.log("eliminar favorite");
  }

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  )
};


export default Favorite;