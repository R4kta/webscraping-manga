import { connection } from '../../../helpers'
import { ICategories, ICategory } from "../repositories/ICategories";

export class CategoriesServices implements ICategories {
  constructor() {}

  async list(url: string): Promise<ICategory[]> {
    const { status, data } = await connection.get(`${url}`);
    if([200].includes(status)) {
      return data.categories_list
    }
    return []
  } 
}