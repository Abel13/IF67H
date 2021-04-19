import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';

import { signUpFailure, signUpRequest, signUpSuccess, SIGN_UP } from './actions';
import { useNavigation } from '@react-navigation/core';
import { navigationRef } from '../../../services/NavigationService';

export function* signUp({payload}: ReturnType<typeof signUpRequest>) {
  try {
    const { email, password } = payload;
    const respones = yield firebase.auth.createUserWithEmailAndPassword(email, password);
    
    console.log(respones);

    yield put(signUpSuccess());

    navigationRef.current?.goBack();
  } catch (error) {
    Alert.alert(
      'Erro no Login',
      `Dados inválidos, verifique seu email e senha!`
    );
    yield put(signUpFailure());
  }
}

export default all([takeLatest(SIGN_UP, signUp)]);