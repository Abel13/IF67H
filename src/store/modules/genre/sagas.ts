import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { DELETE_GENRE, deleteGenreSuccess, deleteGenreFailure, deleteGenreRequest, saveGenreRequest, saveGenreSuccess } from './actions';

export function* deleteGenre({payload}: ReturnType<typeof deleteGenreRequest>) {
  try {
    const { id } = payload;
    // delete on Firebase

    yield put(deleteGenreSuccess({id}));
  } catch (error) {
    Alert.alert(
      'Erro',
      `Falha ao excluir o livro!`
    );
    yield put(deleteGenreFailure());
  }
}

export function* saveGenre({payload}: ReturnType<typeof saveGenreRequest>) {
  try {
    const { title, abstract, genreId } = payload;
    // delete on Firebase

    console.log("AAAAAA")
    const id = Math.random()

    yield put(saveGenreSuccess({title, abstract, genreId, id}));
  } catch (error) {
    Alert.alert(
      'Erro',
      `Falha ao excluir o livro!`
    );
    yield put(deleteGenreFailure());
  }
}

export default all([takeLatest(DELETE_GENRE, deleteGenre)]);