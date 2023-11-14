const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getJobList(country: String!, category: String!): [Job]
        getPlaceList(country: String!, category: String!): [Place]
        getInsuranceList(country: String!, category: String!): [Insurance]
        getMoneyList(country: String!, category: String!): [Money]
    }
`;

module.exports = typeDefs