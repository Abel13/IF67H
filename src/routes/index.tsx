import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../styles/colors.json';

import SignIn from '../components/pages/SignIn';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: Colors.background },
  }} >
    <Auth.Screen name="SignIn" component={ SignIn }/>
  </Auth.Navigator>
);

export default AuthRoutes;