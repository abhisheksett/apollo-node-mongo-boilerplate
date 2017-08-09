/**
* Initial test file, to check if the test environment works
*/
import request from 'request-promise';
import integrationServer from '../utils/integration-server';
import chai from 'chai';

const { expect, assert } = chai;

describe('Test dry run', () => {
  let app;

  before((done) => {
    app = integrationServer.start(done);
  });

  after(done => {
    integrationServer.stop(app, done);
  });

  it('It should pass the initial run', () => {
    assert.isOk(true, 'Test case intial run success');
  });
});
