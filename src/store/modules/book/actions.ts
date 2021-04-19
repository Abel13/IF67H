import { Book } from "../../../models/book";
import { BookReducer, DeletePayload,  SavePayload } from "./interfaces";

export const GET_BOOKS_REQUEST = "@book/GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "@book/GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "@book/GET_BOOKS_FAILURE";

export const DELETE_BOOK = "@book/DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "@book/DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "@book/DELETE_BOOK_FAILURE";

export const SAVE_BOOK = "@book/SAVE_BOOK";
export const SAVE_BOOK_SUCCESS = "@book/SAVE_BOOK_SUCCESS";
export const SAVE_BOOK_FAILURE = "@book/SAVE_BOOK_FAILURE";

export const EDIT_BOOK = "@book/EDIT_BOOK";
export const EDIT_BOOK_SUCCESS = "@book/EDIT_BOOK_SUCCESS";
export const EDIT_BOOK_FAILURE = "@book/EDIT_BOOK_FAILURE";


export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST
  };
}
export function getBooksSuccess({ books }: BookReducer) {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: { books }
  };
}
export function getBooksFailure() {
  return {
    type: GET_BOOKS_FAILURE
  };
}


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



export function saveBookRequest({ title, summary, genreId }: Book) {
  return {
    type: SAVE_BOOK,
    payload: { title, summary, genreId },
  };
}
export function saveBookSuccess({ id, title, summary, genreId }: SavePayload) {
  return {
    type: SAVE_BOOK_SUCCESS,
    payload: { id, title, summary, genreId },
  };
}
export function saveBookFailure() {
  return {
    type: SAVE_BOOK_FAILURE,
  };
}


export function editBookRequest({id, title, summary, genreId }: Book) {
  return {
    type: EDIT_BOOK,
    payload: {id,  title, summary, genreId },
  };
}
export function editBookSuccess({ id, title, summary, genreId }: SavePayload) {
  return {
    type: EDIT_BOOK_SUCCESS,
    payload: { id, title, summary, genreId },
  };
}
export function editBookFailure() {
  return {
    type: EDIT_BOOK_FAILURE,
  };
}