import { navigationRef } from './src/services/NavigationService';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {translations} from './src/localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import Colors from './src/styles/colors.json';

i18n.translations = translations;

i18n.locale = Localization.locale;
i18n.fallbacks = true;

import Routes from './src/routes';
import { Provider } from 'react-redux';
import  store from './src/store';

export default function App() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: Colors.primary,
      background: Colors.background,
      card: Colors.dark,
      text: Colors.light,
      border: Colors.danger,
      notification: Colors.info,
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar style="light" />
        <View style={{ flex: 1 }}>
          <Routes/>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
