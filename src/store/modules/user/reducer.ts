import produce from 'immer';
import { SIGN_UP } from './actions';

const INITIAL_STATE = {
  loading: false,
  user: null
};

export default function user(state = INITIAL_STATE, action: any) {
  console.log("REDUCER RUNNING")
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_UP:
        draft.loading = true;
        return draft;
      default:
        return state;
    }
  });
}
