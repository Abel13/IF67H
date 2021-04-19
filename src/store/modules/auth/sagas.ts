import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';
import { translate } from '../../../localization';

import { signInRequest, signInSuccess, SIGN_IN } from './actions';

export function* signIn({payload}: ReturnType<typeof signInRequest>) {
  try {
    const { email, password } = payload;
    yield firebase.auth.signInWithEmailAndPassword(email, password);

    yield put(signInSuccess());
  } catch (error) {
    Alert.alert(translate("error.invalid"), translate("error.invalidMessage"))
  }
}

export default all([takeLatest(SIGN_IN, signIn)]);