import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Good from '../screens/Good/GoodScreen';
import Search from '../screens/Search/SearchScreen';
import Cart from '../screens/Cart/CartScreen';
import Favorites from '../screens/Favorites/FavoritesScreen';
import Home from '../screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#317AE8',
        inactiveTintColor: '#939399',
        style: {
          height: 96,
          backgroundColor: '#ffffff',
          // position: 'absolute',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) =>
            <Ionicons name="home-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) =>
            <Ionicons name="heart-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) =>
            <Ionicons name="search-outline" size={24} color={color} />
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) =>
            <Ionicons name="cart-outline" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigation = () => (
  <Stack.Navigator headerMode="none" >
    <Stack.Screen name="Home" component={TabNavigator} />
    <Stack.Screen name="Favorites" component={TabNavigator} />
    <Stack.Screen name="Search" component={TabNavigator} />
    <Stack.Screen name="Cart" component={TabNavigator} />
    <Stack.Screen name="Good" component={Good} />
  </Stack.Navigator>
);
