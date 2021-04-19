import produce from 'immer';
import { Book } from '../../../models/book';
import { DELETE_BOOK_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, SAVE_BOOK, SAVE_BOOK_SUCCESS } from './actions';
import { BookReducer } from './interfaces';

const INITIAL_STATE: BookReducer = {
  loading: false,
  books: []
};

export default function book(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_BOOKS_REQUEST:
        draft.loading = true;
        return draft;
      case GET_BOOKS_SUCCESS:
        draft.loading = false;
        draft.books = action.payload.books;
        return draft;
      case GET_BOOKS_FAILURE:
          draft.loading = false;
          return draft;
      case SAVE_BOOK:
        draft.loading = true;
        return draft;
      case DELETE_BOOK_SUCCESS:
        const index = state.books.findIndex((e: Book)=>e.id==action.payload.id);
        let newList = [...state.books];
        newList.splice(index, 1);
        draft.books = newList;
        return draft;
      case SAVE_BOOK_SUCCESS:
        draft.books = [...state.books, {
          summary: action.payload.summary,
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
