
#Exercise 1

# What is a class?
# A class is a blueprint for creating objects. 
# It defines a set of attributes and methods that the created objects (instances) will have.
# Think of it as a template for creating objects with similar properties and behaviors.

# What is an instance?
# An instance is a specific object created from a class. 
# It has the class-defined attributes and methods. 

# What is encapsulation?
# Encapsulation is the mechanism of bundling the data (attributes) and methods
# that operate on the data into a single unit, or class, and restricting access to 
# some of the object’s components. This means that the internal representation of an 
# object is hidden from the outside, only exposing what is necessary.

# What is abstraction?
# Abstraction is the concept of hiding the complex reality while exposing only the necessary parts. 
# It's a way to reduce complexity and allow efficient design and implementation. 

# What is inheritance?
# Inheritance is a way to form new classes using classes that have already been defined. 
# The new class, known as a derived or child class, inherits attributes and methods of the existing class, 
# known as a base or parent class. This allows for code reuse and the creation of a more logical structure.

# What is multiple inheritance?
# Multiple inheritance is a feature of some object-oriented programming languages in which a class can 
# inherit behaviors and attributes from more than one parent class. This can be useful but also lead to 
# complications (like the Diamond Problem), and different languages have different ways of dealing with these.

# What is polymorphism?
# Polymorphism is the ability of an object to take on many forms. 
# The most common use of polymorphism in OOP occurs when a parent class 
# reference is used to refer to a child class object. It allows methods to 
# do different things based on the object it is acting upon, even though they might share the same name.

# What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which base 
# classes are searched when executing a method. In multiple inheritance scenarios, 
# it determines the order in which methods are resolved.



#Exercise 2

# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck.
# After a card is dealt, it should be removed from the deck.



import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in Deck.suits for value in Deck.values]

    def shuffle(self):
        if len(self.cards) != 52:
            raise ValueError("The deck must have 52 cards to shuffle.")
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            raise ValueError("All cards have been dealt.")
        return self.cards.pop()

deck = Deck()
deck.shuffle()

card_dealt = deck.deal()
print(f"Dealt card: {card_dealt}")

print(f"Cards left in deck: {len(deck.cards)}")
