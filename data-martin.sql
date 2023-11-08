insert into products(id, price, name, id_image)
values(1, 67000, 'Nike Air Force', default);
insert into products(id, price, name, id_image)
values(2, 53999, 'Nike Air Max SYSTM', default);
insert into products(id, price, name, id_image)
values(3, 71999, 'Jordan Max Aura 4', default);
insert into products(id, price, name, id_image)
values(4, 89999, 'Nike React Infinity Run Flyknit 3', default);
insert into products(id, price, name, id_image)
values(5, 91299, 'Nike ACG "Oregon Series" Reissue', default);
insert into products(id, price, name, id_image)
values(6, 27499, 'Nike ACG', default);
insert into products(id, price, name, id_image)
values(7, 37299, 'Nike Swoosh Phoenix', default);
insert into products(id, price, name, id_image)
values(8, 37299, 'Nike Run Stripe', default);
insert into products(id, price, name, id_image)
values(9, 93499, 'Nike Air Max 90 SE', default);
insert into products(id, price, name, id_image)
values(10, 113999, 'Flyknit Racer Next Nature', default);
insert into products(id, price, name, id_image)
values(11, 35999, 'Nike Revolution 6 NN JP', default);
insert into products(id, price, name, id_image)
values(12, 64799, 'Nike Sportswear Tech Fleece', default);

insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(1, 'airforce-perfil.webp', 'airforce-abajo.webp', 'airforce-arriba.webp', 'airforce-modelo.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(2, 'airmax-perfil.webp', 'airmax-abajo.webp', 'airmax-arriba.webp', 'airmax-modelo.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(3, 'jordan-perfil.webp', 'jordan-abajo.webp', 'jordan-arriba.webp', 'jordan-45.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(4, 'react-perfil.webp', 'react-abajo.webp', 'react-arriba.webp', 'react-45.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(5, 'reissue-central.webp', 'reissue-angle1.webp', 'reissue-angle2.webp', 'reissue-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(6, 'acg-central.webp', 'acg-angle1.webp', 'acg-angle2.webp', 'acg-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(7, 'phoenix-central.webp', 'phoenix-angle1.webp', 'phoenix-angle2.webp', 'phoenix-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(8, 'stripe-central.webp', 'stripe-angle1.webp', 'stripe-angle2.webp', 'stripe-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(9, '90-central.webp', '90-angle1.webp', '90-angle2.webp', '90-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(10, 'racer-central.webp', 'racer-angle1.webp', 'racer-angle2.webp', 'racer-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(11, 'revolution-central.webp', 'revolution-angle1.webp', 'revolution-angle2.webp', 'revolution-angle3.webp');
insert into images(id, central_image, image_angle1, image_angle2, image_angle3)
values(12, 'sportwear-central.webp', 'sportwear-angle1.webp', 'sportwear-angle2.webp', 'sportwear-angle3.webp');


UPDATE `lyonsport_db`.`products` SET `id_image` = '1' WHERE (`id` = '1');
UPDATE `lyonsport_db`.`products` SET `id_image` = '2' WHERE (`id` = '2');
UPDATE `lyonsport_db`.`products` SET `id_image` = '3' WHERE (`id` = '3');
UPDATE `lyonsport_db`.`products` SET `id_image` = '4' WHERE (`id` = '4');
UPDATE `lyonsport_db`.`products` SET `id_image` = '5' WHERE (`id` = '5');
UPDATE `lyonsport_db`.`products` SET `id_image` = '6' WHERE (`id` = '6');
UPDATE `lyonsport_db`.`products` SET `id_image` = '7' WHERE (`id` = '7');
UPDATE `lyonsport_db`.`products` SET `id_image` = '8' WHERE (`id` = '8');
UPDATE `lyonsport_db`.`products` SET `id_image` = '9' WHERE (`id` = '9');
UPDATE `lyonsport_db`.`products` SET `id_image` = '10' WHERE (`id` = '10');
UPDATE `lyonsport_db`.`products` SET `id_image` = '11' WHERE (`id` = '11');
UPDATE `lyonsport_db`.`products` SET `id_image` = '12' WHERE (`id` = '12');

insert into related(id, image, name, price)
values(1, 'airforce-perfil.webp', 'Nike Air Force', '66999');
insert into related(id, image, name, price)
values(2, 'airmax-perfil.webp', 'Nike Air Max SYSTM', '53999');
insert into related(id, image, name, price)
values(3, 'jordan-perfil.webp', 'Jordan Max Aura 4', '71999');


-- insert into products_related(id, id_product, id_related)
-- values(1, 1, 1);
-- insert into products_related(id, id_product, id_related)
-- values(2, 1, 2);
-- insert into products_related(id, id_product, id_related)
-- values(3, 1, 3);

-- insert into products_related(id, id_product, id_related)
-- values(4, 2, 1);
-- insert into products_related(id, id_product, id_related)
-- values(5, 2, 2);
-- insert into products_related(id, id_product, id_related)
-- values(6, 2, 3);

-- insert into products_related(id, id_product, id_related)
-- values(7, 3, 1);
-- insert into products_related(id, id_product, id_related)
-- values(8, 3, 2);
-- insert into products_related(id, id_product, id_related)
-- values(9, 3, 3);

-- insert into products_related(id, id_product, id_related)
-- values(10, 4, 1);
-- insert into products_related(id, id_product, id_related)
-- values(1, 4, 2);
-- insert into products_related(id, id_product, id_related)
-- values(12, 4, 3);

-- insert into products_related(id, id_product, id_related)
-- values(13, 5, 1);
-- insert into products_related(id, id_product, id_related)
-- values(14, 5, 2);
-- insert into products_related(id, id_product, id_related)
-- values(15, 5, 3);

-- insert into products_related(id, id_product, id_related)
-- values(16, 6, 1);
-- insert into products_related(id, id_product, id_related)
-- values(17, 6, 2);
-- insert into products_related(id, id_product, id_related)
-- values(18, 6, 3);

-- insert into products_related(id, id_product, id_related)
-- values(19, 7, 1);
-- insert into products_related(id, id_product, id_related)
-- values(20, 7, 2);
-- insert into products_related(id, id_product, id_related)
-- values(21, 7, 3);

-- insert into products_related(id, id_product, id_related)
-- values(22, 8, 1);
-- insert into products_related(id, id_product, id_related)
-- values(23, 8, 2);
-- insert into products_related(id, id_product, id_related)
-- values(24, 8, 3);

-- insert into products_related(id, id_product, id_related)
-- values(25, 9, 1);
-- insert into products_related(id, id_product, id_related)
-- values(26, 9, 2);
-- insert into products_related(id, id_product, id_related)
-- values(27, 9, 3);

-- insert into products_related(id, id_product, id_related)
-- values(28, 10, 1);
-- insert into products_related(id, id_product, id_related)
-- values(29, 10, 2);
-- insert into products_related(id, id_product, id_related)
-- values(30, 10, 3);

-- insert into products_related(id, id_product, id_related)
-- values(31, 11, 1);
-- insert into products_related(id, id_product, id_related)
-- values(32, 11, 2);
-- insert into products_related(id, id_product, id_related)
-- values(33, 11, 3);

-- insert into products_related(id, id_product, id_related)
-- values(34, 12, 1);
-- insert into products_related(id, id_product, id_related)
-- values(35, 12, 2);
-- insert into products_related(id, id_product, id_related)
-- values(36, 12, 3);


insert into users(id, name, email, password, profile_img)
values(1, 'Kane', 'kane@test.com', '$2a$10$pIsD75TjlP07PjmWafcMCew9/MnXeEWgNY1TiEBIG0qn8YxDCJ3/.', '1699487420939_img.png' );
