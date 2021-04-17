import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {translations} from './src/localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = translations;

i18n.locale = Localization.locale;
i18n.fallbacks = true;

import Routes from './src/routes';
import RunMigration from './src/database';
import { Provider } from 'react-redux';
import  store from './src/store';

export default function App() {
  useEffect(() => {
    async function startMigration() {
      console.log("START MIGRATION");
      await RunMigration();
      console.log("END MIGRATION");
    }

    startMigration();
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <View style={{ flex: 1 }}>
          <Routes/>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
