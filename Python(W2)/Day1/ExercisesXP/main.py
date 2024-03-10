#Exercise 1
#Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

#solution :
# print("Hello world\n"*4)


#Exercise 2
#Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

#solution :
# user_input_number = int(input('Enter the number: '))
# print(user_input_number)
# user_input_power = int(input('Enter the power: '))
# print(user_input_power)
# user_input_times = int(input('Enter the time: '))
# print(user_input_times)
# print((user_input_number ** user_input_power) * user_input_times)

# or

# print(99**3*8)


#Exercise 3
# Predict the output of the following code snippets:
# >>> 5 < 3
# True

#solution :

# >>> 3 == 3
# True

# >>> 3 == "3"
#false

# >>> "3" > 3
#error

# >>> "Hello" == "hello"
#false, because py is case-sensitive


#exercise 4
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

#solution :

# computer_brand = 'DELL'
# print(f'I have a {computer_brand} computer')


#exercise 5

#solution :

# name = "Menashe Vaiphei"
# age = 28
# shoe_size = 8
# info = (f"I'm {name} {age} with shoe size {shoe_size}")
# print(info)


# Exercise 6
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

#solution :

# a = 20
# b = 10
# if a > b:
#     print("Hello World")


#Exercise 7
# Write code that asks the user for a number and determines whether this number is odd or even.

#solution

# user_input = int(input('Enter a number: '))
# if user_input % 2 == 0:
#     print(f'{user_input} is even')
# else: 
#     print(f'{user_input} is odd')

#Exercise 8
# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

#solution

# my_name = 'Menashe'
# user_name = input(f'What is your name? ')
# print(user_name)
# if  my_name == user_name:
#     print("yah! We got the same name !")
# else:
#     print(f"Sorry!, our name doesn't match")

# Exercise 9
# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

#solution 

# user_height_inch = float(input(f'Please enter your height in inches: '))
# user_height_in_cm = user_height_inch * 2.54
# if user_height_in_cm > 145:
#     print(f'They are tall enough to ride !')
# else:
#     print(f'They need to grow some more to ride')
    




