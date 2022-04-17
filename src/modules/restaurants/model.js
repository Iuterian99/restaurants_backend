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

const BRANCH_MEALS = `
SELECT 
  *
FROM 
  branch_meals
WHERE 
  branch_id = $1
`;

const MEAL_ORDERS = `
SELECT 
  *
FROM 
  meal_orders
WHERE 
  meal_id = $1
`;

const NEW_RESTAURANTS = `
INSERT INTO restaurants     
  (restaurant_name, restaurant_image, type_id)
VALUES
  ($1, $2, $3) 
RETURNING *
`;

const DELETE_RESTAURANTS = `
DELETE FROM
 restaurants     
WHERE 
  restaurant_id = $1
RETURNING *
`;

const restaurant_types = () => fetchAll(RESTAURANT_TYPES);
const restaurants = (type_id) => fetchAll(RESTAURANTS, type_id);
const restaurant_branches = (restaurant_id) =>
  fetchAll(RESTAURANT_BRANCHES, restaurant_id);

const branch_meals = (branch_id) => fetchAll(BRANCH_MEALS, branch_id);
const meal_orders = (meal_id) => fetchAll(MEAL_ORDERS, meal_id);
const new_restaurant = (restaurant_name, restaurant_image, type_id) =>
  fetchAll(NEW_RESTAURANTS, restaurant_name, restaurant_image, type_id);
const delete_restaurant = (restaurant_id) =>
  fetchAll(DELETE_RESTAURANTS, restaurant_id);

module.exports = {
  restaurant_types,
  restaurants,
  restaurant_branches,
  branch_meals,
  meal_orders,
  new_restaurant,
  delete_restaurant,
};
