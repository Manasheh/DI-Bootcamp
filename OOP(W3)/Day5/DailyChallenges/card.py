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
