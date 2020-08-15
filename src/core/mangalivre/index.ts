import { Categories } from "./categories"
import { Series } from "./series"
import { MangaLivreModule } from '../../modules'

export const MangaLivreCore = () => {
  const MangaLivre = MangaLivreModule()
  const category = Categories(MangaLivre)
  const series = Series(MangaLivre)
  
  const categoriesStart = async () => {
    await category.start()
  }

  const seriesStart = async () => {
    await series.start()
  }

  const chaptersStart = () => {
    
  }

  const imagesChaptersStart = () => {

  }

  return {
    categoriesStart,
    seriesStart,
    chaptersStart,
    imagesChaptersStart
  }
}