

class AnagramChecker:
    def __init__(self):
        with open('text.txt', 'r') as f:
            words = f.read()
            self.list_of_words = words.split()

    def is_valid_word(self, word):
       
        if word in self.list_of_words:
            return True
        else:
            return False

    def is_anagram(self, word1, word2):
        word1 = word1.upper() 
        word2 = word2.upper()
        
        word1_sorted = sorted(word1)      
        word2_sorted = sorted(word2)      
        if word1_sorted == word2_sorted:
            return True
        else:
            return False

   

    def get_anagrams(self, word):

        anagram = []
        for word_from_list in self.list_of_words:
            if self.is_anagram(word_from_list, word):
                anagram.append(word_from_list)
           
        return anagram
            
a = AnagramChecker()

print(a.get_anagrams('silent'))
    
