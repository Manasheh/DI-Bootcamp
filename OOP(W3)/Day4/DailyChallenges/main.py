import re
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = re.findall(r'\b\w+\b', self.text.lower())
        word_count = Counter(words)
        return word_count.get(word, None)

    def most_common_word(self):
        words = re.findall(r'\b\w+\b', self.text.lower())
        word_count = Counter(words)
        if word_count:
            return word_count.most_common(1)[0][0]
        else:
            return None

    def unique_words(self):
        words = re.findall(r'\b\w+\b', self.text.lower())
        return list(set(words))

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)

class TextModification(Text):
    def remove_punctuation(self):
        return re.sub(r'[^\w\s]', '', self.text)

    def remove_stopwords(self):
        stopwords = set([
            'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
            'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers',
            'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
            'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are',
            'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
            'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until',
            'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into',
            'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down',
            'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here',
            'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more',
            'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
            'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'
        ])
        words = re.findall(r'\b\w+\b', self.text.lower())
        return ' '.join([word for word in words if word not in stopwords])

    def remove_special_characters(self):
        return re.sub(r'[^A-Za-z0-9\s]', '', self.text)

text = "A good book would sometimes cost as much as a good house."
text_analysis = Text(text)

print(text_analysis.word_frequency("good"))  
print(text_analysis.most_common_word())      
print(text_analysis.unique_words())         

file_analysis = Text.from_file('the_stranger.txt')
print(file_analysis.most_common_word()) 

# Bonus
modified_text = "Hello! This is a text with some punctuation, stopwords, and special characters."
text_modification = TextModification(modified_text)

print(text_modification.remove_punctuation())        
print(text_modification.remove_stopwords())
print(text_modification.remove_special_characters()) 
