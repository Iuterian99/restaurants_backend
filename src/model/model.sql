CREATE TABLE restaurant_types(
type_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
type_name varchar(255) NOT NULL,
type_image text
)

CREATE TABLE restaurants(
restaurant_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
restaurant_name varchar(255) NOT NULL,
restaurant_image text,
type_id uuid references restaurant_types(type_id)
);

CREATE TABLE restaurant_branches(
  branch_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  branch_name varchar(255) NOT NULL,
  branch_image text,
  restaurant_id uuid references restaurants(restaurant_id)
);

CREATE TABLE branch_meals(
  meal_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  meal_name varchar(255) NOT NULL,
  meal_price varchar(255) NOT NULL,
  meal_image text,
  branch_id uuid references restaurant_branches(branch_id)
);
