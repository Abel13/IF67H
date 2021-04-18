import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../styles/colors.json';

import Home from '../../components/pages/Home';
import About from '../../components/pages/About';
import Book from '../../components/pages/Book';
import Genre from '../../components/pages/Genre';

const Tab = createBottomTabNavigator();

const MainRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
      labelStyle: {fontSize: 14}
    }}>
      <Tab.Screen name="Home" component={ Home } />
      <Tab.Screen name="Livro" component={Book} />
      <Tab.Screen name="Gênero" component={Genre} />
      <Tab.Screen name="Sobre" component={ About } />
    </Tab.Navigator>
)};

export default MainRoutes;
