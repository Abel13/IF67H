import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../styles/colors.json';

import SignIn from '../../components/pages/SignIn';
import SignUp from '../../components/pages/SignUp';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }} >
    <Stack.Screen name="SignIn" component={ SignIn } />
    <Stack.Screen name="SignUp" component={ SignUp }/>
  </Stack.Navigator>
);

export default AuthRoutes;