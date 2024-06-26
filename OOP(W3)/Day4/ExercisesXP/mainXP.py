#Exercise 1
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

import os
import json
import random

dir_path = os.path.dirname(os.path.realpath(__file__))

def get_words_from_file():
    with open (dir_path + '\\word_file.txt', 'r') as f:
        content = f.read()
        words = content.split()
        return words

def get_random_sentence(length):
    random_words = random.choices(get_words_from_file(), k = length)
    return ' '.join(random_words).lower()

def main():
    print('Prints random sentence of desire length')
    try:
        length = int(input("Enter a valid number"))
        if length > 2 and length < 20:
            print(get_random_sentence(length))
        
    except:
        print('Invalid input')
main()


#Exercise 2

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}
"""

sample = json.loads(sampleJson)
data = sample['company']['employee']['payable']['salary']
sample['company']['employee']['birth_date'] = '01-01-1995'
print(sample)

with open ('random.json', 'w') as f:
    json.dump(sample, f, indent = 2)

