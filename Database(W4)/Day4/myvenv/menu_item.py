import psycopg2
import config


class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try: 
            conn = psycopg2.connect(
                dbname=config.DATABASE,
                user=config.USERNAME,
                password=config.PASSWORD,
                host=config.HOSTNAME,
                port=config.PORT
            )
            cursor = conn.cursor()
            query = 'INSERT INTO menu_items(item_name, item_price) VALUES (%s, %s)'
            cursor.execute(query, (self.name, self.price))
            conn.commit()
            print("Item saved successfully!")

        except psycopg2.Error as e:
            print('Error connecting:', e)

        finally:
            if conn:
                cursor.close()
                conn.close()

    def delete(self, id):
        self.id = id
        try: 
            conn = psycopg2.connect(
                dbname=config.DATABASE,
                user=config.USERNAME,
                password=config.PASSWORD,
                host=config.HOSTNAME,
                port=config.PORT
            )
            cursor = conn.cursor()
            query = 'DELETE FROM menu_items WHERE item_id = %s'
            cursor.execute(query, (self.id,))
            conn.commit()
            print("Item deleted successfully!")

        except psycopg2.Error as e:
            print('Error connecting:', e)

        finally:
            if conn:
                cursor.close()
                conn.close()

    def update(self, new_price, item_id):
        self.new_price = new_price
        self.item_id = item_id
        try: 
            with psycopg2.connect(
                dbname=config.DATABASE,
                user=config.USERNAME,
                password=config.PASSWORD,
                host=config.HOSTNAME,
                port=config.PORT
            ) as conn:
                with conn.cursor() as cursor:
                    query = 'UPDATE menu_items SET item_price = %s WHERE item_id = %s'
                    cursor.execute(query, (self.new_price, self.item_id))
                    conn.commit()
            print("Item updated successfully!")

        except psycopg2.Error as e:
            print('Error updating item:', e)


a1 = MenuItem(None, None)
a1.delete(38)
# a1.update(15, 1)

