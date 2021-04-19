export interface BookCardProps {
  title: string
  summary: string
  genre: string
  deleteItem(): void
  editItem(): void
}