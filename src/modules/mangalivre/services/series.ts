import { connection, LoggerPino, ILoggerPino } from '../../../helpers'
import { ISeries, ISerie, IChaptersSerie } from "../repositories/ISeries";

export class SeriesServices implements ISeries {
  private logger: ILoggerPino

  constructor() {
    this.logger = LoggerPino()
  }

  async seriesList(url: string, page: number, id: number): Promise<ISerie[]> {
    try {
      const { status, data } = await connection.get(`${url}?page=${page}&id_category=${id}`)
      this.logger.info('[SeriesServices] Getting series', {})

        if([200].includes(status))
          return data.series
        
      return []
    } catch (error) {
      console.log(error)
      return []
    }
  }
  async chaptersList(url: string, page: number, id: number): Promise<IChaptersSerie[]> {
    try {
      const { status, data } = await connection.get(`${url}?page=${page}&id_serie=${id}`)

        if([200].includes(status))
          return data.chapters
        
      return []
    } catch (error) {
      console.log(error)
      return []
    }
  }
}
