import { Genre } from "./genre";

export interface Book {
  id: string
  title: string
  summary: string
  genreId: number
}