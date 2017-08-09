/**
* mongodb connection setup
* @method - open - creates a mongodb connection
* @method - close - closes the existing mongodb connection
**/
import mongoose from 'mongoose';
import { DB_URL } from './index';
import logger from '../utils/logger';

module.exports = {

  /**
  * Creates the mongodb connection
  * @method open
  */
  open() {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);

    mongoose.connection
      .once('open', () => logger.log(`Connected to MongoDB`))
      .on('error', err => logger.error(`Failed to connect to MongoDB: ${err}`));
  },

  /**
  * Closing the existing MongoDB connection
  * @method close
  */
  close() {
    mongoose.connection.close()
  }

};
