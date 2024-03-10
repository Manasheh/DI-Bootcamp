# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

# user_word = input('Enter a word ')
# my_dict = {}

# for index, letter in enumerate(user_word):
#     # print(letter, index)
#     if letter in my_dict:
#         my_dict[letter].append(index)
#     else:
#         my_dict[letter] = [index]
# print(my_dict)


# Create a program that prints a list of the items you can afford in
# the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.

# Hint : make sure to convert the amount from dollars to numbers.
# Create a program that deletes the $ sign, and the comma (for thousands)


items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = '$300'
clean_wallet = int(wallet.strip('$'))
# things to do :

for item, price in items_purchase.items():
    # price.replace('$', '') #or  use .strip() method
    clear_price = price.strip('$')
    clean_price = clear_price.replace(',','')
    float(clear_price)
    items_purchase.update({item : clean_price})
# 1) check the each price of the item by looping through items_purchase
basket = [] 
for item, price in items_purchase.items():
    if price <= clean_wallet:
        basket.append(item)
        wallet -= price
    else:
        continue
print(basket)
print(wallet)
# 2) compare / check if i have enough money for it
# 3 ) put the item in the basket(initially create the basket to an empty list)
# 4)  substract the price from the wallet

# new review



