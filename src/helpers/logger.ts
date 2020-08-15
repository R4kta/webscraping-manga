import * as Pino from 'pino'

export interface ILoggerPino {
  debug(message: string): any; 
  info(message: string, params: Object): any;
}

export const LoggerPino = () => {

  const logger = Pino({ level: process.env.LOG_LEVEL || 'info' });

  const debug = (message: string): any => {
    logger.debug(message)
  }
  
  const info =(message: string, params: Object): any => {
    logger.info(message, params)
  }

  return {
    debug,
    info
  }
}
