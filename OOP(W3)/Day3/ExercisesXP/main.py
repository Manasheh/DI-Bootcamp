# Exercise 1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.currency} {self.amount}"

#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         return f"{self.currency} {self.amount}"

#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError("The currencies are not the same")
#             return Currency(self.currency, self.amount + other.amount)
#         elif isinstance(other, (int, float)):
#             return Currency(self.currency, self.amount + other)
#         else:
#             raise TypeError("Unsupported type")

#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError("The currencies are not the same")
#             self.amount += other.amount
#         elif isinstance(other, (int, float)):
#             self.amount += other
#         else:
#             raise TypeError("Addition not supported")
#         return self

# c1 = Currency('Dollar', 5)
# c2 = Currency('Dollar', 15)
# c3 = Currency('Shekel', 25)
# print(c1 + 10)
# print(c1 + c2) 
# print(c1 + c3)

#Exercise 3

# Generate random String of length 5

# import random
# import string

# def random_string(length):

#     letters = string.ascii_letters
#     letter_length = [random.choice(letters) for i in range(length)]
#     letter_str = ''.join(letter_length)
#     return letter_str

# print(random_string(5))
        
#Exercise 4

# Create a function that displays the current date.
# import datetime

# def current_date():
#     current_date = datetime.datetime.now()
#     print(current_date)

# current_date()

#Exercise 5

# import datetime

# def time_left():
#     jan1 = datetime.datetime(2025, 1, 1, 12,0,1)
#     time_now = datetime.datetime.now()
#     result = jan1 - time_now
#     print(result)
# time_left()

#Exercise 6
# import datetime


# def minutes_live(year, month, day):
#     date_of_birth = datetime.datetime(year, month, day)
#     date_now = datetime.datetime.now()
#     difference = date_now - date_of_birth
#     result_minute = difference.total_seconds() / 60
#     print(result_minute)

# minutes_live(1995,3,17)

#Exercise 7
# from faker import Faker

# fake = Faker()
# users = []

# def add_new_users():
#     new_user = {
#         'name' : fake.name(),
#         'address' : fake.address(),
#         'language_code':fake.language_code()
#     }
#     users.append(new_user)

# add_new_users()
# print(users)
