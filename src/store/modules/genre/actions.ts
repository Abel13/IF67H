import { Genre } from "../../../models/genre";
import { DeletePayload, GenreReducer, SavePayload } from "./interfaces";

export const GET_GENRES_REQUEST = "@genre/GET_GENRES_REQUEST";
export const GET_GENRES_SUCCESS = "@genre/GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "@genre/GET_GENRES_FAILURE";

export const DELETE_GENRE = "@genre/DELETE_GENRE";
export const DELETE_GENRE_SUCCESS = "@genre/DELETE_GENRE_SUCCESS";
export const DELETE_GENRE_FAILURE = "@genre/DELETE_GENRE_FAILURE";

export const SAVE_GENRE = "@genre/SAVE_GENRE";
export const SAVE_GENRE_SUCCESS = "@genre/SAVE_GENRE_SUCCESS";
export const SAVE_GENRE_FAILURE = "@genre/SAVE_GENRE_FAILURE";

export const EDIT_GENRE = "@genre/EDIT_GENRE";
export const EDIT_GENRE_SUCCESS = "@genre/EDIT_GENRE_SUCCESS";
export const EDIT_GENRE_FAILURE = "@genre/EDIT_GENRE_FAILURE";


export function getGenresRequest() {
  return {
    type: GET_GENRES_REQUEST
  };
}
export function getGenresSuccess({ genres }: GenreReducer) {
  return {
    type: GET_GENRES_SUCCESS,
    payload: { genres }
  };
}
export function getGenresFailure() {
  return {
    type: GET_GENRES_FAILURE
  };
}


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

export function saveGenreRequest({ name }: Genre) {
  return {
    type: SAVE_GENRE,
    payload: { name },
  };
}
export function saveGenreSuccess({ id, name }: SavePayload) {
  return {
    type: SAVE_GENRE_SUCCESS,
    payload: { id, name },
  };
}
export function saveGenreFailure() {
  return {
    type: SAVE_GENRE_FAILURE,
  };
}


export function editGenreRequest({id, name }: Genre) {
  return {
    type: EDIT_GENRE,
    payload: { id, name },
  };
}
export function editGenreSuccess({ id, name }: SavePayload) {
  return {
    type: EDIT_GENRE_SUCCESS,
    payload: { id, name },
  };
}
export function editGenreFailure() {
  return {
    type: EDIT_GENRE_FAILURE,
  };
}