-- PART 1 AND REMAINING MY SYSTEM CRASH AND I CAN'T GET BACK SORRY!
-- I DON'T REALLY KNOW WHAT I'M DOING I JUST FOLLOWED THE SOLUTIONS

-- part 2: 
-- 4
-- SELECT * FROM rental WHERE return_date IS NULL

-- 5
-- SELECT * FROM rental INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- LEFT JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY replacement_cost DESC LIMIT 30

-- 6
-- SELECT film.film_id, film.title, film.fulltext FROM film_actor
-- INNER JOIN film ON film.film_id = film_actor.film_id
-- WHERE(actor_id =(SELECT actor_id from actor WHERE (first_name = 'Penelope' AND last_name='Monroe')
-- AND film.fulltext @@ to_tsquery('english', 'sumo')
-- ))
-- SELECT * FROM film 
-- INNER JOIN film_category ON film.film_id = film_category.film_id
-- INNER JOIN category ON category.category_id = film_category.category_id
-- WHERE length < 60 AND rating = 'R' AND category.name = 'Documentary'

-- SELECT * FROM inventory
-- INNER JOIN film ON film.film_id = inventory.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE customer.first_name = 'Matthew' 
-- AND customer.last_name = 'Mahan' 
-- AND film.rental_rate > 4
-- AND rental.rental_date > '2005-07-28'
-- AND rental.rental_date < '2005-08-01'

-- SELECT * FROM inventory
-- INNER JOIN film ON film.film_id = inventory.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE customer.first_name = 'Matthew' 
-- AND customer.last_name = 'Mahan'
-- AND (film.title ILIKE '%ow%' OR film.description ILIKE '%BOAT%')
-- ORDER BY film.replacement_cost DESC LIMIT 1

