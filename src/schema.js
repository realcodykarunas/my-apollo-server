const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: Int!
    url: String!
    slug: String!
  }

  type Query {
    allLinks: [Link!]!
  }

  type Mutations {
    createLink(url: String!, slug: String!): Link!
  }
`;

module.exports = typeDefs;
