INSERT INTO restaurant_types(type_name, type_image) VALUES('FAST FOODS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYscBQOdoHoNZbk3sk0bt4QdVRGrhawT5FuQ&usqp=CAU');

INSERT INTO restaurant_types(type_name, type_image) VALUES('MILLIY TAOMLAR', 'https://i.ytimg.com/vi/6cX37tza2S0/maxresdefault.jpg');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('Soy', 'https://media-cdn.tripadvisor.com/media/photo-s/0c/fe/db/38/restaurant-soy.jpg', '3b8ece65-ec63-4e69-9ffc-44b1a8530a41');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('Rayxon', 'https://media-cdn.tripadvisor.com/media/photo-s/11/0b/61/ac/rayhon-milliyy-taomlar.jpg', '3b8ece65-ec63-4e69-9ffc-44b1a8530a41');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('Besh Qozon', 'https://media.express24.uz/r/600/600/upload/iblock/bad/bada5f000f2add106357ecf64f63221b.JPEG', '3b8ece65-ec63-4e69-9ffc-44b1a8530a41');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('EVOS', 'https://i.ytimg.com/vi/zx3t6hFCS_I/maxresdefault.jpg', 'f33dc36d-e4f9-4f3c-98a9-63c8597a8f8a');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('Oqtepa Lavash', 'https://oqtepalavash.uz/static/media/oqtepa_logo.10f1ede4.svg', 'f33dc36d-e4f9-4f3c-98a9-63c8597a8f8a');

INSERT INTO restaurants(restaurant_name, restaurant_image, type_id) VALUES('KFC', 'https://static.euronews.com/articles/stories/06/35/03/60/1024x538_cmsv2_795d8502-7d50-522b-8fac-4123b24794c3-6350360.jpg', 'f33dc36d-e4f9-4f3c-98a9-63c8597a8f8a');

INSERT INTO restaurant_branches(branch_name, branch_image, restaurant_id) VALUES('KFC Yunusobod', 'https://static.euronews.com/articles/stories/06/35/03/60/1024x538_cmsv2_795d8502-7d50-522b-8fac-4123b24794c3-6350360.jpg', '1b8836c9-50e2-4864-a517-4907c0e3125f');
INSERT INTO restaurant_branches(branch_name, branch_image, restaurant_id) VALUES('KFC Xalqlar do`stligi', 'https://static.euronews.com/articles/stories/06/35/03/60/1024x538_cmsv2_795d8502-7d50-522b-8fac-4123b24794c3-6350360.jpg', '1b8836c9-50e2-4864-a517-4907c0e3125f');
INSERT INTO branch_meals(meal_name, meal_price, meal_image, branch_id) VALUES('Shurva', '17 000', 'https://abasayyoh.com/uploaded_images/pages/1/338.jpg', '5d58231f-d1c4-45b1-986d-3b08b1be842d'); 