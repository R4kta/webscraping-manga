import { CategoriesServices, SeriesServices } from "./services";
import { MangaLivreProvider } from "./provider";

export const MangaLivreModule = () => {
  const categoriesService = new CategoriesServices();
  const seriesService = new SeriesServices();
  return new MangaLivreProvider(categoriesService, seriesService);
};
