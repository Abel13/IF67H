import { Genre } from "../../../models/genre";

export interface BookFormValues {
  title: string
  abstract: string
  genre: Genre
}