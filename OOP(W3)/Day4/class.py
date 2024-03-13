# #Python I/O

# # old school way : problem is to explicitly close the file
# # file_obj = open('test.txt')
# # content = file_obj.read()
# # print(content)
# # file_obj.close()


# #new way use context manager "with" and as "f"

# # with open('test.txt', 'w+') as f:
# #     data = f.write("I am appending the existing file\n New line")
# #     f.seek(0) # taking the cursor to the first line again
# #     data1 = f.read()
# #     print(data1)

# # with open('test.txt', 'r') as f:
# #     data = f.readline()
# #     print(data)

# import os

# dir_path = os.path.dirname(os.path.realpath(__file__))

# # with open(dir_path + '\\test.txt', 'r') as file_obj:
# #     content = file_obj.readline()
# #     content = file_obj.readline()
# #     print(content)


# with open(dir_path + '\\test.txt', 'r') as file_obj:
#     content = file_obj.read(2)
#     print(content)

import os

#read line by line
dir_path = os.path.dirname(os.path.realpath(__file__))

# with open (dir_path + '\\starwars.txt', 'r') as f:
#     for line in f:
#         print(line, end = '')

#read the fifth line
# with open (dir_path + '\\starwars.txt', 'r') as f:
#     print(f.readline(5))

#read only the first five character of the file

# with open (dir_path + '\\starwars.txt', 'r') as f:
    # list_strings = f.readlines() #return list of string
#     words = [[char for char in word.strip()] for word in list_strings] #list comprehention
#     print(words)

# check how many times it occur
# with open (dir_path + '\\starwars.txt', 'r') as f:
#     list_strings = f.readlines() #return list of string

#     darth = 0
#     luke = 0
#     lea = 0
#     for name in list_strings:
#         if name.lower().strip() == 'darth':
#             darth += 1
#         if name.lower().strip() == 'lea':
#             lea += 1
#         if name.lower().strip() == 'luke':
#             luke += 1

# print(darth, lea, luke)



        



    

