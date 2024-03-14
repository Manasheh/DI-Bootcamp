from anagram_checker import AnagramChecker

def display_menu():
    print("1. Input a word")
    print("2. Exit")
    choice = input("Enter your choice: ")
    return choice

def validate_word(word):
    word_stripped = word.strip()  # remove white space
    if len(word_stripped.split()) > 1: # check it should not have space, it checks if it have single/multiple word
        print('Error: Only one word is allowed.')
        return False
    if not word_stripped.isalpha(): #checks word contains only characters and not other like no, special characters
        print("Error: only one alphabatic characters are allowed")
        return False
    return True

def display():
    anagram_checker = AnagramChecker()
    while True:
        choice = display_menu()

        if choice == '1':
            user_word = input('Enter a word')
            if validate_word(user_word):
                print(f"YOUR WORD: {user_word.upper()}\n")
                print(f"this is a valid English word.")
                anagrams = anagram_checker.get_anagrams(user_word)
                print(f"Anagrams for your word: {anagrams}")
        elif choice == '2':
            print('Exiting the program')
            return False
        else: 
            print('Invalid choice')


print(display())

    








