import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';

import { signUpFailure, signUpRequest, signUpSuccess, SIGN_UP } from './actions';
import { useNavigation } from '@react-navigation/core';
import { navigationRef } from '../../../services/NavigationService';
import { translate } from '../../../localization';

export function* signUp({payload}: ReturnType<typeof signUpRequest>) {
  try {
    const { email, password } = payload;
    yield firebase.auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccess());

    navigationRef.current?.goBack();
  } catch (error) {
    Alert.alert(translate("error.ops"), translate("error.invalidMessage"));
    yield put(signUpFailure());
  }
}

export default all([takeLatest(SIGN_UP, signUp)]);