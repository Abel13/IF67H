import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signUpRequest, signUpSuccess, SIGN_UP } from './actions';
import { useNavigation } from '@react-navigation/core';
import { navigationRef } from '../../../services/NavigationService';

export function* signUp({payload}: ReturnType<typeof signUpRequest>) {
  try {
    const { name, email, password } = payload;

    console.log('asdadasdasd');
    yield put(signUpSuccess());

    navigationRef.current.goBack();
  } catch (error) {
    Alert.alert(
      'Erro no Login',
      `Dados inválidos, verifique seu email e senha!`
    );
    // yield put(signInFailure());
  }
}

export default all([takeLatest(SIGN_UP, signUp)]);