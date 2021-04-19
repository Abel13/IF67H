import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { DELETE_BOOK, deleteBookSuccess, deleteBookFailure, deleteBookRequest, saveBookRequest, saveBookSuccess, SAVE_BOOK } from './actions';

export function* deleteBook({payload}: ReturnType<typeof deleteBookRequest>) {
  try {
    const { id } = payload;
    // delete on Firebase

    yield put(deleteBookSuccess({id}));
  } catch (error) {
    Alert.alert(
      'Erro',
      `Falha ao excluir o livro!`
    );
    yield put(deleteBookFailure());
  }
}

export function* saveBook({payload}: ReturnType<typeof saveBookRequest>) {
  try {
    const { title, abstract, genreId } = payload;
    
    const response = yield firebase.db.collection('books').add({
      title,
      abstract,
      genreId
    });
    
    const { id } = response;

    yield put(saveBookSuccess({title, abstract, genreId, id}));
  } catch (error) {
    console.log(error)
    Alert.alert(
      'Erro',
      `Falha ao excluir o livro!`
    );
    yield put(deleteBookFailure());
  }
}

export default all([
  takeLatest(DELETE_BOOK, deleteBook),
  takeLatest(SAVE_BOOK, saveBook),
]);