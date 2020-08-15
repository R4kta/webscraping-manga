import { IMangaLivre } from "../../modules/mangalivre/provider";
import { existsJson, openJson, compareJson, createOrUpdateJson } from '../../utils'

export const Categories = (MangaLivre: IMangaLivre) => {
  const path = `${__dirname}/../../data/categories-mangalivre.json`;

  const start = async () => {
    const list = await MangaLivre.categories("categories/categories_list.json");

    if (list !== undefined) {

      if (existsJson(path)) {
        const { data } = await openJson(path);

        if (data.length > 0) {
          if (!compareJson(data, list))
            return await createOrUpdateJson(path, list);
        }

        return await createOrUpdateJson(path, list);
      } else {
        return await createOrUpdateJson(path, list);
      }
    }
  };
  return {
    start,
  };
};
