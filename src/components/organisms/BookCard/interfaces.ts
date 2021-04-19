export interface BookCardProps {
  title: string
  abstract: string
  genre: string
  deleteItem(): void
  editItem(): void
}