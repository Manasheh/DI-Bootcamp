import psycopg2
import config



#to connect to a database we use try,connect, finally

try:
    conn = psycopg2.connect(
    dbname = config.DATABASE,
    user = config.USERNAME,
    password = config.PASSWORD,
    host = config.HOSTNAME,
    port = config.PORT
    )

    cursor = conn.cursor()

    query = '''INSERT INTO actors(first_name, last_name, age, number_oscars)
            VALUES ('Hugn', 'Laurie', '1959/06/11', 3)
            '''

    cursor.execute('SELECT * FROM actors')
    # cursor.execute(query)
    # conn.commit() #need to commit anytime we add or insert

    # two methods to fetch the data:
    # fetchall() or fetchone()
    # print(cursor.fetchone())
    all_rows = cursor.fetchall() # getting data from database
    for row in all_rows:
        print(row)

except psycopg2.Error as e:
    print('Error connecting', e)

# finally:
#     if conn:
#         cursor.close()
#         conn.close()
    

#Exercise 
    # insert into actors table 2 new actors 
    # select from table movie all the movies from director Steven Spielberg
    # create a table named movie_review (one movie can get many reviews and a review is for one movie)
    # and insert 3 reviews

