import { Book } from "../../../models/book";

export interface BookReducer {
  loading: boolean
  books: Book[]
}

export interface DeletePayload {
  id: number
}

export interface SavePayload {
  id: number
  abstract: string
  title: string
  genreId: number
}
