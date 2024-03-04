# # # # # # # # #Exercise 1
# # # # # # # # # Create a set called my_fav_numbers with all your favorites numbers.
# # # # # # # # # Add two new numbers to the set.
# # # # # # # # # Remove the last number.
# # # # # # # # # Create a set called friend_fav_numbers with your friend’s favorites numbers.
# # # # # # # # # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
# # # # # # # # #solution>

# # # # # # # # # my_fav_number = {1,2,3,4,5,6,7,8,9}
# # # # # # # # # my_fav_number.add(10)
# # # # # # # # # my_fav_number.add(11)
# # # # # # # # # my_fav_number.remove(11)
# # # # # # # # # my_friend_fav_number = {12,13,14,15}
# # # # # # # # # our_fav_numbers = my_fav_number.union(my_friend_fav_number)
# # # # # # # # # print(our_fav_numbers)



# # # # # # # # #EXERCISE 2
# # # # # # # # # Given a tuple which value is integers, is it possible to add more integers to the tuple?
# # # # # # # # #solution
# # # # # # # # #no cannot add or remove after a tuple is created.
# # # # # # # # # my_tuple = (1,2,3)
# # # # # # # # # print(my_tuple)


# # # # # # # # #EXERCISE 3
# # # # # # # #basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# # # # # # # # Remove “Banana” from the list.
# # # # # # # # Remove “Blueberries” from the list.
# # # # # # # # Add “Kiwi” to the end of the list.
# # # # # # # # Add “Apples” to the beginning of the list.
# # # # # # # # Count how many apples are in the basket.
# # # # # # # # Empty the basket.
# # # # # # # # Print(basket)
# # # # # # # #solution

# # # # # # # # basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# # # # # # # # basket.remove('Banana')
# # # # # # # # basket.remove('Blueberries')
# # # # # # # # basket.append('Kiwi')
# # # # # # # # basket.insert(0, 'Apples')

# # # # # # # # count = 0
# # # # # # # # for fruit in basket:
# # # # # # # #     if  fruit == 'Apples':
# # # # # # # #         count += 1
# # # # # # # #         print("Number of Apples : ", count)
# # # # # # # #         break
# # # # # # # # basket.clear()
# # # # # # # # print(basket)


# # # # # # # # EXERCISE 4
# # # # # # # Recap – What is a float? What is the difference between an integer and a float?
# # # # # # # Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# # # # # # # Can you think of another way to generate a sequence of floats?

# # # # # # # Float is a function or reusable code in the Python programming language
# # # # # #  that converts values into floating point numbers. Floating point numbers
# # # # # # are decimal values or fractional numbers like 133.5, 2897.11, and 3571.213,
# # # # # # whereas real numbers like 56, 2, and 33 are called integers

# # # # # float = 3.14
# # # # # integer = 56

# # # # # seq = []
# # # # # startList = 1
# # # # # endList = 5
# # # # # step = 0.5
# # # # # while  startList < endList:
# # # # #     startList = startList + step
# # # # #     seq.append(startList)
# # # # # print(seq)


# # # # # EXERCISE 5
# # # # Use a for loop to print all numbers from 1 to 20, inclusive.
# # # # Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# # # #solution > 

# # # # num = []
# # # # for i in range(1,21):
# # # #     num.append(i)
# # # # print(num)

# # # # for x, i in  enumerate(range(1,21)):
# # # #     if x % 2 == 0:
# # # #         print(f'index = {x} , value = {i}')

# # # #EXERCISE 6

# # # # user_name = ''
# # # # while user_name != 'Menashe':
# # # #     user_name = input('Enter your name:')
# # # # print('Hello, Menashe')


# # # #EXERCISE 7

# # # Ask the user to input their favorite fruit(s) (one or several fruits).
# # # Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# # # Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# # # Now that we have a list of fruits, ask the user to input a name of any fruit.
# # # If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# # # If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# # user_favourite_fruit = input('Enter your favourite fruit ')
# # fruits = user_favourite_fruit.split( )
# # while True:
# #     user_choice = input('Enter  a fruit :')
# #     if user_choice in fruits:
# #         print("You chose one of your favourite fruits! Enjoy!")
# #         break
# #     else: 
# #         print("You chose a new fruit. Hope you enjoy it.")
# # print ("Goodbye!")

# # #EXERCISE 8

# # Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# # As they enter each topping, print a message saying you’ll add that topping to their pizza.
# # Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# #solution

# # topping = []
# # while True:
# #     user_top = input('enter top ')
# #     topping.append(user_top)
# #     if  user_top == "quit":
# #         break
# #     print(f'adding {user_top} to your pizza')

# #EXERCISE 9

# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# # A group of teenagers are coming to your movie theater and
#  want to watch a movie that is restricted for people between the ages of 16 and 21.
#  Given a list of names, write a program that asks 
# teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
#solutions 

# total_cost = 0
# num_of_person = int(input(f'Enter number of person'))
# for person in range(1, num_of_person + 1):
#     age = int(input('Enter person1 age {person} '))
#     if age <= 3:
#         price = 0
#     elif age > 3 and  age <= 12:
#         price = 10
#     elif age > 12:
#         price = 15
#     total_cost += price

# print(total_cost)

# teen_names = ['Lisa','Tony','Jack','Roselyn', 'Jennifer']
# permited_teen = []
# for teen in teen_names:
#     age = int(input(f'Enter age of {teen} '))
#     if age <  16 and age < 21 :
#         # permited_teen.remove(teen)
#         continue
#     elif age > 21:
#         permited_teen.append(teen)
# print(f'Names of permitted teens are {permited_teen}')



























# total_cost = 0
# family_size = int(input("Enter the number of people in the family: "))

# for person in range(1, family_size + 1):
#     age = int(input(f"Enter the age of person {person}: "))
#     if age < 3:
#         ticket_price = 0
#     elif 3 <= age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
#     total_cost += ticket_price

# print(f"Total cost of all the family's tickets: ${total_cost}")

    
  






      







