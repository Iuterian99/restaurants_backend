const { fetch, fetchAll } = require("../../lib/postgres");

const RESTAURANT_TYPES = `
SELECT 
  *
FROM 
  restaurant_types
`;

const RESTAURANTS = `
SELECT 
  *
FROM 
  restaurants
WHERE 
  type_id = $1
`;

const RESTAURANT_BRANCHES = `
SELECT 
  *
FROM 
  restaurant_branches
WHERE 
  restaurant_id = $1
`;

const restaurant_types = () => fetchAll(RESTAURANT_TYPES);
const restaurants = (type_id) => fetchAll(RESTAURANTS, type_id);
const restaurant_branches = (restaurant_id) =>
  fetchAll(RESTAURANT_BRANCHES, restaurant_id);

module.exports = {
  restaurant_types,
  restaurants,
  restaurant_branches,
};
