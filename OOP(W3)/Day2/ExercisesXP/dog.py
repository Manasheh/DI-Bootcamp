# #Exercise 3

# from main import Dog
# import random
# class PetDog(Dog):  
#     def __init__(self, name, age, weight, trained=False):
#         super().__init__(name, age, weight)  
#         self.trained = trained

#     def train(self):
#         print(self.bark()) 
#         self.trained = True

#     def play(self, *args):  
#         dog_names = [dog.name for dog in args]
#         print(f"{', '.join(dog_names)} all play together")

#     def do_a_trick(self):
#         if self.train:
#             tricks = [
#                 f"{self.name} does a barrel roll",
#                 f"{self.name} stands on his back legs",
#                 f"{self.name} shakes your hand",
#                 f"{self.name} plays dead"
#             ]
#             print(random.choice(tricks))

# dog1 = Dog('Rex', 5, 30)
# dog2 = Dog('Browny', 4, 20)
# dog3 = Dog('Scooby', 6, 34)

# pet_dog = PetDog('Max', 3, 25)
# pet_dog.play(dog1, dog2, dog3)  
# pet_dog.do_a_trick()
