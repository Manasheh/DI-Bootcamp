#dog.py

#Exercise 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# bengal_cat = Bengal("Bengie", 4) 
# chartreux_cat = Chartreux("Charlie",3)  
# siamese_cat = Siamese("Sammy",5)
# all_cats = [bengal_cat, chartreux_cat, siamese_cat]
# sara_pets = Pets(all_cats)
# sara_pets.walk()

#Exercise 2

# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
    
#     def bark(self):
#         return f'{self.name} is barking'
    
#     def run_speed(self):
#         return self.weight / (self.age * 10)

    
#     def fight(self, other_dog):
#         my_dog_score = self.run_speed() * self.weight
#         other_dog_score = other_dog.run_speed() * other_dog.weight

#         if my_dog_score > other_dog_score:
#             return f'{self.name} won the fight'
#         elif my_dog_score < other_dog_score:
#             return f'{other_dog.name} won the fight'
#         else:
#             return f'Its a tie'

# dog1 = Dog('Rex', 5, 30)
# dog2 = Dog('Browny', 4,20)
# dog3 = Dog('Scooby', 6, 34)
# print(dog1.bark())
# print(dog2.bark())
# print(dog3.bark())

# print(dog1.run_speed())
# print(dog2.run_speed())
# print(dog3.run_speed())

# print(dog1.fight(dog2))
# print(dog2.fight(dog3))
# print(dog3.fight(dog1))


#Exercise 4


# class Family:
#     def __init__(self, last_name):
#         self.members = []
#         self.last_name = last_name

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"Congratulations! {kwargs['first_name']} {kwargs['last_name']} was born into the {self.last_name} family.")

#     def is_18(self, name):
#         for member in self.members:
#             if member['first_name'] == name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"Family {self.last_name} Members:")
#         for member in self.members:
#             print(f"Name: {member['first_name']} {member['last_name']}, Age: {member['age']}, Gender: {member['gender']}")

# my_family = Family("Johnson")

# my_family.members =  [
#         {'first_name': 'Michael', 'last_name': my_family.last_name, 'age': 35, 'gender': 'Male'},
#         {'first_name': 'Sarah', 'last_name': my_family.last_name, 'age': 32, 'gender': 'Female'}
#     ]

# my_family.born(first_name='Jessica', last_name=my_family.last_name, age=0, gender='Female')

# print("Is Michael over 18?", my_family.is_18('Michael')) 

# my_family.family_presentation()



#Exercise 5

class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['first_name']} {kwargs['last_name']} was born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['first_name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family {self.last_name} Members:")
        for member in self.members:
            print(f"Name: {member.get('first_name', 'Unknown')} {member.get('last_name', 'Unknown')}, Age: {member.get('age', 'Unknown')}, Gender: {member.get('gender', 'Unknown')}")


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name)
        for member in members:
            member['incredible_name'] = member['name'] + member['power']
        self.members = members

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} can use the power: {member['power']}")
                else:
                    raise ValueError(f"{member['name']} is not over 18 years old.")

    def incredible_presentation(self):
        print(f"Here is our powerful family {self.last_name}:")
        super().family_presentation()


incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredibles_members)

incredibles_family.incredible_presentation()

incredibles_family.born(first_name='Baby Jack', last_name=incredibles_family.last_name, age=0, gender='Male', power='Unknown Power')

incredibles_family.incredible_presentation()




