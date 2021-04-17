import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('if67h.db');

import { signUpRequest, SIGN_UP } from './actions';
import { User } from '../../../models/user';

export function* signUp({payload}: ReturnType<typeof signUpRequest>) {
  try {
    const { name, email, password } = payload;

    db.transaction(
      (tx => {
        tx.executeSql(`INSERT INTO users (name, email, password) values (?, ?, ?)`,
          [name, email, password],
        (_, {insertId})=> console.log("INSERIU", insertId));
    }));
  } catch (error) {
    Alert.alert(
      'Erro no Login',
      `Dados inválidos, verifique seu email e senha!`
    );
    // yield put(signInFailure());
  }
}

export default all([takeLatest(SIGN_UP, signUp)]);