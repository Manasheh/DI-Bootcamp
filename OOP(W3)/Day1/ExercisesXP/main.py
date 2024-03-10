# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
#solution:
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# cat_one = Cat('Luni', 6)
# cat_two = Cat('Simba', 4)
# cat_three = Cat('Luni', 1)
# def oldestCat(*args):
#     return max(args)
# print(f'the oldest cat is {oldestCat(cat_one.age, cat_two.age, cat_three.age)} years old.')

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
#solution:

# class Dogs:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         x = self.height * 2
#         print(f'{self.name} jumps {x} cm high!')



# davids_dog = Dogs('Rex', 50)
# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog = Dogs('Teacup', 20)
# sarahs_dog.bark()
# sarahs_dog.jump()



# my_dog = Dogs('Browny', 5)
# my_dog.bark()
# my_dog.jump()

# if int(davids_dog.height) > int(sarahs_dog.height):
#     print(f'{davids_dog.name} is bigger')
# elif int(sarahs_dog.height) > int(davids_dog.height):
#     print(f'{sarahs_dog.name} is bigger') 
# else:
#     print('they are the same')



#Exercise 3
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
    
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


#Exercise 4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#             print(f'{new_animal} is added to the list.')
#         else:
#             print(f'{new_animal} already in the list')

#     def get_animal(self):
#         animal_list = "Animals in the zoo:"
#         for animal in self.animals:
#              animal_list = animal + '\n'
#              print(animal_list)
            

#     def sell_animal(self, animal_sold):
#             if animal_sold in self.animals:
#                  self.animals.remove(animal_sold)
#                  print(f'{animal_sold} is sold out')
#             print(self.animals)

#     def sorted_list(self):
#          sorted_list_animal = sorted(self.animals)
#          print(sorted_list_animal)
              


# my_zoo =Zoo('Beautiful zoo')
# my_zoo.add_animal('Tiger')
# my_zoo.add_animal('Lion')
# my_zoo.add_animal('Panther')
# my_zoo.get_animal()
# my_zoo.sell_animal('Panther')
# my_zoo.sorted_list()