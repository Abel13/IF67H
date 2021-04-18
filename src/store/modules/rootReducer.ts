import { combineReducers } from 'redux';

import user from './user/reducer';
import auth from './auth/reducers';

export default combineReducers({
  user,
  auth
});
