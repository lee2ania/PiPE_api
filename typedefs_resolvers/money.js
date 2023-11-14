const { gql } = require('apollo-server');
const dbworks = require('');

const typeDefs = gql`
    type Money {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
`

const resolvers = {
    // Query : {
    //     money: (parent, args) => dbworks.getList(args)
    // },
    // Mutation : {
    //     deleteMoney : (parent, args) => dbworks 
    // }
}

module.exports = {
    typeDefs : typeDefs,
    resolvers : resolvers
}