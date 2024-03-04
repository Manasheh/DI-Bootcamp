# # #challenge 1

# # # Ask the user for a number and a length.
# # # Create a program that prints a list of multiples 
# # # of the number until the list length reaches length.

# # user_number = int(input(f'user desire number '))
# # user_number_length = int(input(f'User desire number length '))
# # user_output = []
# # for i in range(1 , user_number_length + 1):
# #     x = i * user_number
# #     user_output.append(x)
# # print(user_output)

# # # 2 * 1 
# # # 2 * 2
# # # 2 * 3
# # # way 1) user_input_length % user_input_length = 1 => x * 2 = output > (x + 1) * 2 = output.append(output) => if x + 

# # # way 2) 2 * length -1 > x, 2 * length - 2 => append to x > until 2 * length-length = 0
# #     #2 * 1 = 2
# #     #2 * 2 = 4
# #     #2 * 3 = 6

# # # Challenge 2 

# # Write a program that asks a string to the user, 
# # and display a new string with any duplicate consecutive letters removed.
# #
# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon
#solution
user_word = input('Enter a string ')
result = "".join(dict.fromkeys(user_word)) 
print(result) 

# dict.fromkeys(user_word) creates a dictionary, key and unique values.
#"".join() it joins the unique values of created by the dict.fromkeys






