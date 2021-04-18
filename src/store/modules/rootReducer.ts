import { combineReducers } from 'redux';
import { ReducerProps } from './interfaces';

import user from './user/reducers';
import auth from './auth/reducers';
import home from './home/reducers';

export default combineReducers<ReducerProps>({
  user,
  auth,
  home
});
