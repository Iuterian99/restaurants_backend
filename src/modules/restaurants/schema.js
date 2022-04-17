const { gql } = require("apollo-server-express");

module.exports = gql`
  type Restaurant_Types {
    type_id: ID!
    type_name: String
    type_image: String
  }

  type Restaurants {
    restaurant_id: ID!
    restaurant_name: String!
    restaurant_image: String
    type_id: ID!
  }

  type Restaurant_Branches {
    branch_id: ID!
    branch_name: String!
    branch_image: String
    restaurant_id: ID!
  }

  type Branch_Meals {
    meal_id: ID!
    meal_name: String!
    meal_price: String!
    meal_image: String
    branch_id: ID!
  }

  type Meal_Orders {
    order_id: ID!
    order_values: Int
    client_name: String!
    client_number: String
    meal_id: ID!
  }

  type Query {
    restaurant_types: [Restaurant_Types!]!
    restaurants(type_id: ID!): [Restaurants!]!
    restaurant_branches(restaurant_id: ID!): [Restaurant_Branches!]!
    branch_meals(branch_id: ID!): [Branch_Meals!]!
    meal_orders(meal_id: ID!): [Meal_Orders!]!
  }

  type Mutation {
    new_restaurant(
      restaurant_name: String!
      restaurant_image: String
      type_id: ID!
    ): [Restaurants]
    delete_restaurant(restaurant_id: ID!): [Restaurants]
  }
`;
