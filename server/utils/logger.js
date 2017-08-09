/**
* Logger instance for saving the application debug logs
* @method - error, warn, log
*/
import logger from 'logger';
import { LOGS } from '../config';
import fs from 'fs';

/* checking if the log file exists already, if not create one */
if(!fs.existsSync(LOGS)) {
  fs.openSync(LOGS, 'a+');
}

let logInstance = logger.createLogger(LOGS);

module.exports = {

  /**
  * Function to log error messages
  * @method error
  * @param message
  */
  error(message) {
    console.error(message);
    logInstance.error(message);
  },

  /**
  * Function to log warn messages
  * @method warn
  * @param warn
  */
  warn(message) {
    console.warn(message);
    logInstance.warn(message);
  },

  /**
  * Function to log messages
  * @method log
  * @param log
  */
  log(message) {
    console.log(message);
    logInstance.info(message);
  }

};
