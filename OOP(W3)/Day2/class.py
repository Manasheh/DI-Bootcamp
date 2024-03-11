# # class Parent:
# #     def speak(self):
# #         print('Parent speaking')

# # class Child(Parent):
# #     pass
# #     #  def speak(self):
# #     #     print('Children speaking')
# # class Grandchild(Child):
# #     pass

# # person = Parent()
    
# # children = Parent()
# # person.speak()
# # person2 = Child()
# # person2.speak()
# # person3 = Child()
# # person3.speak()


# #eg
# # class Animal:
# #     def __init__(self, name, family, legs) -> None:
# #         self.name = name
# #         self.family = family
# #         self.legs = legs

# #     def make_sound(self):
# #         print(f'{self.name} is making sound')
# # class Dog(Animal):
# #     def __init__(self, name, family, legs, trained = False):
# #         super().__init__(name, family, legs)
# #         self.trianed = trained
# #     pass

# # animal1 = Animal('Toto', 'Canidae', 4)
# # animal1.make_sound()
# # dog1 = Dog('Rex', 'Canidea', 4)
# # dog1.make_sound()

#repeat this exercise again

# # Try to recreate the class explained below:

# # We have a class called Door that has an attribute 
# # of is_opened declared when an instance is initiated.

# # We can create a class called BlockedDoor that inherits from the base class Door.

# # We just override the parent class's functions of open_door()
# #  and close_door() with our own BlockedDoor version of those functions,
# #  which simply raises an Error that a blocked door cannot be opened or closed.


class Door:
    def __init__(self, is_opened = True):
        self.is_opened = is_opened
    
    def open_door(self):
        self.is_opened = True
        print('Door is open')

    def close_door(self):
        self.is_opened = False
        print('Door is close')

class BlockDoor(Door):
    def open_door(self):
        raise Exception('Cannot open a block door')
       
    def close_door(self):
        raise Exception('Cannot close a Block door')
    
door1 = Door(False)
door1.close_door()

door2 = BlockDoor()
door2.close_door()

# class Animal:
#     def __init__(self, type, number_legs, sound) -> None:
#         self.type = type

        



# class Alien():
#     def __init__(self, name, planet):
#         self.name = name
#         self.planet = planet

#     def fly(self):
#         print(self.name, 'is flying!')

#     def sleep(self):
#         print("Aliens don't sleep")

# class Animal():
#     def __init__(self, name):
#         self.name = name

#     def sleep(self):
#         print("zzzZZZZZ")

# class Dog(Animal):
#     def bark(self):
#         print("{} barked, WAF !".format(self.name))

# class AlienDog(Alien, Dog):
#     def bark(self):
#         print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))




