import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';

import { signInRequest, signInSuccess, SIGN_IN } from './actions';

export function* signIn({payload}: ReturnType<typeof signInRequest>) {
  try {
    const { email, password } = payload;
    yield firebase.auth.signInWithEmailAndPassword(email, password);

    yield put(signInSuccess());
  } catch (error) {
    console.log(error)
    Alert.alert(
      'Erro no Login',
      `Dados inválidos, verifique seu email e senha!`
    );
    // yield put(signInFailure());
  }
}

export default all([takeLatest(SIGN_IN, signIn)]);