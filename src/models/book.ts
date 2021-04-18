import { Genre } from "./genre";

export interface Book {
  id: number
  title: string
  abstract: string
  image: string
  genre: Genre
}