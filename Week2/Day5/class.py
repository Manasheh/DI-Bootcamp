# # # # # #Basic value types

# # # # # #strings
# # # # # #intergers
# # # # # #floats/decimals
# # # # # #Booleans True(1) of False(0)

# # # # # # greeting = 'Hello, welcome'
# # # # # # print(type(greeting))
# # # # # # age = 24
# # # # # # height: 1.80
# # # # # # is_female: True 


# # # # # #Data collection

# # # # # #Lists - ordered and changeable - can hold - ['Harry', 'Tony', 'Jack']
# # # # # #List method:
# # # # # #append() add item to end
# # # # # #insert() add item at specific index
# # # # # #remove() remove item by value or by index
# # # # # #pop() remove item by index and return it
# # # # # #clear() remove all items

# # # # # #Tuples - ordered and unchangeable - cannot - (1, 2, 3)
# # # # # #They are like lists but they cannot be changed once created. They are used when you want data that should not be modified.
# # # # # # tuple2 = (10,20)
# # # # # # tuple1 = (30,40)
# # # # # # my_tuple = tuple1 + tuple2
# # # # # # print(min(my_tuple))
# # # # # # print(max(my_tuple))
# # # # # # print(my_tuple)
# # # # # #Set {1,2,3,5} - unordered and unindexed - no repeated values
# # # # # # set1 = {1,2,3,4,5}
# # # # # # set2 = {2,5,6,8,10}
# # # # # # #to check unique elements in both set1 and set2
# # # # # # print(set1^set2)

# # # # # #Dictionaries - unordered but key-value pairs -  {'name': 'John', 'age':  36}
# # # # # user_a = {
# # # # #     'first_name': 'Bob',
# # # # #     'last_name': 'Ross',
# # # # #     'age': 23,
# # # # #     'address': 'Tel Aviv'
# # # # # }

# # # # # # to access 
# # # # # print(user_a['address'])
# # # # # print(user_a['age'])
# # # # # #to get just the key using loop
# # # # # # for key in user_a.keys():
# # # # # #     print(key)

# # # # # #to get just the values using loop
# # # # # # for value in user_a.values():
# # # # # #     print(value)

# # # # # #to get both the key and value using loop
# # # # # for key, value in user_a.items():
# # # # #     print(f"{key}: {value}")


# # # # # #adding  new item to dictionary
# # # # # user_a['email']='bob@gmail.com'
# # # # # print(user_a)
# # # # # #checking if a specific key exists in the dictionary:
# # # # # if 'phone' in user_a:
# # # # #     print('The phone number is in the dictionary')
# # # # # else:
# # # # #     print("There isn't any phone number")

# # # # # #updating an existing element    in the dictionary
# # # # # user_a['age']=37
# # # # # print(user_a)

# # # # # #deleting an element from the  dictionary
# # # # # del user_a['address']
# # # # # print(user_a)  



# # # # #enumerates

# # # # # cats = ['Lulu', 'Miau', 'chatuli']
# # # # # def make_cute():
# # # # #     for  i, cat in enumerate(cats):
# # # # #         cats[i] =  f"{cat} is so cute!"
# # # # # make_cute()
# # # # # print(cats)

# # # # #List comprehension
# # # # my_list1 = []
# # # # for num in range(6):
# # # #     my_list1.append(num)
# # # # print(my_list1)

# # # # #it create  list based on some condition:
# # # # my_list = [num for num in range(6)]
# # # # my_list = [num for num in range(6) if num % 2 == 0]
# # # # print(my_list)

# # # # #Dictionary comprehension

# # # # # fruits = ['apple', 'banana',  'cherry', 'date']

# # # # # fruits_length = {fruit: len(fruit) for fruit in fruits}
# # # # # print(fruits_length)

# # # # #lambda funcitons:

# # # # # simple lambda function
# # # # square = lambda x :x**2
# # # # print(square(5))

# # # # # multiple line lambda functions 
# # # # multiline_func = lambda x ,  y: (x + y) * (x - y)
# # # # print(multiline_func(3,4))

# # # #map>creates a new list and filter functions

# # # fruits = ['Apple', 'Banana',  'cherry', 'date']

# # # # def upper_list(s):
# # # #     return s.upper()

# # # # new_fruits = list(map(upper_list, fruits))
# # # # print(new_fruits)

# # # # def start_with_a(s):
# # # #     return s[0] == 'A'
# # # # fruits_start_with_a = tuple(filter(start_with_a, fruits))
# # # # print(fruits_start_with_a)

# # # # print(list(filter(lambda s: s[0] == "B", fruits)))
# # # # # anonymous lambda functions


# # # # result = filter(lambda x: x%2==0, [1,2,3,4,5,6])
# # # # print(list(result))


# # # # def sort_array(arr):
# # # #     return sorted(arr)

# # # # print(sort_array([9,8,7,6,5,4,3,2,1]))


# # # # def binary_search(arr, target):
# # # #     low=0
# # # #     high=(len(arr)-1)
# # # #     while low<=high:
# # # #         mid=int((low+high)/2)
# # # #         if arr[mid]<target:
# # # #             low=mid+1
# # # #         elif arr[mid]>target:
# # # #             high=mid-1
# # # #         else:
# # # #             return mid
# # # #     return None

# # # # print(binary_search([1,3,5,7,9],5))










# board = ['','','','','','','','','']
# def display_board():
#     print("\n")
#     print(f"{board[0]}   |  {board[1]}  |  {board[2]}")
#     print("------------")
#     print(f"{board[3]}   |  {board[4]}  |  {board[5]}")
#     print("------------")
#     print(f"{board[6]}   | {board[7]}   |  {board[8]}")
#     print("\n")

# def get_input():
#     for _ in  range(9):
#         players = ['X', 'O'] 
#         for player in players:
#             if player == 'X':
#                 player_input = int(input(f'Player 1 input '))
#                 board[player_input - 1] = "X"
#                 display_board()
#                 check_winner()
                
#             elif player == 'O':
#                 player_input = int(input(f'Player 2 input '))
#                 board[player_input - 1] = 'O'
#                 display_board()
#                 check_winner()
           
# def check_winner():
#     if board[0] == board[1] == board[2] != '':
#         print(f"{board[0]} is the winner!")
#         return True
#     elif board[3] == board[4] == board[5] != '':
#         print(f'{board[3]} is the winner!')
#         return True
#     elif board[6] == board[7] == board[8] != '':
#         print(f'{board[6]} is the winner!')
#         return True
#     elif board[0] == board[4] == board[8] != '':
#         print(f'{board[0]} is the winner!')
#         return True
#     elif board[6] == board[4] == board[2] != '':
#         print(f'{board[6]} is the winner!')
#         return True
#     elif board[0] == board[3] == board[6] != '':
#         print(f'{board[0]} is the winner!')
#         return True
#     elif board[1] == board[4] == board[7] != '':
#         print(f'{board[1]} is the winner!')
#         return True
#     elif board[2] == board[5] == board[8] != '':
#         print(f'{board[2]} is the winner!')
#     elif '' not in board:
#         print('Its a tie')
   
# def play():
#     display_board()
#     get_input()
 
# play()


# # Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# # Use List Comprehension
# user_input = input("enter any word with comma ")
# user_in_list = user_input.split(',')
# sorted_list = sorted(x for x in user_in_list)
# print(sorted_list)

user_input = input('enter a list ')
use_split_and_sort = sorted(user_input.split())
print(use_split_and_sort)



