const { gql } = require('apollo-server');
const dbworks = require('');

const typeDefs = gql`
    type Insurance {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
`

const resolvers = {
    // Query : {
    //     insurance: (parent, args) => dbworks.getList(args)
    // },
    // Mutation : {
    //     deleteInsurance : (parent, args) => dbworks 
    // }
}

module.exports = {
    typeDefs : typeDefs,
    resolvers : resolvers
}