import produce from 'immer';
import { Genre } from '../../../models/genre';
import { 
  GET_GENRES_REQUEST,
  DELETE_GENRE_SUCCESS, 
  SAVE_GENRE, 
  SAVE_GENRE_SUCCESS, 
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE
} from './actions';
import { GenreReducer } from "./interfaces";

const INITIAL_STATE: GenreReducer = {
  loading: false,
  genres: [],
}

export default function genre(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case GET_GENRES_REQUEST:
        draft.loading = true;
        return draft;
      case GET_GENRES_SUCCESS:
        draft.loading = false;
        draft.genres = action.payload.genres;
        return draft;
      case GET_GENRES_FAILURE:
          draft.loading = false;
          return draft;
      case SAVE_GENRE:
        draft.loading = true;
        return draft;
      case DELETE_GENRE_SUCCESS:
        const index = state.genres.findIndex((e: Genre)=>e.id==action.payload.id);
        let newList = [...state.genres];
        newList.splice(index, 1);
        draft.genres = newList;
        draft.loading = false;
        return draft;
      case SAVE_GENRE_SUCCESS:
        draft.genres = [...state.genres, {
          name: action.payload.name,
          id: action.payload.id
        }]
        draft.loading = false;
        return draft;
      default:
        return draft;
    }
  });
}