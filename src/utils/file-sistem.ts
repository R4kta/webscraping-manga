import * as fs from "fs";
import { isEqual } from "lodash";
import { ICategory } from "../modules/mangalivre/repositories";
import { LoggerPino } from "../helpers";

const Logger = LoggerPino();

const existsJson = (path: string): any => {
  return fs.existsSync(path);
};

const openJson = async (path: string): Promise<any> => {
  return new Promise(resolve => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err)
        return Logger.debug("Não foi possivel ler o arquivo de Categorias");
      resolve({data: JSON.parse(data)});
    });
  });
};

const compareJson = (list: ICategory[], compare: ICategory[]): boolean => {
  return isEqual(list, compare);
};

const createOrUpdateJson = async (
  path: string,
  list: ICategory[],
): Promise<any> => {
  return new Promise(resolve => {
    fs.writeFile(path, JSON.stringify(list, null, 2), err => {
      if (err)
        return Logger.debug(
          "Não foi possivel atualizar ou criar o Json de Categorias",
        );

      Logger.info("Json de Categorias Atualizar ou Criada com Sucesso", {});
      resolve();
    });
  });
};

export { existsJson, openJson, compareJson, createOrUpdateJson };
