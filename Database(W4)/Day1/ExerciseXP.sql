CREATE TABLE IF NOT EXISTS items(
	item_id SERIAL PRIMARY KEY,
	item_type VARCHAR(50),
	item_price NUMERIC
);

DELETE FROM items;
ALTER SEQUENCE items_item_key_seq RESTART WITH 1;
INSERT INTO items(item_type, item_price) VALUES
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80);
	

-- SELECT * FROM items;

-- SELECT * FROM items
-- WHERE item_price > 80;
-- SELECT * FROM items
-- WHERE item_price <= 300;
-- SELECT * FROM items;

CREATE TABLE IF NOT EXISTS customers(
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(100)
);
DELETE FROM customers;
ALTER SEQUENCE items_item_key_seq RESTART WITH 1;
INSERT INTO customers(first_name, last_name) VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');
	
-- SELECT * FROM customers;
-- SELECT * FROM customers
-- WHERE last_name = 'Smith'

-- SELECT * FROM customers
-- WHERE last_name = 'Jones';

SELECT * FROM customers
WHERE last_name != 'Scott';
	


