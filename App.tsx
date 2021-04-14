import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {translations} from './src/localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = translations;

i18n.locale = Localization.locale;
i18n.fallbacks = true;

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <Routes/>
      </View>
    </NavigationContainer>
  );
}
