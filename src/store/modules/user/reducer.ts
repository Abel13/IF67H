import produce from 'immer';
import { OPEN_SIGN_UP } from '../auth/actions';
import { SIGN_UP, SIGN_UP_SUCCESS, BACK_TO_LOGIN } from './actions';
import { UserReducer } from './interfaces';

const INITIAL_STATE: UserReducer = {
    loading: false,
    openSignUp: false,
    user: undefined
};

export default function user(state = INITIAL_STATE, action: any) {
  // "REDUCER USER RUNNING", action)
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_UP:
        draft.loading = true;
        return draft;
      case SIGN_UP_SUCCESS:
        draft.loading = false;
        draft.openSignUp = false;
        return draft;
      case OPEN_SIGN_UP:
        // "OPEN SIGN UP")
        draft.openSignUp = true;
        return draft;
      case BACK_TO_LOGIN:
          draft.openSignUp = false;
          return draft;
      default:
        return state;
    }
  });
}
