

import psycopg2
import config

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            conn = psycopg2.connect(
                dbname=config.DATABASE,
                user=config.USERNAME,
                password=config.PASSWORD,
                host=config.HOSTNAME,
                port=config.PORT
            )
            cursor = conn.cursor()
            query = 'SELECT * FROM menu_items WHERE item_name = %s'
            cursor.execute(query, (name,))
            item = cursor.fetchone()
            if item:
                return item
            else:
                return None
        except psycopg2.Error as e:
            print('Error connecting to database:', e)
        finally:
            if conn:
                cursor.close()
                conn.close()

    @classmethod
    def all_items(cls):
        try:
            conn = psycopg2.connect(
                dbname=config.DATABASE,
                user=config.USERNAME,
                password=config.PASSWORD,
                host=config.HOSTNAME,
                port=config.PORT
            )
            cursor = conn.cursor()
            query = 'SELECT * FROM menu_items'
            cursor.execute(query)
            items = cursor.fetchall()
            return items
        except psycopg2.Error as e:
            print('Error connecting to database:', e)
        finally:
            if conn:
                cursor.close()
                conn.close()

item2 = MenuManager.get_by_name('Banana')
# print(item2)
items = MenuManager.all_items()
print(items)

