import produce from 'immer';
import { GenreReducer } from "./interfaces";

const INITIAL_STATE: GenreReducer = {
  loading: false,
  genres: [
    {
      id: 0,
      name: "Ação"
    },
    {
      id: 1,
      name: "Fantasia"
    },
  ],
}

export default function genre(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
}