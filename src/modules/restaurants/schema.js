const { gql } = require("apollo-server-express");

module.exports = gql`
  type Restaurant_Types {
    type_id: ID!
    type_name: String
    type_image: String
  }

  type Query {
    restaurant_types: [Restaurant_Types!]!
  }
`;
