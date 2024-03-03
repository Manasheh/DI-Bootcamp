#Exercise 1:
# Ask the user for a 
# number between 1 and 100

# If the number is a multiple of three, print "Fizz"

# If the number is a multiple of five, print "Buzz".

# If the number is a multiple is a multiples of both three and five, print "FizzBuzz" instead.

user_choice = int(input('Enter a number between 1 and 100 '))

print(f"Your entered {user_choice}")
if user_choice % 3 == 0 and user_choice % 5 == 0 :
     print('Fizzbuzz')
elif user_choice % 5 == 0:
     print('Buzz')
elif user_choice % 3 == 0:
     print('Fizz')
     
    