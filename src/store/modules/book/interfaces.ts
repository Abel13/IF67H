import { Book } from "../../../models/book";

export interface BookReducer {
  loading: boolean
  books: Book[]
}

export interface DeletePayload {
  id: string
}

export interface SavePayload {
  id: string
  abstract: string
  title: string
  genreId: number
}
