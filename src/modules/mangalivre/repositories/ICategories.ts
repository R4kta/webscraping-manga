export interface ICategory {
  id_category: number
  name: string
  link: string
}

export interface ICategories {
  list(url: string): Promise<ICategory[]>
}