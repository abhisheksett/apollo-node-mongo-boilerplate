/**
* Schema index file, which merges all the Schemas and resolvers from the modules folder - which will
* the actual journey.

* This file will automaticall resolve all the Schema & Resolvers present in the modules directory
* and merge them into single typeDefs and resolvers.

* There is a mock data resolvers added to mock the response for 'TEST' environment while running test cases.
*/

import { makeExecutableSchema , addMockFunctionsToSchema} from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import glob from 'glob';
import path from 'path';

const { NODE_ENV } = process.env;

/* Resolving all the Schemas from the modules directory */
let SchemaLocation = glob.sync('**/*.schema.js', { cwd: 'modules'});

let Schemas = SchemaLocation.map((current) => {
  return require(`../modules/${current}`).default;
});

/* Resolving all the Resolvers from the modules directory */
let ResolverLocation = glob.sync('**/*.resolver.js', { cwd: 'modules'});

let Resolvers = ResolverLocation.map((current) => {
  return require(`../modules/${current}`).default;
});

/* Merging the Schemas & Resolvers */
const typeDefs = mergeTypes([ ...Schemas ]);

if(NODE_ENV !== 'test') {
  const resolvers = mergeResolvers([ ...Resolvers ]);  
}

/**
* In 'TEST' environment resolver to only typeDefs as the resolvers will be mocked.
*/
const schema = (NODE_ENV === 'test') ? makeExecutableSchema({ typeDefs }) : makeExecutableSchema({ typeDefs, resolvers });

/* Mocking Schemas */
if(NODE_ENV === 'test') {
  addMockFunctionsToSchema({
    schema,
    mocks: {},
    preserveResolvers: true
  });
}

export default schema;
