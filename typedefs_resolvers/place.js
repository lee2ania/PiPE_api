const { gql } = require('apollo-server');
const dbworks = require('');

const typeDefs = gql`
    type Place {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
`

const resolvers = {
    // Query : {
    //     place: (parent, args) => dbworks.getList(args)
    // },
    // Mutation : {
    //     deletePlace : (parent, args) => dbworks 
    // }
}

module.exports = {
    typeDefs : typeDefs,
    resolvers : resolvers
}