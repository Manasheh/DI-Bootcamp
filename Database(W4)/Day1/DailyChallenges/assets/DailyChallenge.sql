DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(100),
	birth_day DATE,
	number_oscars NUMERIC
);


INSERT INTO actors(first_name, last_name, birth_day, number_oscars) VALUES
('Angelina', 'Jolie', '04/06/1975', 1),
('George', 'Clooney', '05/06/1961',2),
('Jennifer', 'Aniston', '11/02/1969',0),
('Matt', 'Damon', '10/08/1970', 5);

-- SELECT COUNT(*) AS item
-- FROM actors

SELECT * FROM actors WHERE actor_id = 2;
INSERT INTO actors(first_name, last_name, birth_day, number_oscars) VALUES
('Robert', NULL , '04/04/1965', 2);

SELECT * FROM actors
ORDER BY birth_day ASC
;
