import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  )
};

export default PokedexNavigation;