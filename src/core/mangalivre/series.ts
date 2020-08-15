import { IMangaLivre } from "../../modules/mangalivre/provider";
import { existsJson, openJson, createOrUpdateJson } from '../../utils'
import { ISeries, ICategory } from "../../modules/mangalivre/repositories";

export const Series = (MangaLivre: IMangaLivre) => {
  const pathCategories = `${__dirname}/../../data/categories-mangalivre.json`;
  const url = 'categories/series_list.json'
  let page = 1;
  const start = async () => {
    if(existsJson(pathCategories)) {
      const { data } = await openJson(pathCategories);
      if (data.length > 0) {
        await mapCategories(data)
      } else {
        return new Error('Primeiro precisa buscar as Categorias')
      }
    }
  }
  const mapCategories = async (values: ICategory[]): Promise<ISeries[]> => {
    return new Promise(async (reject) => {
      for (const value of values) {
        const series = await MangaLivre.series(url, page, value.id_category)

        while(series.length > 0 && series[0] != null) {
          page++;
          const seriesOfCategoryNext = await MangaLivre.series(url, page, value.id_category)
          series.push(...seriesOfCategoryNext)
            if(seriesOfCategoryNext.length === 0) {
              page = 1;
              break;
            }
        }
        await createOrUpdateJson(`${__dirname}/../../data/series/${value.name}-mangalivre.json`, series)
    }
  })
}
  return {
     start
  }
}

// 'categories/series_list.json',1,23