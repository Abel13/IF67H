import { Genre } from "../../../models/genre";

export interface BookFormValues {
  title: string
  summary: string
  genre: Genre
}