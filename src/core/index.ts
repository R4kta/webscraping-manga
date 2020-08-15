import * as prompts from "prompts";
import { MangaLivreCore } from "./mangalivre";

export const core = () => {
  const MangaLivre = MangaLivreCore();
  const start = async () => {
    console.log("> [core] Starting...");

    const response = await prompts({
      type: "select",
      name: "value",
      message: "Qual função quer executar?",
      choices: [
        { title: "Categories", value: "Categories" },
        { title: "Series", value: "Series" },
        // { title: 'Chapters', value: 'Chapters' },
        // { title: 'Mangas', value: 'Mangas' },
      ],
    });

    switch (response.value) {
      case "Categories":
        await MangaLivre.categoriesStart();
        break;
      case "Series":
        await MangaLivre.seriesStart();
        break;
      // case 'Chapters':
      //   const chapters = await MangaLivre.chapters;
      //   return chapters;
      // case 'Mangas':
      //   const mangas = await MangaLivre.imagesChapters;
      //   return mangas;
      default:
        console.log("> [core] Sua escolha não está disponível. :(");
        break;
    }
    console.log("> [core] Successfully...");
  };

  const stop = () => {
    console.log("> [core] Stoping...");
  };

  return {
    start,
    stop,
  };
};
