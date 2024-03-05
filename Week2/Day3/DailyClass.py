# # # # # # # Dictionary 
# # # # # # Dictionary they are represented using key, value pairs.
# # # # # # List are access using the indexes but dictionary are 
# # # # # # access using keys.


# # # # # # eg 

# # # # # user_info_dict = {
# # # # #     'name' : 'John',
# # # # #     'age': 20,
# # # # #     'address': 'Tel aviv',
# # # # #     'hobbies': ['Watching moveis', 'Hiking']
# # # # # }

# # # # # Exercises

# # # # # sample_dict = {
# # # # #   "name": "Kelly",
# # # # #   "age":25,
# # # # #   "salary": 8000,
# # # # #   "city": "New york"
# # # # # }


# # # # shirts = [
# # # #   {
# # # #     'name': 'Awesome T-shirt 3000',
# # # #     'size': 'S',
# # # #     'price': 20
# # # #   },
# # # #   {
# # # #     'name': 'Awesome T-shirt 3000',
# # # #     'size': 'M',
# # # #     'price': 25
# # # #   },
# # # #   {
# # # #     2: 'XL',
# # # #     'name': 'Awesome T-shirt 3000',
# # # #     'size': 'L',
# # # #     'price': 30,
# # # #     ('size_uk, size_us'): ['s', 'small']
# # # #   },
# # # # ]

# # # # print(shirts[1]['name']) #Awesome T-shirt 3000
# # # # print(shirts[2][2])
# # # # print(shirts[2][('size_uk, size_us')])


# # # sample_dict = { 
# # #    "class":{ 
# # #       "student":{ 
# # #          "name":"Mike",
# # #          "marks":{ 
# # #             "physics":70,
# # #             "history":80
# # #          }
# # #       }
# # #    }
# # # }

# # # print(sample_dict['class']['student']['marks']['history'])


# # # shirts = [
# # #   {
# # #     'name': 'Awesome T-shirt 3000',
# # #     'size': 'S',
# # #     'price': 20
# # #   },
# # #   {
# # #     'name': 'Awesome T-shirt 3000',
# # #     'size': 'M',
# # #     'price': 25
# # #   },
# # #   {
# # #     2: 'XL',
# # #     'name': 'Awesome T-shirt 3000',
# # #     'size': 'L',
# # #     'price': 30,
# # #     ('size_uk, size_us'): ['s', 'small']
# # #   },
# # # ]

# # #add new item.

# # # shirts[0]['color'] = 'red'
# # # print(shirts)

# # # #delete item
# # # del shirts[0]['color']
# # # print(shirts)

# # #to access just the key, use key(), value(), items():

# # # first_shirt = shirts[1]

# # # print(first_shirt.items())

# # # print(shirts[2].keys())

# # # print(shirts[1].items())


# # # for loop > used when we know the number of loop we want to perform
# # #  while loop > used when we don't know 

# # # for inde, py in enumerate(range(1, 10)):
# # #     print(f'index is {inde} : {py} times')

# # # my_fav_nums = [5,7,13,15,55,77]
# # # squared = []

# # # for num in my_fav_nums:
# # #     squared.append(num ** 3)
# # # print(squared)
# # # for inde, num in enumerate(my_fav_nums):
# # #     num = num ** 2
# # #     my_fav_nums[inde] = num
# # # print(my_fav_nums)

# # #EXERCISE 

# # sample_dict = {
# #   "name": "Kelly",
# #   "age":25,
# #   "salary": 8000,
# #   "city": "New york"

# # }

# # #remove ['name', 'salary']

# # # key_to_remove = ['name', 'salary']

# # # for key in  key_to_remove:
# # #     del  sample_dict[key]
# # # print(sample_dict)


# # # or

# # # del sample_dict['name']
# # # del sample_dict['age']
# # # print(sample_dict)

# #ZIP ITERATION: IN A TUPLE(use for concatenation)
# #if we see zip object code that means we need 
# to use for loop or convert to list or dict etc

# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

# zipped = zip(list1, list2, list3)

# for item in zipped:
#     print(item)

# it prints like one two three ... 
#                one two three ...
#                one two three ...
    

#convert zip to list:

# zipped_list = list(zip(list1, list2, list3))
# print(zipped_list)

# eg

names = ['Anna', 'Bob', 'Charlie']
scores = [50, 60, 70]
zipped_names_scores = dict(zip(names, scores))
print(zipped_names_scores)