import { Genre } from "../../../models/genre";
import { DeletePayload, SavePayload } from "./interfaces";

export const DELETE_GENRE = "@genre/DELETE_GENRE";
export const DELETE_GENRE_SUCCESS = "@genre/DELETE_GENRE_SUCCESS";
export const DELETE_GENRE_FAILURE = "@genre/DELETE_GENRE_FAILURE";

export const SAVE_GENRE = "@genre/SAVE_GENRE";
export const SAVE_GENRE_SUCCESS = "@genre/SAVE_GENRE_SUCCESS";
export const SAVE_GENRE_FAILURE = "@genre/SAVE_GENRE_FAILURE";

export const EDIT_GENRE = "@genre/EDIT_GENRE";
export const EDIT_GENRE_SUCCESS = "@genre/EDIT_GENRE_SUCCESS";
export const EDIT_GENRE_FAILURE = "@genre/EDIT_GENRE_FAILURE";

export function deleteGenreRequest({ id }: Genre) {
  return {
    type: DELETE_GENRE,
    payload: { id },
  };
}
export function deleteGenreSuccess({ id }: DeletePayload) {
  return {
    type: DELETE_GENRE_SUCCESS,
    payload: { id },
  };
}
export function deleteGenreFailure() {
  return {
    type: DELETE_GENRE_FAILURE,
  };
}



export function saveGenreRequest({ title, abstract, genreId }: Genre) {
  return {
    type: SAVE_GENRE,
    payload: { title, abstract, genreId },
  };
}
export function saveGenreSuccess({ id, title, abstract, genreId }: SavePayload) {
  return {
    type: SAVE_GENRE_SUCCESS,
    payload: { id, title, abstract, genreId },
  };
}
export function saveGenreFailure() {
  return {
    type: SAVE_GENRE_FAILURE,
  };
}


export function editGenreRequest({id, title, abstract, genreId }: Genre) {
  return {
    type: EDIT_GENRE,
    payload: {id,  title, abstract, genreId },
  };
}
export function editGenreSuccess({ id, title, abstract, genreId }: SavePayload) {
  return {
    type: EDIT_GENRE_SUCCESS,
    payload: { id, title, abstract, genreId },
  };
}
export function editGenreFailure() {
  return {
    type: EDIT_GENRE_FAILURE,
  };
}