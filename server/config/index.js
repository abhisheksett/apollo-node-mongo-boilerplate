/**
* Configuration file for the application.
*/

/* checking for environment */
const ENV = process.env.NODE_ENV || 'development';

/* setting the log location based on the environment */
const LOG_LOCATION = `logs/${ENV}.log`;

/* setting the mongodb URL based on the environment */
const DB_URL = (ENV === 'development') ? 'mongodb://0.0.0.0:27017/squad' : '<server-mongoURL>';

module.exports = {
  DB_URL,
  PORT: 3000, // server port.
  TEST_PORT: 9000, // integration server port for test cases.
  LOGS: LOG_LOCATION
};
