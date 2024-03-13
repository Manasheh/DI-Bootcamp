# #json

import json
import os

# dir_path = os.path.dirname(os.path.realpath(__file__))
# #create a new json file from python dictionary
# my_family = {
#     "parents":['Beth', 'Jerry'],
#     "children":['Summer', 'Morty']
# }

# json_file = 'family.json'
# # create a file

# with open(dir_path + '\\family.json', 'w') as f_obj:
#     json.dump(my_family, f_obj)


# #convert dict to json string
    
# json_str = json.dumps(my_family)
# print(json_str)


# #printing json object properly/nicely
    
# with open(dir_path + '\\family.json', 'w') as f_obj:
#     json.dump(my_family, f_obj, indent= 2, sort_keys= True)

# #Retrieve JSON data to dictionary
    
# with open(dir_path + '\\family.json', 'r') as f_obj:
#     my_family = json.load(f_obj)
#     print(my_family)






# my_family = {
#     "parents":['Beth', 'Jerry'],
#     "children":['Summer', 'Morty']
# }

# #We want to save this python dictionary into a json file.

# with open (dir_path + '\\json_1', 'w') as f:
#     json.dump(my_family, f,  indent = 2, sort_keys = True)

# json_file = 'json_1.json'

# with open (dir_path + '\\json_1', 'r') as f:
#     my_family = json.load(f)
# print(my_family)


#Exercise 1

dir_path = os.path.dirname(os.path.realpath(__file__))

