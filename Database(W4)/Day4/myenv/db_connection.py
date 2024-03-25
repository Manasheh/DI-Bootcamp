# import psycopg2
# import config

#find org, be a volunteer

# #to connect to a database we use try,connect, finally

# try:
#     conn = psycopg2.connect(
#     dbname = config.DATABASE,
#     user = config.USERNAME,
#     password = config.PASSWORD,
#     host = config.HOSTNAME,
#     port = config.PORT
#     )

#     cursor = conn.cursor()

#     query = '''INSERT INTO actors(first_name, last_name, age, number_oscars)
#             VALUES ('Hugn', 'Laurie', '1959/06/11', 3)
#             '''

#     cursor.execute('SELECT * FROM actors')
#     # cursor.execute(query)
#     # conn.commit() #need to commit anytime we add or insert

#     # two methods to fetch the data:
#     # fetchall() or fetchone()
#     # print(cursor.fetchone())
#     all_rows = cursor.fetchall() # getting data from database
#     for row in all_rows:
#         print(row)

# except psycopg2.Error as e:
#     print('Error connecting', e)

# # finally:
# #     if conn:
# #         cursor.close()
# #         conn.close()
    

# #Exercise 
#     # insert into actors table 2 new actors 
#     # select from table movie all the movies from director Steven Spielberg
#     # create a table named movie_review (one movie can get many reviews and a review is for one movie)
#     # and insert 3 reviews



# coi9p6uUgkQYG58VtK/9lQ==lSfuVexQTJ7Iz6CQ

# coi9p6uUgkQYG58VtK/9lQ==lSfuVexQTJ7Iz6CQ

import requests


api_url = 'https://api.api-ninjas.com/v1/randomuser'
api_key = 'coi9p6uUgkQYG58VtK/9lQ==lSfuVexQTJ7Iz6CQ' 

response = requests.get(api_url, headers={'X-Api-Key': api_key})

if response.status_code == requests.codes.ok:
    # Parse the JSON response
    data = response.json()
    # print(data)
    
    # Directly access the 'results' key
#     results = data['results']  # Accessing the 'results' key
#     for result in results:
#         name = result['name']['first'] + ' ' + result['name']['last']
#         email = result['email']
#         age = result['dob']['age']
        
#         # Print the extracted information
#         print("Name:", name)
#         print("Email:", email)
#         print("Age:", age)
#         print()
# else:
#     print("Error:", response.status_code, response.text)


