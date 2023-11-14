import { ApolloServer, gql } from "apollo-server"; 

const resolvers = {
    Query: {
        getJobList
        getJobList(country: String!, category: String!): [Job]
        getPlaceList(country: String!, category: String!): [Place]
        getInsuranceList(country: String!, category: String!): [Insurance]
        getMoneyList(country: String!, category: String!): [Money]
        // moneyList(root, args){
        //     console.log(`age : ${args}`);
        //     return null;
        // },
        // placeList(){
        //     return resolver_placeList;
        // },
        place(root, { title }){
            console.log(`args : ${title}`);
            return resolver_placeList.find((place) => place.title == "title 2");
        }
    },
    Mutation : {
        postMoney : (parent, args, context, info) => {
            return [Money]
        },
        postJob : (parent, args, context, info) => {

        },
        postPlace : (parent, args, context, info) => {

        },
        postInsurance : (parent, args, context, info) => {

        },

        deleteMoney : (parent, args, context, info) => {

        },
        deleteJob : (parent, args, context, info) => {

        },
        deletePlace : (parent, args, context, info) => {

        },
        deleteInsurance : (parent, args, context, info) => {

        },

        deleteTimePassedPost: (parent, args, context, info) => {

        },

        updateMoney : (parent, args, context, info) => {

        },
        updateJob : (parent, args, context, info) => {

        },
        updatePlace : (parent, args, context, info) => {

        },
        updateInsurance : (parent, args, context, info) => {
            
        }


    }
};

const typeDefs = gql `
    type Money {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
    type Job {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
    type Place {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
    type Insurance {
        id: ID
        country: String
        category: String
        createdDate: String
        title: String
    }
    type Query {
        getJobList(country: String!, category: String!): [Job]
        getPlaceList(country: String!, category: String!): [Place]
        getInsuranceList(country: String!, category: String!): [Insurance]
        getMoneyList(country: String!, category: String!): [Money]
    }
    type Mutation {
        postMoney(title: String!): Money
        postJob(title: String!): Job
        postPlace(title: String!): Place
        postInsurance(title: String!): Insurance

        deleteMoney(title: String!, id: ID!): Boolean
        deleteJob(title: String!, id: ID!): Boolean
        deletePlace(title: String!, id: ID!): Boolean
        deleteInsurance(title: String!, id: ID!): Boolean

        deleteTimePassedPost(today : String!) : [T]

        updateMoney(title: String!, id: ID!, country: String!, category: String!) : Money
        updateJob(title: String!, id: ID!, country: String!, category: String!) : Job
        updatePlace(title: String!, id: ID!, country: String!, category: String!) : Place
        updateInsurance(title: String!, id: ID!, country: String!, category: String!) : Insurance

        

    }

`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
   console.log(`Running on ${url}`); 
});