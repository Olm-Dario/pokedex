import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  )
};

export default PokedexNavigation;