# # Object Oriented Programming(OOP)

# #Create Class

# class Dog:
#     def __init__(self, name, color, age = 0): # initialize the class
#         self.name = name
#         self.color = color
#         self.age = age
#         self.owners = ['Bob', 'John']
#         # pass # just continue without error
#     def bark(self):
#         # print('Wof!!')
#         print(f'{self.name} goes Woof')
#     def walk(self, meters):
#         print(f'{self.name} waled {meters}')
#     def rename(self, new_name):
#         self.name = new_name

# # creating object instances

# shelter_dog = Dog('Rex', 'red')
# pitbull = Dog('Fera', 'gray')
# # pitbull.walk(500)
# # shelter_dog.walk(700)
# # pitbull.rename('flufy')
# # print(pitbull.name)
# # chowchow = Dog('Leao', 'Gingi')
# # pitbull.bark()
# # pitbull.bark()
# # print(shelter_dog.name, shelter_dog.color, shelter_dog.age, shelter_dog.owners)
# # print([pitbull.name, pitbull.color])

# # print(shelter_dog.__dict__) # the objects are represented as a dictionary {'name': 'Rex', 'color': 'red', 'age': 0}




# #Exercise 

# # class Point():
# #     def __init__(self, x, y):
# #         self.x = x
# #         self.y = y

# # ## create an instance of the class
# # p = Point(3,4)

# # ## access the attributes
# # print("p.x is:", p.x)
# # print("p.y is:", p.y)


#Exercise 2 

# Analyse the code below. What will be the output ?

# Explain the goal of the methods

# Create a method that modifies the name of the person

class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)
  
  def name_modify(self, new_name):
    self.name = new_name

  def age2(self, new_age):
    self.age = new_age  

first_person = Person("John", 36)
first_person.name_modify('Menashe')
print(first_person.show_details())
# print(first_person.name = 'Menashe')
# # first_person.show_details()
# first_person.name = 'Menashe'
# first_person.show_details()

# # first_person.name = '30'
# # print(first_person.name)
# # print(first_person.age)



# class Computer():

#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)

# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)

# dell_computer = Computer()

# Computer.description(dell_computer, "Mark")

# # IS THE SAME AS:
# dell_computer.description("Mark")