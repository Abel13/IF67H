import { Book } from "../../../models/book";

export interface HomeReducer {
  loading: boolean
  books: Book[]
}