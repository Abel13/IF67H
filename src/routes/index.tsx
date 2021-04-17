import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../styles/colors.json';

import SignIn from '../components/pages/SignIn';
import SignUp from '../components/pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: Colors.background },
  }} >
    <Auth.Screen name="SignIn" component={ SignIn } />
    <Auth.Screen name="SignUp" component={ SignUp }/>
  </Auth.Navigator>
);

export default AuthRoutes;