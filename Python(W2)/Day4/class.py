# # FUNCTIONS 

# # # def say_hello(name1,name2):
# # #     '''print a message to the username'''
# # #     print(f'Hello! {name1} {name2}')
# # # say_hello("Alice and", "Julius")


# # def say_hello_language(username:str, language:str):
# #     '''prints a message to the username in the specified language'''
# #     if language == 'EN':
# #         print(f'{username} Hello there !')
# #     elif language == 'PT':
# #         print(f' Oi, {username}')
# #     elif language == 'RU':
# #         print(f'Shalom, {username}')
# #     elif language == 'HE':
# #         print(f"שלום, {username}")
# # say_hello_language('Menashe', 'EN')


# # def say_hello_language(username:str, language:str='EN'):
# #     '''prints a message to the username in the specified language'''
# #     if language == 'EN':
# #         print(f'{username} Hello there !')
# #     elif language == 'PT':
# #         print(f' Oi, {username}')
# #     elif language == 'RU':
# #         print(f'Shalom, {username}')
# #     elif language == 'HE':
# #         print(f"שלום, {username}")
# # say_hello_language('Menashe')

# #SCOPE

# # count = 100
# # def calculate(a, b):
# #     #to use global varaiable we need to use the word global  
# #     global count
# #     result = a + b
# #     count += result
# #     return count


# # print(calculate(2,3))

# # def country_info(country):
# #     if country == "Israel":
# #         capital =  "Jerusalem"
# #         population = 9300000
# #     elif country == 'Brazil':
# #         capital = 'Brasília'
# #         population = 2145558387
# #     return country, capital, population
# # country, capital , population = country_info('Israel')
# #     # return  f'Capital is {capital} and  Population is {population}'
# # print(country_info('Israel'))

# students = ['Harry', 'Hermione', 'Ron', 'Luna']

# # def selector_heat(names:list):
# #     for name in names:
# #         welcome_list = []
# #         print(f'Welcome to Tel aviv {name}')
# # print(selector_heat(students))


# # modifying a list in a function 

# # def selector_heat():
# #     for i, name in enumerate(students):
# #         students[i] = f'{name} Dumbledore'

# # selector_heat()
# # print(students)


# #args are any data/sequence that is pass as argument to a function
# # can be tuple list




# # **kwrgs creates a key value pairs and create a dictionary from it

# # def create_info_dict(**kwargs):
# #     return kwargs
# # print(create_info_dict(name = 'Juliana', email = '234@gmail.com'  ,age= 26))


# def create_info_dict(**kwargs):
#     for key, value in kwargs.items():
#         print(f'key: {key}, value: {value}')
# print(create_info_dict(name = 'Juliana', email = '234@gmail.com'  ,age= 26))
