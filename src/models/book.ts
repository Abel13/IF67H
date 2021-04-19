import { Genre } from "./genre";

export interface Book {
  id: number
  title: string
  abstract: string
  genreId: number
}