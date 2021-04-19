import produce from 'immer';
import { DELETE_BOOK } from '../book/actions';
import { HomeReducer } from './interfaces';

const INITIAL_STATE: HomeReducer = {
  loading: false,
};

export default function home(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_BOOK:
        draft.loading= true;
        return draft;
      default:
        return draft;
    }
  });
}
