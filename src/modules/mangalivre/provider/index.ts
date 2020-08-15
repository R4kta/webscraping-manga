import { ICategories, ISeries } from "../repositories";

export interface IMangaLivre {
  categories(url: string): Promise<any>
  series(url: string, pages: number, id: number): Promise<any>
  chapters(url: string, pages: number, id: number): Promise<any>
  imagesChapters(url: string, pages: number, id: number): Promise<any>
}

export class MangaLivreProvider implements IMangaLivre {
  constructor(
    private readonly categoriesService: ICategories,
    private readonly seriesService: ISeries,
  ) {}

  async categories(url: string): Promise<any> {
    const list = await this.categoriesService.list(url);
    return list
  }

  async series(url: string, page: number, id: number): Promise<any> {
    const list = await this.seriesService.seriesList(url, page, id);
    return list;
  }

  async chapters(url: string, page: number, id: number): Promise<any> {
    const list = await this.seriesService.chaptersList(url, page, id);
    return list;
  }

  async imagesChapters(url: string, page: number, id: number): Promise<any> {
    const list = await this.seriesService.chaptersList(url, page, id);
    return list;
  }
}

