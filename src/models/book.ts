import { Genre } from "./genre";

export interface Book {
  id: string
  title: string
  abstract: string
  genreId: number
}