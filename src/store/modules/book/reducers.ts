import produce from 'immer';
import { Book } from '../../../models/book';
import { DELETE_BOOK_SUCCESS, SAVE_BOOK_SUCCESS } from './actions';
import { BookReducer } from './interfaces';

const INITIAL_STATE: BookReducer = {
  loading: false,
  books: []
};

export default function book(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_BOOK_SUCCESS:
        const index = state.books.findIndex((e: Book)=>e.id==action.payload.id);
        let newList = [...state.books];
        newList.splice(index, 1);
        draft.books = newList;
        return draft;
      case SAVE_BOOK_SUCCESS:
        draft.books = [...state.books, {
          abstract: action.payload.abstract,
          title: action.payload.title,
          genreId: action.payload.genreId,
          id: action.payload.id
        }]
        return draft;
      default:
        return state;
    }
  });
}
