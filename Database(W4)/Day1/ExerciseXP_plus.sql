
DROP TABLE IF EXISTS students;

CREATE TABLE students(
	student_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(100),
	birth_day DATE
);

INSERT INTO students(first_name, last_name, birth_day) VALUES
	('Marc', 'Benichou', '02/11/1998'),
	('Yoan', 'Cohen', '03/12/2010'),	
	('Lea', 'Benichou', '27/07/1987'),	
	('Amelia', 'Dux', '07/04/1996'),	
	('David', 'Grez', '14/06/2003'),
	('Omer', 'Simpson', '03/10/1980');
	
-- SELECT first_name, last_name FROM students;

-- SELECT first_name, last_name FROM students
-- WHERE student_id = 2;

-- SELECT * FROM students
-- WHERE first_name = 'Marc' AND last_name = 'Benichou'

-- SELECT * FROM students
-- WHERE first_name = 'Marc' OR last_name = 'Benichou'

-- SELECT first_name FROM students
-- WHERE first_name ILIKE '%a%';

-- SELECT * FROM students
-- WHERE first_name ILIKE 'a%';

-- SELECT * FROM students
-- WHERE first_name ILIKE '%A'

-- SELECT * FROM students
-- WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a'

-- SELECT * FROM students
-- WHERE student_id = 1 OR student_id = 3;
