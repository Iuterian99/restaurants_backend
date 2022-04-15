const model = require("./model");

module.exports = {
  Query: {
    restaurant_types: async () => {
      return await model.restaurant_types();
    },

    restaurants: async (_, { type_id }) => {
      return await model.restaurants(type_id);
    },

    restaurant_branches: async (_, { restaurant_id }) => {
      return await model.restaurant_branches(restaurant_id);
    },
  },
};
