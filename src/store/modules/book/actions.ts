import { Book } from "../../../models/book";
import { DeletePayload,  SavePayload } from "./interfaces";

export const DELETE_BOOK = "@book/DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "@book/DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "@book/DELETE_BOOK_FAILURE";

export const SAVE_BOOK = "@book/SAVE_BOOK";
export const SAVE_BOOK_SUCCESS = "@book/SAVE_BOOK_SUCCESS";
export const SAVE_BOOK_FAILURE = "@book/SAVE_BOOK_FAILURE";

export const EDIT_BOOK = "@book/EDIT_BOOK";
export const EDIT_BOOK_SUCCESS = "@book/EDIT_BOOK_SUCCESS";
export const EDIT_BOOK_FAILURE = "@book/EDIT_BOOK_FAILURE";

export function deleteBookRequest({ id }: Book) {
  return {
    type: DELETE_BOOK,
    payload: { id },
  };
}
export function deleteBookSuccess({ id }: DeletePayload) {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload: { id },
  };
}
export function deleteBookFailure() {
  return {
    type: DELETE_BOOK_FAILURE,
  };
}



export function saveBookRequest({ title, abstract, genreId }: Book) {
  return {
    type: SAVE_BOOK,
    payload: { title, abstract, genreId },
  };
}
export function saveBookSuccess({ id, title, abstract, genreId }: SavePayload) {
  return {
    type: SAVE_BOOK_SUCCESS,
    payload: { id, title, abstract, genreId },
  };
}
export function saveBookFailure() {
  return {
    type: SAVE_BOOK_FAILURE,
  };
}


export function editBookRequest({id, title, abstract, genreId }: Book) {
  return {
    type: EDIT_BOOK,
    payload: {id,  title, abstract, genreId },
  };
}
export function editBookSuccess({ id, title, abstract, genreId }: SavePayload) {
  return {
    type: EDIT_BOOK_SUCCESS,
    payload: { id, title, abstract, genreId },
  };
}
export function editBookFailure() {
  return {
    type: EDIT_BOOK_FAILURE,
  };
}