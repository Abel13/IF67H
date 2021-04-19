import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';

import { DELETE_GENRE, deleteGenreSuccess, deleteGenreFailure, deleteGenreRequest, saveGenreRequest, saveGenreSuccess, SAVE_GENRE, GET_GENRES_REQUEST, getGenresSuccess, getGenresFailure } from './actions';
import { Genre } from '../../../models/genre';

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
    const { name } = payload;
    const response = yield firebase.db.collection('genres').add({name});
    
    const {id} = response;

    yield put(saveGenreSuccess({name, id}));
  } catch (error) {
    console.log(error)
    Alert.alert(
      'Erro',
      `Falha ao excluir o livro! ${error}`
    );
    yield put(deleteGenreFailure());
  }
}

export function* getGenres() {
  try {
    const genres = [] as Genre[];
    const genresSnapshot = yield firebase.db.collection('genres').get();
  
    genresSnapshot.forEach((doc) => {
      genres.push({
        ...doc.data(),
        id: doc.id,
      });
    });
  
    yield put(getGenresSuccess({genres}))
  } catch (error) {
    yield put(getGenresFailure())
  }
}

export default all([
  takeLatest(DELETE_GENRE, deleteGenre), 
  takeLatest(SAVE_GENRE, saveGenre),
  takeLatest(GET_GENRES_REQUEST, getGenres)
]);