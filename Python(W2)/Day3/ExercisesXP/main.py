# # # # # #EXERCISE 1
# # # # # # Convert the two following lists, into dictionaries.
# # # # # keys = ['Ten', 'Twenty', 'Thirty']
# # # # # values = [10, 20, 30]
# # # # # # solution

# # # # # resultDict = dict(zip(keys, values))
# # # # # print(resultDict)

# # # # #EXERCISE 2
# # # # A movie theater charges different ticket prices depending on a person’s age.
# # # # if a person is under the age of 3, the ticket is free.
# # # # if they are between 3 and 12, the ticket is $10.
# # # # if they are over the age of 12, the ticket is $15.

# # # # family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# # # # How much does each family member have to pay ?

# # # # Print out the family’s total cost for the movies.
# # # # Bonus: Ask the user to input the names and ages instead of
# # # # using the provided family variable (Hint: ask the user for
# # # # names and ages and 
# # # # add them into a family dictionary that is initially empty).

# # # #Method 1:
# # # # family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# # # # ticket = 0

# # # # for name, age in family.items():
# # # #     if age <= 3:
# # # #         ticket += 0
# # # #     elif age > 3 and age <= 12:
# # # #         ticket += 10
# # # #     else:
# # # #         ticket += 15
# # # # print(ticket)

# # # #Bonus:

# # # # family = {}
# # # # ticket = 0
# # # # user_name = input('Enter Your Name : ') 
# # # # user_age = int(input('Enter Your age : '))
# # # # while True:
# # # #     if user_age <= 3:
# # # #         ticket += 0
# # # #         family.update({'name': user_name,  'age': user_age})
# # # #         continue
# # # # print(family)



# # # #EXERCISE 3
# # # name: Zara 
# # # creation_date: 1975 
# # # creator_name: Amancio Ortega Gaona 
# # # type_of_clothes: men, women, children, home 
# # # international_competitors: Gap, H&M, Benetton 
# # # number_stores: 7000 
# # # major_color: 
# # #     France: blue, 
# # #     Spain: red, 
# # #     US: pink, green
# # # 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# # # The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# # # 3. Change the number of stores to 2.
# # # 4. Print a sentence that explains who Zaras clients are.
# # # 5. Add a key called country_creation with a value of Spain.
# # # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# # # 7. Delete the information about the date of creation.
# # # 8. Print the last international competitor.
# # # 9. Print the major clothes colors in the US.
# # # 10. Print the amount of key value pairs (ie. length of the dictionary).
# # # 11. Print the keys of the dictionary.
# # # 12. Create another dictionary called more_on_zara with the following details:


# # # #SOLUTIONS 
# brand = {'name': 'Zara',
# 'creation_date': 1975,
# 'creator_name': 'Amancio Ortega Gaona',
# 'type_of_clothes': ['men', 'women', 'children', 'home' ],
# 'international_competitors': ['Gap', 'H&M', 'Benetton'],
# 'number_stores': 7000 ,
# 'major_color': {
#     'France': 'blue', 
#     'Spain': 'red', 
#     'US': ('pink', 'green') }
# }

# brand['number_of_stores'] = 2
# brand['country_creation'] = 'Spain'
# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')
# del brand['creation_date']
# print(brand['international_competitors'][-1])
# print(brand['major_color']['US'])
# print(len(brand))
# # print(brand)
# for key in brand.keys():
#     print(key)


# more_on_zara = {
#     'creation_date': 1975,
#     'number_stores': 10000
# }
# brand.update(more_on_zara)
# print(brand)


#EXERCISE 4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]


# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}



# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}



# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# disney_user_A = {}

# for i, name in enumerate(users):
#     disney_user_A.update( {name : i})
# print(disney_user_A)

# for i, name in enumerate(users):
#      disney_user_A.update( {i : name})
# print(disney_user_A)

# for i, name in enumerate(sorted(users)):
#     disney_user_A.update({i: name})
# print(disney_user_A)

# disney_user_A = {}
# for i, name in enumerate(sorted(users)):
#     if 'i' in name:
#         disney_user_A.update({i: name})
# print(disney_user_A)

# disney_user_A = {}
# for i, name in enumerate(sorted(users)):
#     if name[0] == 'm' or name[0] == 'p' in name:
#         disney_user_A.update({i: name})
# print(disney_user_A)
