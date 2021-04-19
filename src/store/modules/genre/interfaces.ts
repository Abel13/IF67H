import { Genre } from "../../../models/genre";

export interface GenreReducer {
  loading: boolean
  genres: Genre[]
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
