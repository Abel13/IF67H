import { all, call } from 'redux-saga/effects';

import user from './user/sagas';
import auth from './auth/sagas';

export default function* rootSaga(): any {
  return yield all([user, auth]);
}
