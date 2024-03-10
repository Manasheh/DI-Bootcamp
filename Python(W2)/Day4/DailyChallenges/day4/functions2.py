# passing lits as arguments
students = ['Harry', "Hermione", 'Ron', 'Luna']

def wizard(names_list:list):
    for name in names_list:
        print(f'{name} you are now a wizard!')
        if name == 'Hermione' or name == 'Luna':
            print(f'{name} you are now a witch!')

# chenging a original list (on the global scope)
def selector_heat():
    for i, name in enumerate(students):
        students[i] = f'{name} - Griffyndor' #We need to redifine by index

selector_heat()
print(students)

# args* : sequence (many arguments can be passed)
def welcome(*args, some_arg):
    welcome_list = []
    for arg in args:
        welcome_list.append(f'Welcome to Hogwarts, {arg}!')
    
    result = '\n'.join(welcome_list)
    return result, some_arg

welcome_str, some_arg = welcome('Andrey', 'Anna', 'Menashe', 'Ytzhak',some_arg='Hello')
print(welcome_str)
print(some_arg)
# print(welcome('Andrey', 'Anna', 'Menashe', 'Ytzhak'))


# **kwargs: creates a dictionary from the key word arguments passed

def create_info_dict(**kwargs):
    for key, value in kwargs.items():
        print(f' key: {key}, value: {value}')
    # return kwargs

create_info_dict(name = 'juliana', email = 'ju@gmail.com', address = 'Ramat Gan', hungry = True)







