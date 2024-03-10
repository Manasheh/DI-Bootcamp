# # Data Structure

# #List 

# # user_name = 'John'
# # user_age = 23
# # user_email = 'abc@gmail.com'

# # user_info = [user_name, user_age, user_email]   # List is used to store multiple data types in a single variable
# # print(user_info)

# # Tuple
# # set


# #sort() and sorted()
# # eg

# # fav_color_list = ['red', 'blue', 'yellow',  'green', 'pink']
# # fav_color_list.sort()
# # print(fav_color_list)

# #sorted()
# # fav_color_list = ['red', 'blue', 'yellow',  'green', 'pink']
# # sorted_color = sorted(fav_color_list)
# # print(sorted_color)


# #append and remove an element 
# # fav_color_list = ['red', 'blue', 'yellow',  'green', 'pink']
# # fav_color_list.append( 'black')
# # print(fav_color_list)

# #remove element
# # fav_color_list.remove('yellow')
# # print(fav_color_list)

# #remove using index and if not given index it will remove the last one

# # fav_color_list.pop(1)
# # print(fav_color_list)

# #finding element  in list using index
# # print(fav_color_list.index('pink'))


# #exercise 
# # Given this list:
# # list1 = [5,10,15,20,25,50,20]
# # find the value 20 in the list, and if it is present, replace it with 200.
# # Only update the first occurance of the value
# # hint: look at the index method

# # list1 = [5,10,15,20,25,50,20]

# # for i in list1:
# #     if(i==20):
# #         index = list1.index(i)
# #         list1[index]=200
# #         break
# # print(list1)


# # or 

# # inde = list1.index(20)
# # list1[3] = 200
# # print(list1)

# #tuple()

# # my_tuple = (1,2,3,4,5)
# # print(my_tuple)

# #destructuring 

# # a, b, c, d = (10,20,30,40)
# # print(a)
# # print(b)
# # print(c)
# # print(d)

# #Set() is use when to avoid  duplicates values, it does not have 
# # eg

# # colors = {'green', 'yellow', 'black', 'orange', 'white', 'black'}
# # colors.add('purple')
# # print(set(colors))

# #to join two sets use union()
# # set1 = {'a', 'b', 'c'}
# # set2 = {1,2,3}
# # joinSet = set1.union(set2)
# # print(joinSet)

# #to remove from set()

# # eg
# # set3 = {'z', 'y','x'}
# # set3.remove('x')
# # print(set3)

# #LOOPS  
# # 1) range
# # 2) for loop(use when we know the number of repetation we need)
# # 3) while loop(when we dont  know how many times we want to repeat)

# # for i in range(10):
# #     print(i)

# # students = ['john', 'bob', 'anna', 'singh', 'kumar']
# # for name in students:
# #     if  len(name)>3:
# #         print(name)


# # for each_student in students:
# #     if each_student == 'anna':
# #         print('hello anna')
# #     else:
# #         print('hello')



# # eg 


# # cities = ('Tel Aviv', 'Sao Paulo', 'Moscow', 'Amsterdam')

# # for city in cities:
# #     print(f'I have been in {city}')


# # max() ,min() and sum() 
# #eg

# # list1 = (1,0,3,4,5,6,5,19,20)
# # # print(max(list1))
# # print(min(list1))
# # print(sum(list1))

# #exercise

# # Accept a number from the user and print its multiplication table

# # user_input = int(input('Give me a number'))

# # for i in range(1,11):
# #     print(i * user_input)



# #while loop

# # counter = 0 
# # while counter <= 8:
# #     print('hello')
# #     counter += 1

# #PASSWORD CHECK EXERCISE

# password = ''
# while password != '12345':
#     password = input('password')
#     if password == 'juliana':
#         break
# print('You got the correct password')

# #EXERCISE 

# # current_num = 0
# # while current_num <= 10:
# #     current_num += 1
# #     if current_num == 5:
# #         continue
# #     else:
# #         print(current_num)