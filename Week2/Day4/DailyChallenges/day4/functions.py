# functions

# def say_hello(username):
#     '''prints a message to the username''' #docstrings: describe the function
#     print(f'{username}, hello there!')

# username1 = 'Daniel'
# say_hello(username1)

# print(input.__doc__) #prints the documentation of the function

# Default arguments 
def say_hello_language(username:str, language:str = 'EN'):
    '''prints a message to the username in the specified language'''
    if language == 'EN':
        print(f'{username}, hello there!')
    elif language == 'PT':
        print(f'Oi, {username}!')
    elif language == 'HE':
        print(f'םולש, {username}!')
    elif language == 'CH':
        print(f'Nihao, {username}!')
    elif language == 'RU':
        print(f'Privet, {username}!')


# say_hello_language('Rick', 'RU') #positional arguments
# say_hello_language(username = 'juliana', language = 'PT')#keyword arguments
# say_hello_language('juliana', language = 'PT')#both: the first has to be the positional argument

# Default arguments
# def sum(a,b=5):
#     print(a+b)

# sum(10,25)
        
#global scope
count = 100

def calculation(a, b):
    #local scope
    global count
    result = a + b
    count += result
    return result

# print(calculation(5, 12))

# print(count)

def sum_total(a,b, count):
    calc = calculation(a,b)
    calc += count
    return calc

print(sum_total(2,4,count))

# Returning More Than One Value With A Tuple
def country_info(country):
    capital = ''
    population = 0
    if country == 'Israel':
        capital = 'Jerusalem'
        population = 9364000
    elif country == 'Brazil':
        capital = "brazilia"
        population = 214000000
    return country, capital, population

print(country_info('Israel'))
country, capital, pop = country_info('Israel')

print(f'{country}\'s population is {pop}, and the capital is {capital}')

# quick review: unpacking a tupple
# my_tupple = (1,2,3,4)
# a,b,c,d = my_tupple
# print(a)
# print(b)
# print(c)



