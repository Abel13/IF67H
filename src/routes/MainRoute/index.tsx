import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../styles/colors.json';

import Home from '../../components/pages/Home';
import About from '../../components/pages/About';
import Book from '../../components/pages/Book';
import Genre from '../../components/pages/Genre';
import { createStackNavigator } from '@react-navigation/stack';
import { translate } from '../../localization';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{
    headerShown: true,
  }} >
    <Stack.Screen name={translate("navigation.home")} component={ Home } />
    <Stack.Screen name={translate("navigation.book")} component={ Book }/>
  </Stack.Navigator>
);

const BookRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{
    headerShown: true,
  }} >
    <Stack.Screen name={translate("navigation.book")} component={ Book } />
  </Stack.Navigator>
);

const GenreRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{
    headerShown: true,
  }} >
    <Stack.Screen name={translate("navigation.genre")} component={ Genre }/>
  </Stack.Navigator>
);

const MainRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={translate("navigation.home")} tabBarOptions={{
      labelStyle: {fontSize: 12}
    }}>
      <Tab.Screen name={translate("navigation.home")} component={ HomeRoutes } />
      <Tab.Screen name={translate("navigation.book")} component={ BookRoutes } />
      <Tab.Screen name={translate("navigation.genre")} component={ GenreRoutes } />
      <Tab.Screen name={translate("navigation.about")} component={ About } />
    </Tab.Navigator>
)};

export default MainRoutes;
