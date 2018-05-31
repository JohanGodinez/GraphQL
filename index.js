import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

// import typeDefs from './schemas'
// import resolvers from './resolvers'
import models from './models'

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema,
    context: {
        models
    }
 }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

mongoose.connect('mongodb://localhost/react-test').then(
    () => {
        console.log('conectado a mongodb')
        app.listen(PORT, () =>{
            console.log('starting server graphql')
        });
    }
);
