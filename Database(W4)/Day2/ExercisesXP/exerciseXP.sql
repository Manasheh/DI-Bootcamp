-- #EXERCISE 1
-- There was problem with my pgadmin 4, i reinstall it and all the exercise i did was lost


-- #EXERCISE 2
-- SELECT * FROM customer
-- SELECT first_name || ' ' || last_name AS full_name FROM customer
-- SELECT DISTINCT create_date FROM customer
-- SELECT * FROM customer ORDER BY first_name;
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC
-- SELECT address, phone FROM customer
-- INNER JOIN address ON customer.address_id =address.address_id
-- WHERE district = 'Texas'
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150
-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title = 'Inception';
-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title ILIKE 'in%';
-- SELECT * FROM film ORDER BY rental_rate ASC limit 10
-- SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 FETCH FIRST 10 ROWS ONLY

-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer 
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- ORDER BY payment.customer_id;
-- SELECT * FROM film LEFT JOIN inventory ON film.film_id = inventory.film_id 
-- WHERE inventory_id IS NULL

-- SELECT * FROM city 
-- INNER JOIN country on city.country_id = country.country_id

-- SELECT * FROM payment 
-- INNER JOIN customer ON customer.customer_id = payment.customer_id ORDER BY payment.staff_id ASC


#DAILY CHALLENGE:
-- 1) 0
-- 2) 2
-- 3) 0
-- 4) 2
