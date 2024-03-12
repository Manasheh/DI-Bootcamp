# from classwork import AtmAccount


# account2 = AtmAccount('juliana S.')

# print(account2._balance)
# # print(help(AtmAccount))










#inheritance

# class User():
#     def sing_in(self):
#         print('logged in')
# class Wizard(User):
#     def __init__(self, name, power) -> None:
#         self.name = name 
#         self.power = power
    
#     def attack(self):
#         print(f"attcking with power {self.power}")

# class Archer(User):
#     def __init__(self, name, number_of_arrows) -> None:
#         self.name = name 
#         self.power = number_of_arrows
    
#     def attack(self):
#         print(f"arrows left {self.number_of_arrows}")

# # isinstance(instance, Class)
# wizard1 = Wizard('Merlin', 498)
# archer1 = Archer('toy', 80)
# print(isinstance(archer1, Wizard)) # false
# print(isinstance(wizard1, Wizard)) # true
# print(isinstance(archer1, object)) # true

# wizard1 = Wizard('Merlin', 3)
# archer1 = Wizard('Merly', 13)
# wizard1.attack()
# archer1.attack()
# # archer1.sing_in()


#polymorphism

#dunder methods:

# class Toy():
#     def __init__(self, color, age):
#         self.color = color
#         self.age = age
#         self.dict = {
#             'name' : 'Yoyo',
#             'has_pet' : False
#         }

#     def __str__(self):
#         return f"{self.color}"
    
#     def __len__(self):
#         return 5
    
#     def __call__(self):
#         return ('Yes')
    
#     def __getitem__(self, i):
#         return self.my_dict[i]

# action_figure = Toy('red', 0)
# print(action_figure.__str__()) #same as print(str(action_figure))
# print(str(action_figure))
# print(len(action_figure))
# # print(call(action_figure))
# # print(action_figure.__call__())
# print(action_figure())
# print(action_figure['name'])

class Employee:

    raise_amt = 1.04

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@email.com'
        self.pay = pay

    def fullname(self):
        return f"{self.first} {self.last}"
    
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amt)

    def __repr__(self):
        return f"Employee {self.first} {self.last} {self.pay}"

    def __str__(self):
        return f"{self.fullname} {self.email}"
    
    def __add__(self, other):
        return self.pay + other.pay
    
    def __len__(self):
        return len(self.fullname())
    


    

emp_1 = Employee('Corey', 'Schafer', 50000)
emp_2 = Employee('Test', 'Employee', 60000)
print(len(emp_1))
# print(emp_1 + emp_2)
# print(emp_1)
# print(emp_1 + 1000)

# repr(emp_1) # should be use for logging debugging
# str(emp_1) # use to display to the end user and for more readebility


# https://youtu.be/3ohzBxoFHAY