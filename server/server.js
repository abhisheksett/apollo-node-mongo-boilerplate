/**
* Main application file, this is entry point for API.
* Middlewares and running the server instance will be defined here.
*/
import express from 'express';
import { PORT } from './config';
import logger from './utils/logger';
import db from './config/db';
import middleware from './config/middleware';

/* creating application instance */
let app = express();

/* creating an connection to mongodb */

db.open();

/* middleware configuration*/
middleware(app);

/* starting the server instance */
app.listen(PORT, (err) => {
  if(err) {
    logger.error(`Could not start server on port: ${PORT}\n ${err}`);
  } else {
    logger.log(`Server listening on port ${PORT}`);
  }
});
