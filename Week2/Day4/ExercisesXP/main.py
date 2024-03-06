# # # # EXERCISE 1
# # # Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# # # Call the function, and make sure the message displays correctly.

# # # def display_message():
# # #     print('Leaning all the necessary skills to become a full stack developer!')
# # # display_message()

# # #EXERCISE 2
# # Write a function called favorite_book() that accepts one parameter called title.
# # The function should print a message, such as "One of my favorite books is <title>".
# # For example: “One of my favorite books is Alice in Wonderland”
# # Call the function, make sure to include a book title as an argument when calling the function.

# # def favorite_book(title):
# #     print(f'One of my favorite books is {title}.')
# # favorite_book('Alice in Wonderland')

# # #EXERCICISE 3


# # def describe_city(city, country='Israel'):
# #     print(f"{city} is in {country}")
# # describe_city('Jerusalem')

# # EXERCISE 4 

# task1: function with parameter 
# task2: generate random num 1 to 100 and assign a variable
# task3: compare the two number and it they are equal display a success message 
# if dont match display  a fail message with both the number

# import random
# def message_function(num):
#     rand_num = random.randint(1,100)
#     if num == rand_num:
#         print(f'Message send successful!')
#     elif num != rand_num:
#         print(f'Fail! Message not sent successfully. Sent number was {num} {rand_num}')
#     else:
#         return
    
# message_function(20)

# EXERCISE 5

# def make_shirt(size='L', message='I love Python'):
#     print(f'The size of the shirt is {size} and the text is {message}')

# # make_shirt('S')
# # make_shirt('M')
# # make_shirt('XL', 'Python is cool!')

# EXERCISE 6:

# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians():
#     for magician in magician_names:
#         print(magician)

# def make_great():
#     for i, name in  enumerate(magician_names):
#         magician_names[i] = f'The Great {name}'
# make_great()
# show_magicians()

# EXERCISE 7 


# import random

# def get_random_temp(season):
#     # temp = random.randint(-10,40)
#     if season == 'winter':
#          temp = random.randint(-10,16)
#     elif season == 'summer':
#          temp = random.randint(17,40)
#     return temp



# def main():
#     random_temp = get_random_temp(input('enter summer or winter '))
#     if random_temp <= 0:
#         print('Brrr, thats freezing! Wear some extra layers today!')
#     elif random_temp > 0 and random_temp <= 16:
#         print("Quite chilly! Don't forget your coat")
#     elif random_temp > 16 and random_temp <= 23:
#         print("It's quite warm outside.")
#     elif random_temp > 23 and random_temp <= 32:
#         print("Hot out there! Keep hydrated.")
#     elif  random_temp > 32 and  random_temp <= -40:
#         print('Too hot')
#     print(f'The temperature right now is {random_temp} degrees Celsius.')

# main()


# EXERCISE 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_question(data):
    for i in data:
        user_question = i['question']
        print(user_question)
        user_answer = i['answer']
        print(user_answer)
    
ask_question(data)




















# list_2D = [['7', 'i',' i']
#            ['T', 's', 'x']
#            []
#            []
#            ]