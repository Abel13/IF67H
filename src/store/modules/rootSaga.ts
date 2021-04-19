import { all, call } from 'redux-saga/effects';

import user from './user/sagas';
import auth from './auth/sagas';
import book from './book/sagas';
import genre from './genre/sagas';

export default function* rootSaga(): any {
  return yield all([user, auth, book, genre]);
}
