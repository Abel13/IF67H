import { Genre } from "../../../models/genre";

export interface GenreReducer {
  loading?: boolean
  genres: Genre[]
}

export interface DeletePayload {
  id: string
}

export interface SavePayload {
  id: string
  name: string
}
