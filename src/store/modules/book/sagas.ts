import { takeLatest, call, put, all } from 'redux-saga/effects';
import firebase from '../../../services/firebase';
import { Alert } from 'react-native';

import { DELETE_BOOK, deleteBookSuccess, deleteBookFailure, deleteBookRequest, saveBookRequest, saveBookSuccess, SAVE_BOOK, GET_BOOKS_REQUEST, getBooksSuccess, getBooksFailure } from './actions';
import { Book } from '../../../models/book';

export function* deleteBook({payload}: ReturnType<typeof deleteBookRequest>) {
  try {
    const { id } = payload;

    yield firebase.db.collection('books').doc(id).delete();

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
    const { title, summary, genreId } = payload;
    
    const response = yield firebase.db.collection('books').add({
      title,
      summary,
      genreId
    });
    
    const { id } = response;

    yield put(saveBookSuccess({title, summary, genreId, id}));
  } catch (error) {
    console.log(error)
    Alert.alert(
      'Erro',
      `Falha ao incluir o livro!`
    );
    yield put(deleteBookFailure());
  }
}

export function* getBooks() {
  try {
    const books = [] as Book[];
    const genresSnapshot = yield firebase.db.collection('books').get();
  
    genresSnapshot.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    
    yield put(getBooksSuccess({books}))
  } catch (error) {
    Alert.alert(
      'Erro',
      `Falha ao incluir o livro!`
    );
    yield put(getBooksFailure())
  }
}

export default all([
  takeLatest(DELETE_BOOK, deleteBook),
  takeLatest(SAVE_BOOK, saveBook),
  takeLatest(GET_BOOKS_REQUEST, getBooks)
]);