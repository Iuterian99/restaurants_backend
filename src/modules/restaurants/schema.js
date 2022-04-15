const { gql } = require("apollo-server-express");

module.exports = gql`
  type Restaurant_Types {
    type_id: ID!
    type_name: String
    type_image: String
  }

  type Restaurants {
    restaurant_id: ID!
    restaurant_name: String
    restaurant_image: String
    type_id: ID!
  }

  type Restaurant_Branches {
    branch_id: ID!
    branch_name: String
    branch_image: String
    restaurant_id: ID!
  }

  type Query {
    restaurant_types: [Restaurant_Types!]!
    restaurants(type_id: ID!): [Restaurants!]!
    restaurant_branches(restaurant_id: ID!): [Restaurant_Branches]
  }
`;
