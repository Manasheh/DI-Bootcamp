import requests
import psycopg2
import random
import db

# Function to fetch random countries from REST Countries API
def fetch_random_countries(num_countries=10):
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    countries_data = response.json()

    random_countries = random.sample(countries_data, num_countries)
    return random_countries


def insert_countries(countries):
    conn = psycopg2.connect(
        dbname=db.DATABASE,
        user=db.USERNAME,
        password=db.PASSWORD,
        host=db.HOSTNAME,
        port=db.PORT
    )
    cur = conn.cursor()

    for country in countries:
        name = country.get('name', {}).get('common', 'N/A')
        capital = country.get('capital', 'N/A')
        flag = country.get('flag', [''])[0] 
        subregion = country.get('subregion', 'N/A')
        population = country.get('population', 0)

        cur.execute('''
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        ''', (name, capital, flag, subregion, population))

    conn.commit()
    cur.close()
    conn.close()

if __name__ == "__main__":
    random_countries = fetch_random_countries()
    insert_countries(random_countries)
    print("Random countries inserted into the database successfully.")
