/**
* This is an integration server for running test cases, this server will not interrupt the ongoing
* dev / staging / production server.
*/
import express from 'express';
import { graphql } from 'graphql';
import request from 'request-promise';

import Schema from '../schemas';
import { TEST_PORT } from '../config';
import logger from './logger';


/**
* Function to start the integration server
* @method start
* @param done - resolver callback
*/
function start(done) {
  const app = express();

  app.get('/graphql', (req, res) => {
    const graphqlQuery = req.query.graphqlQuery;
    if (!graphqlQuery) {
      logger.error(`You must provide a query`);
      return res.status(500).send('You must provide a query');
    }

    return graphql(Schema, graphqlQuery)
      .then(response => {
        return response.data;
      })
      .then((data) => res.json(data))
      .catch((err) => console.error(err));
  });

  return app.listen(TEST_PORT, () => {
    logger.log(`Test server started on port: ${TEST_PORT}`);
    done();
  });

};

/**
* Function to stop the integration server
* @method stop
* @param app - application instance
* @param done - resolver callback
*/
function stop(app, done) {
  app.close();
  done();
};

/**
* Function for making request to grqphql
* @method graphqlQuery
* @param app - application instance
* @param query - graphql query
*/
function graphqlQuery(app, query) {
  return request({
    baseUrl : `http://localhost:${TEST_PORT}`,
    uri : '/graphql',
    qs : {
      graphqlQuery : query
    },
    resolveWithFullResponse: true,
    json: true
  })
};

module.exports = {
  start,
  stop,
  graphqlQuery
};
