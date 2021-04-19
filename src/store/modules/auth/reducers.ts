import produce from 'immer';
import { SIGN_IN, SIGN_IN_SUCCESS } from './actions';

const INITIAL_STATE = {
  loading: false,
  signedIn: false
};

export default function auth(state = INITIAL_STATE, action: any) {
  // "REDUCER AUTH RUNNING", action);
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN:
        draft.loading = true;
        return draft;
      case SIGN_IN_SUCCESS:        
        draft.loading = false;
        draft.signedIn = true;
        return draft;
      default:
        return state;
    }
  });
}
