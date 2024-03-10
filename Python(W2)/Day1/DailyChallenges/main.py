# # question:
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example

# solution


user_input = input(f'enter a string ')
print(user_input)
if len(user_input) == 10:
    print(f"perfect string the first character is {user_input[0]} and the last character is {user_input[-1]}")
elif len(user_input) < 10:
    print(f'the entered string is not long enough')
else:
    print(f'String is too long')
    

print(f'the first character is : {user_input[0]}')
print(f'the last character is: {user_input[-1]}')

incremented_characters = ''
for x in user_input:
    incremented_characters = incremented_characters + x                                                                   
    print(incremented_characters)
    # if x != 'e':      


# [] = [] + h  >[] = h
#[h] = [h] + e > he
#[he] = [he] + l > hel
#[hel] = [hel] + l > hel
#[hell] = [hell] + o > hel
#[hello] = [hello] + w > helllow
#[hellow] = [hellow] + o > hellowo
#[hell] = [hellowo] + r > hellowor
#[hell] = [helloworl] + l > helloworl
#[hell] = [helloworl] + d > helloworld
    
    


