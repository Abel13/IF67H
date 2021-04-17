import { all, call } from 'redux-saga/effects';

import user from './user/sagas';

export default function* rootSaga(): any {
  return yield all([user]);
}
