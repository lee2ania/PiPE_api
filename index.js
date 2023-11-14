const { ApolloServer } = require('apollo-server');

const quries = require('./typedefs_resolvers/_queries');
const mutations = require('./typedefs_resolvers/_mutations');


const typeDefs = [
    quries,
    mutations,  

]

const resolvers = [


]

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`🚀 server ready at ${url}`)
});