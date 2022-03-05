const { gql } = require("apollo-server");

const typeDefs = gql`
  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
  }

  type Query {
    allRecipes: [Recipe!]!
    recipe(id: Int!): Recipe
    allBooks: [Book!]!
  }

  type Mutation {
    createRecipe(
      userId: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Recipe!
  }
`;

module.exports = typeDefs;
