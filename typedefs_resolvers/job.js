const { gql } = require('apollo-server');
const dbworks = require('');

const typeDefs = gql`
    type Job {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
`

const resolvers = {
    // Query : {
    //     job: (parent, args) => dbworks.getList(args)
    // },
    // Mutation : {
    //     deleteJob : (parent, args) => dbworks 
    // }
}

module.exports = {
    typeDefs : typeDefs,
    resolvers : resolvers
}