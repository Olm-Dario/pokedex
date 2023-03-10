import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const renderPokeball = () => {
  return (
    <Image source={require('../assets/pokeball.png')} style={{ width: 75, height: 75, top: -15 }} />
  )
};

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favotire"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />
        }} />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball()
        }} />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Micuenta",
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
        }} />
    </Tab.Navigator>
  );
}

export default Navigation;