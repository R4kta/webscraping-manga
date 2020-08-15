interface ICategories{
  id_category: number
  name: string
  link: string
}

interface IMenuTags {
  initial: string
}

export interface ISerie {
  id_serie: number
  name: string
  chapters: number
  description: string
  cover: string
  author: string
  artist: string
  menu_tag: IMenuTags
  score: string
  votes: number
  categories: ICategories[]
  link: string
  is_complete: boolean
}

export interface IChaptersSerie {
  chapter_name: string
  date: string
  date_created: string
  id_chapter: number
  id_serie:number
  name: string
  number: string
  releases: {
    id_release: number
    link: string
    scanlators: Array<any>[]
    views: string
  }
}

export interface ISeries {
  seriesList(url: string, page: number, id: number): Promise<ISerie[]>
  chaptersList(url: string, page: number, id: number): Promise<IChaptersSerie[]>
}