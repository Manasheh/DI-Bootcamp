#Challenge 1

# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
#solution

# user_input = input('enter a list ')
# use_split_and_sort = sorted(user_input.split())
# print(use_split_and_sort)

# Challenge 2
# Write a function that finds the longest word in a sentence. 
# If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

def find_longest_word(str):
    words = str.split()
    longest_word = ''
    for word in words:
        if len(word) > len(longest_word):
            longest_word  = word
    return longest_word


print(find_longest_word('return the first longest word from the sentence.'))
